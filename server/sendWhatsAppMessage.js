const wbm = require('wbm')
const puppeteer = require('puppeteer')

const browser = await puppeteer.launch({
    executablePath: '/full/path/to/chrome'
});

// WhatsApp Message Integration
const sendWhatsAppMessage = function(){
    wbm.start()
    .then(async () => {
        const phones = ["+16095539005"];
        const message = "message here";
        await wbm.send(phones, message);
        await wbm.end();
    })
    .catch(err => console.log(err));
}

module.exports = sendWhatsAppMessage;