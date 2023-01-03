const wbm = require('wbm')
// WhatsApp Message Integration
const sendWhatsAppMessage = function(phone, msg){
    wbm.start()
    .then(async () => {
        const phones = [phone];
        const message = msg;
        await wbm.send(phones, message);
        await wbm.end();
    })
    .catch(err => console.log(err));
}

module.exports = sendWhatsAppMessage;