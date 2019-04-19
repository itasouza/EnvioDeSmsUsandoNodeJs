


const twilio = require('twilio')('','','');

twilio.messages.create({
    body:'Conteúdo da mensagem para teste',
    from: '',
    to:'11983330842'
}).then(message => console.log(message));