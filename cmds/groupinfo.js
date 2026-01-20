async function groupInfoCommand(sock, chatId, msg) {
    try {
        // Get group metadata
        const groupMetadata = await sock.groupMetadata(chatId);
        
        // Get group profile picture
        let pp;
        try {
            pp = await sock.profilePictureUrl(chatId, 'image');
        } catch {
            pp = 'https://i.imgur.com/2wzGhpF.jpeg'; // Default image
        }

        // Get admins from participants
        const participants = groupMetadata.participants;
        const groupAdmins = participants.filter(p => p.admin);
        const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
        
        // Get group owner
        const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || chatId.split('-')[0] + '@s.whatsapp.net';

        // Create info text
        const text = `
╭──「 *𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏* 」
☍ *♻️ID:*
   • ${groupMetadata.id}
☍ *📝𝐍𝐚𝐦𝐞* : 
• ${groupMetadata.subject}
☍ *👥𝐌𝐞𝐦𝐛𝐞𝐫𝐬* :
• ${participants.length}
☍ *🤴🏼𝐆𝐫𝐨𝐮𝐩 𝐎𝐰𝐧𝐞𝐫:*
• @${owner.split('@')[0]}
☍ *👑𝐀𝐝𝐦𝐢𝐧𝐬:*
${listAdmin}

☍ *📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧* :
   • ${groupMetadata.desc?.toString() || 'No description'}
`.trim();

        // Send the message with image and mentions
        await sock.sendMessage(chatId, {
            image: { url: pp },
            caption: text,
            mentions: [...groupAdmins.map(v => v.id), owner]
        });

    } catch (error) {
        console.error('Error in groupinfo command:', error);
        await sock.sendMessage(chatId, { text: 'Failed to get group info!' });
    }
}

module.exports = groupInfoCommand; 