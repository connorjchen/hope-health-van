const wbm = require('wbm')
const chromium = require('chrome-aws-lambda')


// WhatsApp Message Integration
const sendWhatsAppMessage = function(){
    wbm.start()
    .then(async () => {

        const browser = await chromium.puppeteer.launch({
            args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
        })

        const phones = ["+16095539005"];
        const message = "message here";
        await wbm.send(phones, message);
        await wbm.end();
    })
    .catch(err => console.log(err));
}

module.exports = sendWhatsAppMessage;