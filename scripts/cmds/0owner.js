const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"RB-BADOL-KHAN",// Convert By Goatbot Raja-Babu 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃•𝐁𝐀𝐃𝐀𝐋',
      gender: '𝐌𝐀𝐋𝐄',
      age: '𝟐𝟕',
      height: '5.6',
      facebookLink: 'www.facebook.com/100000484977006',
      messengerLink: 'm.me/100000484977006',
      whatsappLink: 'wa.me/+8801782721761',
      nick: '𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍'
    };

    const bold = 'https://i.imgur.com/2NhHoFE.jpeg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const jpegPath = path.join(tmpFolderPath, 'owner_video.jpeg');

    fs.writeFileSync(jpegPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
❤️━❮●❯━━━━━❪𝐑•𝐁❫━━━━━❮●❯━❤️\n\n💛𝐎𝐖𝐍𝐄𝐑-𝐈𝐍𝐅𝐈𝐑𝐌𝐀𝐓𝐈𝐎𝐍:💛\n\n
𝐍𝐀𝐌𝐄: ${ownerInfo.name}\n
𝐆𝐄𝐍𝐃𝐄𝐑: ${ownerInfo.gender}\n
𝐀𝐆𝐄: ${ownerInfo.age}\n
𝐇𝐄𝐈𝐆𝐇𝐓: ${ownerInfo.height}\n
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: ${ownerInfo.facebookLink}\n
𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐄𝐑: ${ownerInfo.messengerLink}\n
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: ${ownerInfo.WhatsAppLink}\n
𝐍𝐈𝐂𝐊: ${ownerInfo.nick}\n
\n\n❤️━❮●❯━━━━━❪𝐑•𝐁❫━━━━━❮●❯━❤️`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('📌', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
