//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256786061395";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://ibb.co/thVtwH6.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEI1dTZDK1cxd1lJVFNlRzVyZS96WU8rTDdwaUpqRjFuYUdyYzdZS2ltZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEY0OXlEdkxRVzJxRXcwdGRJamhua1VmVXRwbGVZa1BXZ1JOa014Y3ZuWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUCtnUmVQNHZGcjV4OWEwNEs3OU8zdGpwNFVjZGNGKzN5eHRQbG5pVUdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dHlXSm1kNHhyNUl6dnFjaWhweCs0ZzNwVkc2QTFNMjQrby9nazdLc2ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMOUx0Q1B0S0k0UlVtT1lQcFZ6eVR3d21ZZ2NZWWhXL2RaVlgwQ2FzVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI0VTNYQWJJVGtFQ3lsMkwyR0NRK0xNc2I0Z2grMGZ3aEllZk8rb2NDRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09Dbmg0by9PRzgvczFyR0QwcjJMVk9lVnFTOTlBdUdDRGJZSEVTc2pIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzhENDRiTS8yODJNWWJQMjZHaUtPUkpXeUpLOUlVeUhaai82N3hQaEtYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkowV1RqcWhkWVd1SVJnM3Z1WXRyc0lrYm85cmtlUVRLTzZ4SDlkdkQxM2ZNaGtxUUU0THEzZFJuYTdueGdTZWJpdEh4Vlp4bnhRQ1cxYVhlUlRqYUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJva2dqNzMydlNmVmtMTm5Fby8vQWl0eXBXQlFBelY3Zlp2YTZZbzhsNm4wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKR0tsdWdoYVRULTI4Y3UzYjdYTS1nIiwicGhvbmVJZCI6Ijk2MmUzODI4LWMxNWYtNDc1OC05ZTdiLWI1MWFhMmQ2N2MxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeDVlOVVhS2FBWk5pVlBucW5WMy9RWFAzcEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWdqYyt4Myt5M0R1cUcvQVFZZ2JTMGxYdElZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM3MlA0UENaIiwibWUiOnsiaWQiOiIyNTY3ODYwNjEzOTU6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidHlwaW5nIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMzhyTk1FRUlLNHU3UUdHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1STQzTWh4Uzczb2VFWUtLOERwNCtab1VpTjRyRzdIanJHaE83bXgzVFRVPSIsImFjY291bnRTaWduYXR1cmUiOiI3SW85Q3VyeFB2Z0VkRFY5SUtRTjRiWkptdlV3bFZ1WjZQQ1NvRG1VRHljY0ROL0ZGbWhML0Z0SjdHeVpiRFpUMDNlLzFlazY3YlJJeGtiY1ZyaWJBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNnVTeXNzTFM1OGhZTzdDaDZzeVRzdHEwVnpmVUJ6TEFUblNnL1dQUHMwSFNtVmlZNXRvN0U3Q01ySVExdU5ZRTA1MXVETk1tS3Bzdy9ZUlNUQWlPRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3ODYwNjEzOTU6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVNPTnpJY1V1OTZIaEdDaXZBNmVQbWFGSWplS3h1eDQ2eG9UdTVzZDAwMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDYzODQ4MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`COFFEE_TIME-V2™`",
  author: process.env.PACK_AUTHER || "COFFEE_TIME-V2",
  packname: process.env.PACK_NAME || "K A B O I",
  botname: process.env.BOT_NAME || "COFFEE_TIME-V2",
  ownername: process.env.OWNER_NAME || "KABOI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "C O F F E E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
