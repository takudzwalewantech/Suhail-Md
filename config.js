const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "263717467274" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_20_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlQ5SW9heFV2ZGc0dGlqRHpGaHlYU2pYNTJ1R0dYY0VVaG0yT1NFRytEczQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFYamFXRFhGUV9hY2ZOTEZITTFiWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjdhM2M5M2QtZTU1Yy00NTI1LWI2YjctOTI2ZmVmZDY4NjI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDIyOCxcbiAgICAgIDE0NCxcbiAgICAgIDI1MyxcbiAgICAgIDgzLFxuICAgICAgMTg4LFxuICAgICAgMTgzLFxuICAgICAgMzcsXG4gICAgICAxOTgsXG4gICAgICA2NixcbiAgICAgIDQsXG4gICAgICAyMjMsXG4gICAgICAyNDcsXG4gICAgICAxOTEsXG4gICAgICAxMSxcbiAgICAgIDI4LFxuICAgICAgMTk1LFxuICAgICAgMTU1LFxuICAgICAgMzQsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjQxLFxuICAgICAgNzQsXG4gICAgICA4OCxcbiAgICAgIDQxLFxuICAgICAgMTY3LFxuICAgICAgODgsXG4gICAgICAxMjksXG4gICAgICAxOTksXG4gICAgICA3NSxcbiAgICAgIDgyLFxuICAgICAgODMsXG4gICAgICAxMTgsXG4gICAgICAyNTUsXG4gICAgICAyMTMsXG4gICAgICAxNzAsXG4gICAgICAxMTYsXG4gICAgICAyMjcsXG4gICAgICAxNzgsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUtFQUJWV1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzQ2NzI3NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidGFrdWR6d2FsZXdhbnRlY2hcIixcbiAgICBcImxpZFwiOiBcIjEzMTEzMDA0OTYxOTU4OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS93cmhBUXBiZWtzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJubEFIRTNydTIyczhpV0JiRTBVaUhrUWZEeUtGa0dHU2h4SHJNZXNDS0hNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi8vQWppTXVXMjZ0eThiWXViOEVibmlGM01BMUZTZ2hpZ3IvY0crcm5ENlp2R1ZNd0FjaTJaaGp5SUZETkFhMUhnV0h2VUlDeHpLZjVxVXhIMkJUekFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBBWE54QU9uTmtDMk1yeUhJeE92cTBNaVgyMC8xb2V3ai9HME5vazBqRmF0SmVnR0pqVjVPMW5GZGlwQ0wzZVc2Vko3Z2hGQUtmV09tTHloV3pFdWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzQ2NzI3NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MDY3MjQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjR1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFONHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrS0NzMXpRUGNGRzQ2NGJ5K2M1UWFOdFhjNjlDY2lvUUg3QnBEVEtkMWFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzIyNDQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwNjcyNDkxODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Takudzwalewantech",
  ownername:process.env.OWNER_NAME|| "Smart driller Takudzwalewantech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
