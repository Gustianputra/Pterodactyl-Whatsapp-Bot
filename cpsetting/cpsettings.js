const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://" // Isi Domain mu, WEBSITE WAJIB ADA SSL
global.apikey = '-' //HRKU-27754ecf-0895-4563-bd5b-e07dca6ad743 Pterodactyl mu
global.capikey = '-' // HRKU-27754ecf-0895-4563-bd5b-e07dca6ad743 Pterodactyl mu
global.creAtor = "6283862145761@s.whatsapp.net"
global.owner = ['6283862145761']
global.ownerNumber = ["6283862145761@s.whatsapp.net"]
global.nomerOwner = "6283861040903"
global.namabotnya = 'Yanzz-Najwaa'
global.namaownernya = 'Yanzz-Najwaa'
global.packname = 'Yanzz-Najwaa'
global.author = 'www.cpancloud.com'
global.sessionName = 'session'
global.email = 'admin@cpancloud.com' // Ganti dengan emailmu
global.group = 'https://chat.whatsapp.com/GyiuqzWNZ0p1th2LjxXNTw'
global.youtube = 'https://youtube.com/'
global.website = 'https://www.cpancloud.com'
global.github = 'https://github.com/Pann09'
global.nomorowner = 'https://wa.me/6283862145761'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.krmd = 
{
success: '```Sukses!```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Owner Only Broo...```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Error Kak, Hubungi owner 6283862145761```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./js/image/thumb.jpg')
global.imagekir = fs.readFileSync('./js/image/image.jpg')
global.videokir = fs.readFileSync('./js/image/video.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
