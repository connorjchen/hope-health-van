const wbm = require('wbm')
// WhatsApp Message Integration
const sendWhatsAppMessage = function(){
    wbm.start()
    .then(async () => {
        const phones = ['+16095539005'];
        const message = 'hello';
        await wbm.send(phones, message);
        await wbm.end();
    })
    .catch(err => console.log(err));
}

module.exports = sendWhatsAppMessage;