//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['0750463337']
global.premium = ['0768818621']
global.ownernomer = '0750463337'
global.ownername = 'Vishwani Pabasara'
global.botname = '💖ℓσνєℓу ραвα💞'
global.footer = '©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴍᴀꜱᴛᴇʀᴍɪɴᴅ'
global.ig = 'https://github.com/mrmastermind000'
global.region = 'Sri Lanka, Western Province, Gampaha District'
global.sc = 'https://github.com/mrmastermind0/Gojo-Satoru'
global.myweb = 'https://youtube.com/c/SLWizCat'
global.packname = 'Gojo-Satoru'
global.author = 'Kokila Danisuru🤛'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'හරි...✓',
    admin: 'ඒක Admin ට විතරයි පුළුවන්👊 ',
    botAdmin: 'මුලින්ම Bot ට Admin දීල ඉදාම්🙌!',
    owner: 'ඒක Bot Owner ට විතරයි පුළුවන්🙌',
    group: 'ඕක ගහන්න පුළුවන් Group වල විතරයි💔',
    private: 'ඕක ගහන්න පුළුවන් Private Chat වල විතරයි🌝',
    bot: 'ඕක Bot number එකට විතරයි suddh🤛',
    wait: 'තත්පරයක් ඔහොමම ඉන්න...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'උබ cmd ගහනව හොදටම වැඩී☹️,ආය හෙට තමා ඉතිම්😁',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
