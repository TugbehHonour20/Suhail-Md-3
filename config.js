const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039522028";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_36_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGJGZ21VbE5QNFRPejhhbmRZdUZQV2RpVm96N2R3ZEpmSkc4UXhNazJ3RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM5NTIyMDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MTlCRUNBNTM2QzgwODFBMDMxMzI4NjJDQzQzNjlEOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTI5NjgxNjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM5NTIyMDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRTEzRUJBM0JDNDVEMUQwNkM2MDYyOERCRTMwN0U2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTI5NjgxNjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNlpwZkFXeERTMDYxMVNpZjNfRDg3UVwiLFxuICBcInBob25lSWRcIjogXCIzOGNkN2FjYy0yOGQwLTQ4MWMtYjg0Ni1hMjcwYTI2YTMxY2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMTA0LFxuICAgICAgMjE5LFxuICAgICAgMjIxLFxuICAgICAgNzksXG4gICAgICAxOCxcbiAgICAgIDcxLFxuICAgICAgMjMyLFxuICAgICAgMjEzLFxuICAgICAgMjYsXG4gICAgICAxMTEsXG4gICAgICA4NCxcbiAgICAgIDIwNSxcbiAgICAgIDIwOCxcbiAgICAgIDEwNyxcbiAgICAgIDExOCxcbiAgICAgIDE5OCxcbiAgICAgIDI0OSxcbiAgICAgIDEyNCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxNTQsXG4gICAgICA1NyxcbiAgICAgIDcxLFxuICAgICAgMTA2LFxuICAgICAgOTksXG4gICAgICAxMzYsXG4gICAgICAxMzksXG4gICAgICAxNTksXG4gICAgICAxMDgsXG4gICAgICAyOCxcbiAgICAgIDIxNSxcbiAgICAgIDI5LFxuICAgICAgMzQsXG4gICAgICA1MCxcbiAgICAgIDQ3LFxuICAgICAgMjAwLFxuICAgICAgMTU1LFxuICAgICAgOCxcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pbnBOa0NFTnJYOE1NR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSXNtUlN1ZnBwSXJDQ3V2Y0NxVGIrZmprbTFHR09nNHFNQVFVVzNkNk1RVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhV1Fyd25kb0UybGprUCtSRmFnK0Y3cEtZeVU0TWVKQXZQaDVDbUpKWTdHaTcyRzJXTElhckR2cFNSM2lSdGlENjdaLzZNM1BicW9HL1hiMHdBWmJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmcndzUnRhdkJKVW1aMjJRSEZFelFhMmVkYnlJajhTRS8vSWVnT25yT3IwMzhsS28yMmo1cENJL3U4NHI2Vkg5clgrbmlMTHBmRTB4MWlBejZYZk5oQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzk1MjIwMjg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA2NDU0OTMzOTc1MDg1OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5NTIyMDI4OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1Mjk2ODE1OFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
