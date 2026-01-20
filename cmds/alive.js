const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `╭─⟪ 👀 *B.L.XMD >/<* ⟫──❍\n` +
`│ ♻️ STATUS  : ONLINE\n` +
`│ 🧬 VERSION : ${settings.version}\n` +
`│ ⚽ MODE    : PUBLIC\n` +
`├─⟪ SYSTEM ACTIVE ⟫──❍\n\n` +
`├✥CORE FEATURES\n` +
`├✥GROUP MANAGEMENT\n` +
`├✥ANTILINK PROTECTION\n` +
`├✥FUN COMMANDS\n` +
`├✥MORE MODULES LOADED\n\n` +
`╰⟪ TYPE *.menu* TO ACCESS FULL PROTOCOLS ⟫─❍`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363423033788810@newsletter',
                    newsletterName: '🦠⃟ ҉҉ ҈ 𝗜𝗖𝗛𝗜𝗚𝗢-𝐓𝐄𝐂𝐇 𝐒𝐔𝐏𝐏𝐎𝐑𝐓',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;