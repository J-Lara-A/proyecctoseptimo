const TelegramBot = require('node-telegram-bot-api');


const token = '1772827813:AAE0zWD5Sv24tG3NQCLBuhFJmJFHAZBV3o8';


const bot = new TelegramBot(token, {
  polling: true
});
var IdMiChat = 924667514;
//var SerialPort = require('serialport');
///var port = new SerialPort('COM9', {
//  baudRate: 9600
//});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("EL ID del Char es " + chatId);
    var Mensaje = msg.text;
     Mensaje = Mensaje.toUpperCase();

      if(Mensaje == "ABRIR")      {
        console.log("Abriendo la puerta");
        bot.sendMessage(chatId, 'puerta abierta');
        MiPuerto.write("H");
   }
    else if (Mensaje == "CERRAR"){
      console.log("Cerrand Puerta");
      bot.sendMessage(chatId, 'puerta cerrada');
        MiPuerto.write("L");

    }

});
