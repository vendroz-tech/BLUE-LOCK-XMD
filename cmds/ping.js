const os = require('os');
const settings = require('../settings.js');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function pingCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: 'Pong!' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);

        const botInfo = `
╭━━〔 🦠 𝐁𝐥𝐮𝐞𝐋𝐨𝐜𝐤-𝐗𝐌𝐃 〕━━❍
┣⬡ 𝐏𝐢𝐧𝐠     : ${ping} ms
┣⬡ 𝐔𝐩𝐭𝐢𝐦𝐞   : ${uptimeFormatted}
┣⬡ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧  : v${settings.version}
┣⬡ 𝐎𝐰𝐧𝐞𝐫   : ${settings.botOwner}
┣⬡ 𝐏𝐥𝐚𝐭𝐞𝐟𝐨𝐫𝐦 : ${settings.plateform}
╰━━━━━━━━━━━━━━━━━━━❍`.trim();

        // Reply to the original message with the bot info
        await sock.sendMessage(chatId, { text: botInfo},{ quoted: message });

    } catch (error) {
        console.error('Error in ping command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get bot status.' });
    }
}

module.exports = pingCommand;
