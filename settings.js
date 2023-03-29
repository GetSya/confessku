const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6281319944917"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}
Saya adalah bot WhatsApp confess 👋 ketik .confess untuk memulai chat.

Info Lebih Lanjut Chat Owner :
https://myprofile.syaweb.repl.co`
}
}