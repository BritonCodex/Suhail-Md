const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="brisonbriton@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/BritonCodex/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ briton_Codex²²¹-ᴍᴅ" 


global.devs = "254705579314" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705579314";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254751379442";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_10_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDczLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqTzZpaEgyUENLa1VBa3VpYzFES2h0OTBFQ0JBWVpCak5VRzYrN242NHNNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwNTU3OTMxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjBDMjY4OTcyRTM3MDg1RDBCRjc4Nzc0MUY0NDc0QjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MjIxNDI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzA1NTc5MzE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMTY5OUI1Q0M1QTUwQzYyNTRCOEM1RDBBREVGNDhFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYyMjE0MjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGRmLUpKSG1UU2FFN2VwS09oRENPZ1wiLFxuICBcInBob25lSWRcIjogXCJiZDMzMDU1ZS0xNzJmLTRhNWYtYTRhNS1lOGYzZTFiMmM2MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAxODgsXG4gICAgICAxMzYsXG4gICAgICA5LFxuICAgICAgMjI1LFxuICAgICAgNCxcbiAgICAgIDE1LFxuICAgICAgNzIsXG4gICAgICAyMjYsXG4gICAgICA2MSxcbiAgICAgIDU3LFxuICAgICAgNjcsXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgOTgsXG4gICAgICA2MCxcbiAgICAgIDUxLFxuICAgICAgMTgsXG4gICAgICA1MixcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgNjcsXG4gICAgICAzOSxcbiAgICAgIDIzLFxuICAgICAgMTI2LFxuICAgICAgMTI1LFxuICAgICAgMTcxLFxuICAgICAgMjQzLFxuICAgICAgMjQwLFxuICAgICAgMTE5LFxuICAgICAgMTE2LFxuICAgICAgMTU4LFxuICAgICAgMTcyLFxuICAgICAgODIsXG4gICAgICAxMTEsXG4gICAgICA2NSxcbiAgICAgIDIyMSxcbiAgICAgIDI0OSxcbiAgICAgIDY0LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTld5MFpVSEVPanJyYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWmZsd3pMN2lvczIwUVAxOVpqN0pPa2EzcktwYjk1KzdXREdZczljR0JFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFjMlgvdHo4dDlISEM1YXNOMWtJRjlaWWNmTEVEWmR6SDBLRHg2TXdzaFdjSjZ2SHZ1ZEI1UWxWbmc4WXcyeC92TkxqdzZjeTB1TUxUNmZRd0tSekJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhzaDVnbkxDOFdKWnRtRlNNNEV6RWtHL25CQVA4K2tQbHdKVzFGS29lTGRqaG9qWVN2Y3pHMlhub3ZIbzdiYllsbTRUMDh1QTRndWE3d00wR0NzZ0JBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA1NTc5MzE0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjUwNjAxMzk4MTUwNTI6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiYnJpdG9fb24ueWdcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNTU3OTMxNDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjIyMTQyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhRRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFFFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGI4VitZMzRjVVU4eXZRbFZsa3NWaHlsTWV4RVNOY1FuSFRicnlLYWlTbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTI0NDIxOTcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIyMjIwNzIzMjlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIUUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4RHkveTNzL0FybWlUMjZld1h5K3RiTVpKVXN2TGVhQWtlR2RZWDJZVWxBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjQ0MjE5NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRRy5qc29uIjogIntcImtleURhdGFcIjpcInFMUTVCNHVUdEtaYTA4ejNSSWd0RHVXdklJckt4NUd5NFFFd2F5WStFUEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNDQyMTk3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-c693a02c-6d0c-4227-b2e1-6cc903fa2893",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "britonbots",
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
