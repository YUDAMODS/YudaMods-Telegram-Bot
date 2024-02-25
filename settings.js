const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 6283842204546
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': '6T8nj4b9zYHBlyL', // 👉 free apikey from yudamods limit 30 !! 
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "7095239626:AAGJ8RhpgDjCg7AbogbU7T5xaPdm1f1r6p8" // buat bot di sini https://t.me/Botfather dan dapatkan token bot
global.BOT_NAME = "YudaMods bot" //your bot name
global.OWNER_NAME = "YudaModsོ" //your name
global.OWNER_NUMBER = "6283842204546" //your telegram number
global.OWNER = ["https://t.me/YUDAMODS"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/thumb.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
