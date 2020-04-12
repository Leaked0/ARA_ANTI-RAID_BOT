const Discord = require("discord.js")
var client = new Discord.Client()
var prefix = ('ar?')
let fs = require ("fs")
let msg = JSON.parse(fs.readFileSync("./msg.json", "utf8"));
client.login("NTA5MDgyODA2MzgzNjczMzQ0.Dx04iw.TV1Ayn28uouLP_nlUdEhcFZB-I8")

client.on("ready", () => {
client.user.setActivity("anti-selfbot - ar?help", {type:"STREAMING"})
console.log("Bot co pubeur pro")
})

client.on('guildMemberAdd', member => {
var channel = member.guild.channels.find(ch => ch.id === '534118576232202242') ;
	if(!channel) return
var msgrandom = ["28372", "18462", "19476", "19473", "04717", "18362"]
var random = msgrandom [Math.floor(Math.random() * msgrandom.length)]
var embed = new Discord.RichEmbed()
.setColor("00ff00")
.setDescription(member.user)
.addField("**Voici ton code (copie colle) :**", "`v."+random+"`")
channel.send(embed)
})

client.on('message', message => {
 if(msg[message.channel.id]){
 	if(message.author.bot) return
 	message.delete()
 var embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Report")
 .addField("🔔 Report de :", message.author.username+"#"+message.author.discriminator)
 .addField("Le report :", message.content)
 .setFooter("Report By ArA - Protect")
 client.channels.find("id", "555080663771119627").send(embed)
 message.reply(", <:idle:554938564400644116> **Demande en cours de traitement.**").then(msg => msg.delete(5000))
 }else{
 	}
 
if(message.content === "v.28372"){
	if(message.author.bot) return
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	message.member.addRole("479935827472809995")
	message.channel.bulkDelete(2).then(() => {
		})
}
	
	if(message.content === "v.18462"){
	if(message.author.bot) return
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	message.member.addRole("479935827472809995")
	message.channel.bulkDelete(2).then(() => {
		})
}

if(message.content === "v.19476"){
if(message.author.bot) return
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	message.member.addRole("479935827472809995")
	message.channel.bulkDelete(2).then(() => {
		})
}

if(message.content === "v.19473"){
if(message.author.bot) return
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	message.member.addRole("479935827472809995")
	message.channel.bulkDelete(2).then(() => {
		})
}

if(message.content === "v.04717"){
if(message.author.bot) return
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	message.member.addRole("479935827472809995")
	message.channel.bulkDelete(2).then(() => {
		})
}

if(message.content === "v.18362"){
if(message.author.bot) return
	if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
	message.member.addRole("479935827472809995")
	message.channel.bulkDelete(2).then(() => {
		})
}


const embedColor = 0xE52B50;
  if (message.content.startsWith(prefix + "new")) {
    var r = message.content.substr(7)
    if(!r) return message.channel.send("**Merci de mettre une raison a votre ticket.**")
    message.delete()
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "{❕❔} Staff")) {
    const embed0 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`,"Ce serveur ne dispose pas d' un \` soutien \ ` rôle fait, de sorte que le billet ne sera pas ouvert. \ n Si vous êtes un administrateur, faire un avec ce nom exactement et le donner à les utilisateurs qui devraient être en mesure de voir des billets.")
    message.channel.send({ embed: embed0 });
    return
    }
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) {
    const embed1 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, `Vous avez déjà un billet ouvert.`)
    message.channel.send(embed1);
    return
    }
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "{❕❔} Staff");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        const embed2 = new Discord.RichEmbed()
        .setColor(embedColor)
        .addField(`Ticket Bot`, `Votre ticket a été créé en ` + c.toString())
        .setTimestamp();
        message.channel.send(embed2)
        .then(msg => msg.delete(10000));

        const embed3 = new Discord.RichEmbed()
        .setColor(embedColor)
 .addField(`Hey ${message.author.username}!`, ` Notre ** Support Team ** sera avec vous sous peu. S'il vous plaît expliquer votre raison d'ouvrir le billet le plus de détails possible`)
        .setDescription("Raison de votre ticket : `"+r+"`")
        .setTimestamp();
        c.send(embed3);
    }).catch(console.error);
  }

if (message.content.startsWith(prefix + "close")) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, `Vous ne pouvez pas utiliser ceci en dehors d'un canal de tickets`)
    message.channel.send({ embed: embed8 });
    return
    }   

    const embed9 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, 'Etes - vous sûr? Une fois confirmé, vous ne pouvez pas annuler cette action! \ n Pour confirmer, tapez \ ` .confirm \` .  Dans les 10 secondes qui suivent sinon la commande va être annulée. ')
    message.channel.send({ embed: embed9 })
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '.confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Le ticket a expiré, le ticket n’a pas été fermé.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
  }
  
  if(message.content === prefix + "help"){
  	message.channel.send("**Voici les commandes du bots ArA - Protect :**\n\n`ar?new` = Permet de créé un ticket.\n\n`ar?si` = Permet d'avoir des informations sur le serveur.\n\n**ArA - Protect : Protège le serveur.**").then(msg => msg.delete(6000))
  	message.delete()
  	}
  
  if(message.content.startsWith(prefix + "warn")){
  	if(message.author.bot) return
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: | **Vous n'avez pas les permissions requises.**");
var mentions = message.mentions.users.first();
if(!mentions) return message.channel.send(":x: **Veuillez mentionner un utilisateur !**")

    if (mentions) {
            var mention2 = mentions;
        } else {
            var mention2 = message.author;
        }
        let args = message.content.split(" ").slice(1);
       var raison = args[1]
        var raison1 = args[2]
        var raison2 = args[3]
        var raison3 = args[4]
        var raison4 = args[5]
        var raison5 = args[6]
        var raison6 = args[7]
        var raison7 = args[8]
        var raison8 = args[9]
        var raison9 = args[10]
        var raison10 = message.content.substr(30)
        let warn = JSON.parse(fs.readFileSync("./warn.json", "utf8"));
        if(warn[mention2.id]){
        	warn[mention2.id] = {"warn" : warn[mention2.id].warn+"\n⚠ **Warning : `"+raison10+"` ⚠**"}
        fs.writeFile("./warn.json", JSON.stringify(warn), (err) => 
{if (err) console.error(err);});
message.channel.send("✅ | **L'utilisateur a bien été warn.**")
        }else{
        	warn[mention2.id] = {"warn" : "⚠ **Warning : `"+raison10+"` ⚠**"}
        fs.writeFile("./warn.json", JSON.stringify(warn), (err) => 
{if (err) console.error(err);});
       message.channel.send("✅ | **L'utilisateur a bien été warn.**")
        }
        message.delete()
        }
        
        if(message.content.startsWith(prefix + "seewarns")){
        	if(message.author.bot) return
if(message.channel.type !== 'text') return message.channel.send("***:x: Les commandes en mp sont désactivé !***")
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: | **Vous n'avez pas les permissions requises.**");
var mentions = message.mentions.users.first();
if(!mentions) return message.channel.send(":x: **Veuillez mentionner un utilisateur !**")

    if (mentions) {
            var mention2 = mentions;
        } else {
            var mention2 = message.author;
            }
        let warn = JSON.parse(fs.readFileSync("./warn.json", "utf8"));
     if(warn[mention2.id]){
     	message.channel.send(warn[mention2.id].warn)
     }else{
     	message.channel.send("⚠ - **L'utilisateur n'a aucun warnings.**")
     }
     message.delete()
     }
     
      

})
