const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━━━━━━━━━━━━━━━━❍
   *🦠 ${settings.botName || 'BLUE LOCK XMD'}*  
   𝘃𝗲𝗿𝘀𝗶𝗼𝗻: *${settings.version || '1.0'}*
   𝗕𝗬 ${settings.botOwner || 'ICHIGO'}
   𝗬𝗧 : ${global.ytch}
╰━━━━━━━━━━━━━━━━━━❍

*〘 AVAILABLE COMMANDS 〙*

╭━〔 🦠 GENERAL MODULE 〕━━◯
┃⚜╭━━━━━━━━━━━━━━━━━◯
┃⚜┃ .help / .menu
┃⚜┃ .ping
┃⚜┃ .alive
┃⚜┃ .tts <text>
┃⚜┃ .owner
┃⚜┃ .joke
┃⚜┃ .quote
┃⚜┃ .fact
┃⚜┃ .weather <city>
┃⚜┃ .news
┃⚜┃ .attp <text>
┃⚜┃ .lyrics <song_title>
┃⚜┃ .8ball <question>
┃⚜┃ .groupinfo
┃⚜┃ .staff or .admins 
┃⚜┃ .vv
┃⚜┃ .trt <text> <lang>
┃⚜┃ .ss <link>
┃⚜┃ .jid
┃⚜┃ .url
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 🔒 ADMIN MODULE 〕━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .ban @user
┃⚜┃ .promote @user
┃⚜┃ .demote @user
┃⚜┃ .mute <minutes>
┃⚜┃ .unmute
┃⚜┃ .delete or .del
┃⚜┃ .kick @user
┃⚜┃ .warnings @user
┃⚜┃ .warn @user
┃⚜┃ .antilink
┃⚜┃ .antibadword
┃⚜┃ .clear
┃⚜┃ .tag <message>
┃⚜┃ .tagall
┃⚜┃ .tagnotadmin
┃⚜┃ .hidetag <message>
┃⚜┃ .chatbot
┃⚜┃ .resetlink
┃⚜┃ .antitag <on/off>
┃⚜┃ .welcome <on/off>
┃⚜┃ .goodbye <on/off>
┃⚜┃ .setgdesc <description>
┃⚜┃ .setgname <new name>
┃⚜┃ .setgpp (reply to image)
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 👑 OWNER MODULE 〕━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .mode <public/private>
┃⚜┃ .clearsession
┃⚜┃ .antidelete
┃⚜┃ .cleartmp
┃⚜┃ .update
┃⚜┃ .settings
┃⚜┃ .setpp <reply to image>
┃⚜┃ .autoreact <on/off>
┃⚜┃ .autostatus <on/off>
┃⚜┃ .autostatus react <on/off>
┃⚜┃ .autotyping <on/off>
┃⚜┃ .autoread <on/off>
┃⚜┃ .anticall <on/off>
┃⚜┃ .pmblocker <on/off/status>
┃⚜┃ .pmblocker setmsg <text>
┃⚜┃ .setmention <reply to msg>
┃⚜┃ .mention <on/off>
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 ⛓️ CONVERT MODULE 〕━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .blur <image>
┃⚜┃ .simage <reply to sticker>
┃⚜┃ .sticker <reply to image>
┃⚜┃ .removebg
┃⚜┃ .remini
┃⚜┃ .crop <reply to image>
┃⚜┃ .tgsticker <Link>
┃⚜┃ .meme
┃⚜┃ .take <packname> 
┃⚜┃ .emojimix <emj1>+<emj2>
┃⚜┃ .igs <insta link>
┃⚜┃ .igsc <insta link>
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 ⛰️ PIES MODULE 〕━━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .pies <country>
┃⚜┃ .china 
┃⚜┃ .indonesia 
┃⚜┃ .japan 
┃⚜┃ .korea 
┃⚜┃ .hijab
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 🎲 GAMES MODULE 〕━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .tictactoe @user
┃⚜┃ .hangman
┃⚜┃ .guess <letter>
┃⚜┃ .trivia
┃⚜┃ .answer <answer>
┃⚜┃ .truth
┃⚜┃ .dare
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 👾 AI  MODULE 〕━━━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .gpt <question>
┃⚜┃ .gemini <question>
┃⚜┃ .imagine <prompt>
┃⚜┃ .flux <prompt>
┃⚜┃ .sora <prompt>
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 🎐 FUN MODULE 〕━━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .compliment @user
┃⚜┃ .insult @user
┃⚜┃ .flirt 
┃⚜┃ .shayari
┃⚜┃ .goodnight
┃⚜┃ .roseday
┃⚜┃ .character @user
┃⚜┃ .wasted @user
┃⚜┃ .ship @user
┃⚜┃ .simp @user
┃⚜┃ .stupid @user [text]
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 📜 TEXT-ST MODULE 〕━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .metallic <text>
┃⚜┃ .ice <text>
┃⚜┃ .snow <text>
┃⚜┃ .impressive <text>
┃⚜┃ .matrix <text>
┃⚜┃ .light <text>
┃⚜┃ .neon <text>
┃⚜┃ .devil <text>
┃⚜┃ .purple <text>
┃⚜┃ .thunder <text>
┃⚜┃ .leaves <text>
┃⚜┃ .1917 <text>
┃⚜┃ .arena <text>
┃⚜┃ .hacker <text>
┃⚜┃ .sand <text>
┃⚜┃ .blackpink <text>
┃⚜┃ .glitch <text>
┃⚜┃ .fire <text>
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 📥 MEDIA MODULE 〕━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .play <song_name>
┃⚜┃ .song <song_name>
┃⚜┃ .spotify <query>
┃⚜┃ .instagram <link>
┃⚜┃ .facebook <link>
┃⚜┃ .tiktok <link>
┃⚜┃ .video <song name>
┃⚜┃ .ytmp4 <Link>
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 🎭 MISC MODULE 〕━━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .heart
┃⚜┃ .horny
┃⚜┃ .circle
┃⚜┃ .lgbt
┃⚜┃ .lolice
┃⚜┃ .its-so-stupid
┃⚜┃ .namecard 
┃⚜┃ .oogway
┃⚜┃ .tweet
┃⚜┃ .ytcomment 
┃⚜┃ .comrade 
┃⚜┃ .gay 
┃⚜┃ .glass 
┃⚜┃ .jail 
┃⚜┃ .passed 
┃⚜┃ .triggered
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 🇯🇵 ANIME MODULE 〕━━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .nom 
┃⚜┃ .poke 
┃⚜┃ .cry 
┃⚜┃ .kiss 
┃⚜┃ .pat 
┃⚜┃ .hug 
┃⚜┃ .wink 
┃⚜┃ .facepalm 
┃⚜╰━━━━━━━━━━━━━━━━━━◯
┣━━━━━━━━━━━━━━━━━━━━━━◯
╭━〔 😼 GITHUB MODULE 〕━━━◯
┃⚜╭━━━━━━━━━━━━━━━━━━◯
┃⚜┃ .git
┃⚜┃ .github
┃⚜┃ .sc
┃⚜┃ .script
┃⚜┃ .repo
┃⚜╰━━━━━━━━━━━━━━━━━━◯
╰━━━━━━━━━━━━━━━━━━━━━━◯
〘 *ᴊᴏɪɴ ᴄʜᴀɴɴᴇʟ ғᴏʀ ɴᴇᴡs ᴠᴇʀsɪᴏɴs* 〙:`;

    try {
        const imagePath = path.join(__dirname, '../ichigo/menu.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363423033788810@newsletter',
                        newsletterName: '🦠⃟ ҉҉ ҈ 𝐈𝐂𝐇𝐈𝐆𝐎 𝐓𝐄𝐂𝐇ᵖʳⁱᵐᵉ⁹⁹⁹⁹⁹',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363423033788810@newsletter',
                        newsletterName: 'BLUE LOCK XMD',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;