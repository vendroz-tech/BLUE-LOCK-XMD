const moment = require('moment-timezone');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');


async function githubCommand(sock, chatId, message) {
  try {
    const res = await fetch('https://api.github.com/repos/vendroz-tech/BLUE-LOCK-XMD');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    let txt = `*❲  BLUE LOCK XMD ❳*\n\n`;
    txt += `◯  *ᑎᗩᗰᗴ* : ${json.name}\n`;
    txt += `◯  *ᗯᗩTᑕᕼᗴᖇՏ* : ${json.watchers_count}\n`;
    txt += `◯  *ՏIᘔᗴ* : ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `◯  *ᒪᗩՏT ᑌᑭᗪᗩTᗴᗪ* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`;
    txt += `◯  *ᑌᖇᒪ* : ${json.html_url}\n`;
    txt += `◯  *ᖴOᖇKՏ* : ${json.forks_count}\n`;
    txt += `◯  *ՏTᗩᖇՏ* : ${json.stargazers_count}\n\n`;
    txt += `⚽ *BLUE LOCK XMD*`;

    // Use the local asset image
    const imgPath = path.join(__dirname, '../ichigo/menu.jpg');
    const imgBuffer = fs.readFileSync(imgPath);

    await sock.sendMessage(chatId, { image: imgBuffer, caption: txt }, { quoted: message });
  } catch (error) {
    await sock.sendMessage(chatId, { text: '❌ Error fetching repository information.' }, { quoted: message });
  }
}

module.exports = githubCommand; 