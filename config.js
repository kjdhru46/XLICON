const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "15194881878"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://jonoliu676:jonoliu676@cluster0.nfnypnn.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '15194881878' 
global.devs = '15194881878';
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNESmNZay9BL2pHbGlraElEMWxZSjN6UC81YUxhMEFTNTNLWm8reDJVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1pmK2RaeDg3VnRjMkE1ZGRCQ3BRb2Z1bGZUUERTRXhLUWZuRndNay9HTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ2Y5TnB5NXhvOE5HSXcxd09kSFNxaWhXNTcveWg1NGhNYkpqUGEyazNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrMkU1MHFSMk5RLzVjdkJXUHhRd3JtejRxWW5iemsweWFNa1hDaStRSGdNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNT3VWQ29pMU1BeTRNRmU2OXRZdE00NWE5NWlya2hyYlJwMDBxRC93MzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhTejUyQmFxNmpaS2xWakRwN2Iwd2lwbFFPVzByUmZib0ZNc3BaQi83VDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS0lPZ0k5RDd1LzBZaTBtR2RHSXh4QnFzMjJJb3NMc3NYYlB6NlhhOTlDUW1CbVhHN0cyTHBNQzVzdFpIMklKa2ZEZ2ZGbzY0VnBDKy82Q0oxYVNEUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM1LCJhZHZTZWNyZXRLZXkiOiJjajBWaDFVTkw5VlRhUzk2TEZFYldQbWRic2J2VmowYTFpakhTNUhoTnN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzZFQzQzN2V1NCMlV3bUxEeC05NWd3IiwicGhvbmVJZCI6IjgzZGJiZjZlLTNiYzEtNDhhZi1iODc0LTlhNDcyZmNlNWQzMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2aGxiYTJnMDEwaVBHMWlvL1FTeHVhaWhhOGM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZkN1IzdXVoMTdwMmhTWjBmZWNmakJhajV2TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEWnd1NEVFTWJlcEtnR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiajBteXVBbzZFeW04dzFWNUN6bzdzVzM2SmdmWmZrRE0xd20yVzRUNjZVdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGlkZVZHVlZ0NnVqUnFPeVA0dXgvZ3pWdlIzQXFYSzk1NExzakllRndzWlduSGJoNnF2eWlERm9peGxvMnFaMG5ZbEY3bXNmcldtN0FjeklmNVgvQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImZDeXlsalc4VC9yWlhNZkw0TFg0aWRJR2Z4VWhtNHk3WHFhb3lOMUI0SkY4NFNVd1p2bndSNVhNZnhPZ3k0TER1Z3VSdzByWWMyc3RHd29tRHg4aEFBPT0ifSwibWUiOnsiaWQiOiIxNTE5NDg4MTg3ODoxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKdSBIYW4g8J+lsCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTE5NDg4MTg3ODoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZOUpzcmdLT2hNcHZNTlZlUXM2TzdGdCtpWUgyWDVBek5jSnRsdUUrdWxNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk1MTAwNzQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdwdyJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SALMAN AHMAD',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '94' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
