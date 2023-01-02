const wbm = require('wbm')
const edgeChromium = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')


// WhatsApp Message Integration
const sendWhatsAppMessage = function(){
    wbm.start()
    .then(async () => {

        const executablePath = await edgeChromium.executablePath

        const browser = await puppeteer.launch({
            executablePath,
            args: edgeChromium.args,
            headless: false,
        })
        const phones = ["+16095539005"];
        const message = "message here";
        await wbm.send(phones, message);
        await wbm.end();
    })
    .catch(err => console.log(err));
}

module.exports = sendWhatsAppMessage;