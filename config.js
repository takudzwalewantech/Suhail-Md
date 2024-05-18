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
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_39_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVSElsaElVK29wTnZTNzRwUkFJcHlQbERxRGxtVjZzblZkdWxETVlRY2d3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2MDEzWGo0Y1JOQ0l3b2VUeG10bFlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4ZmIzODM0LTI5MjgtNDdhZS1hMmNiLTRmMzc0OWFiNzM2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAzNSxcbiAgICAgIDE0LFxuICAgICAgMTY1LFxuICAgICAgNjQsXG4gICAgICAyMixcbiAgICAgIDI0MCxcbiAgICAgIDIzLFxuICAgICAgMTU0LFxuICAgICAgMjI5LFxuICAgICAgNTgsXG4gICAgICAyMDIsXG4gICAgICAyMjcsXG4gICAgICA0NyxcbiAgICAgIDAsXG4gICAgICAxMzUsXG4gICAgICA2OSxcbiAgICAgIDE3MyxcbiAgICAgIDEyNixcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDE3OSxcbiAgICAgIDE1NixcbiAgICAgIDIxNyxcbiAgICAgIDE3NyxcbiAgICAgIDIzLFxuICAgICAgMTQ0LFxuICAgICAgNDIsXG4gICAgICA2MCxcbiAgICAgIDExNixcbiAgICAgIDI1MyxcbiAgICAgIDU0LFxuICAgICAgMTkyLFxuICAgICAgMjExLFxuICAgICAgMTc3LFxuICAgICAgMCxcbiAgICAgIDQ1LFxuICAgICAgMTEsXG4gICAgICA4NixcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXTTZKUTU5V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NDY3Mjc0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ0YWt1ZHp3YWxld2FudGVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMTMwMDQ5NjE5NTg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL3dyaEFRdi9pa3NnWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5sQUhFM3J1MjJzOGlXQmJFMFVpSGtRZkR5S0ZrR0dTaHhIck1lc0NLSE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaUdWUEtlNzBGKzJXT2Y0QnQ5V1dEYmhpR1pBdjFFMlkwQUpxWGlkR0xGMlVrMDB4d2diblR6QjZvWFZ2MWZVeHZmMS9hek13L1B0YzVnNm82TzJVQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMitXYy9hR3RoTVg2WWtQdTN0V3NpQ2xldXYrSUpvR0xKbEl0TFpOVnB6RGlkTlhiamRrM0Q1dnc5Q1JpRTZFUXZLTzQ5anBPbG9xTmJZczlkU1Uramc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NDY3Mjc0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYwNzU1ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU40dS5qc29uIjogIntcImtleURhdGFcIjpcIitLQ3MxelFQY0ZHNDY0YnkrYzVRYU50WGM2OUNjaW9RSDdCcERUS2QxYVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQzMjI0NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjA2NzI0OTE4MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Takudzwalewantech",
  ownername:process.env.OWNER_NAME|| "Takudzwalewantech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
