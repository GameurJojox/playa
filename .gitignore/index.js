const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "m"

client.login(process.env.TOKEN) 

client.on("ready", () =>{
    console.log("je suis prêt")

});


client.on('message', async message => {

if(message.content === "Bonjour"){
    message.reply("Salut , ça va?")
    console.log("Le bot dit bonjour")

}

if(message.content === "bonjour"){
    message.reply("Salut , ça va?")
    console.log("Le bot dit bonjour")

}


if(message.content === "BONJOUR"){
    message.reply("Salut , ça va?")
    console.log("Le bot dit bonjour")

}


if(message.content === "Salut"){
    message.reply("Salut , ça va?")
    console.log("Le bot dit bonjour")

}


if(message.content === "salut"){
    message.reply("Salut , ça va?")
    console.log("Le bot dit bonjour")

}


if(message.content === "slt"){
    message.reply("Salut , ça va?")
    console.log("Le bot dit bonjour")

}

if(message.content === "Aurevoir"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "aurevoir"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "AUREVOIR"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "Bye"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "BYE"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "bye"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "a plus"){
    message.reply("Bye :wink:")
    console.log("Le bot dit bonjour")

}

if(message.content === "raconte moi une blague"){
    message.reply("C'est l'histoire du ptit dej tu la connais ?")
    console.log("Le bot dit bonjour")

}

if(message.content === "non"){
    message.reply("Pas de bol :joy: :joy:")
    console.log("Le bot dit bonjour")

}


if(message.content === "tu peut refaire une blague"){
    message.reply("Comment appelle t'on un chien sans patte ?")
    console.log("Le bot dit bonjour")

}

if(message.content === "je sais pas"){
    message.reply("On ne l'appelle pas on vas le cherché :joy: :joy:")
    console.log("Le bot dit bonjour")

}

if(message.content === "tu peut me refaire une blague ?"){
    message.reply("Je pense que l'humour n'est pas mon point fort!")
    console.log("Le bot dit bonjour")

}

if(message.content === "ouais et toi"){
    message.reply("Moi je vais plutôt bien!")
    console.log("Le bot dit bonjour")

}

if(message.content === "oui et toi"){
    message.reply("Moi je vais plutôt bien!")
    console.log("Le bot dit bonjour")
}

if(message.content === "oe et toi"){
    message.reply("Moi je vais plutôt bien!")
    console.log("Le bot dit bonjour")
}

if(message.content === "oui"){
    message.reply("La politesse ? le et toi il et ou?")
    console.log("Le bot dit bonjour")
}

if(message.content === "oui et toi ?"){
    message.reply("Moi je vais plutôt bien!")
    console.log("Le bot dit bonjour")
}

});
