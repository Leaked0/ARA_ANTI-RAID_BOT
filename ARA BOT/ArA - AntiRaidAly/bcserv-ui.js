const Discord = require ("discord.js")
const { Client, Attachment } = require('discord.js');
var client = new Discord.Client();
var prefix2 = ('.')
var version = ("Bêta-v.1.2")
let spam = {}
let fs = require ("fs")

client.on('ready', () => {
	console.log("bot co")
	})
	
	client.on('message', message => {
		if(message.content.startsWith(prefix2 + "setui")){
			if(message.author.id !== "421096405914877952") return message.channel.send("❌ | **Erreur: Vous n'avez pas les permissions requises.**")
var perm = JSON.parse(fs.readFileSync("./perm.json", "utf8"));
			let args = message.content.split(" ").slice(1);
			let user = args[0]
			let ui = message.content.substr(26)
			if(perm[user]){
				message.channel.send(":x: | **Erreur: L'utilisateur est déjà défini.**")
				}else{
					perm[user] = {"file" : ui}
    fs.writeFile("./perm.json", JSON.stringify(perm), (err) => 
{if (err) console.error(err);});
message.channel.send("✅ | **Utilisateur défini.**")
}
	
			}
		
		if(message.content.startsWith(prefix2 + "addpremium")){
		if(message.author.id !== "421096405914877952") return message.channel.send("❌ | **Erreur: Vous n'avez pas les permissions requises.**")
	var premium = JSON.parse(fs.readFileSync("./special.json", "utf8"));
			let args = message.content.split(" ").slice(1);
			let user = args[0]
			if(!user) return message.channel.send(":x: | **Indique une id.**")
			if(premium[user]){
				
message.channel.send(":x: | **Erreur: L'utilisateur est déjà premium**")
				}else{
					premium[user] = {"prem" : "premium actif"}
    fs.writeFile("./special.json", JSON.stringify(premium), (err) => 
{if (err) console.error(err);});
message.channel.send("✅ | **Utilisateur mis au premium.**")
}
					}
					
					if(message.content.startsWith(prefix2 + "delpremium")){
						if(message.author.id !== "421096405914877952") return message.channel.send("❌ | **Erreur: Vous n'avez pas les permissions requises.**")
	var premium = JSON.parse(fs.readFileSync("./special.json", "utf8"));
			let args = message.content.split(" ").slice(1);
			let user = args[0]
			if(!user) return message.channel.send(":x: | **Indique une id.**")
			if(premium[user]){
				delete premium[user]
				premium[user] = {"prem" : "premium actif"}
    fs.writeFile("./special.json", JSON.stringify(premium), (err) => 
{if (err) console.error(err);});
message.channel.send("✅ | **Utilisateur delete du premium.**")
}else{
	message.channel.send(":x: | **Erreur: L'utilisateur n'est pas premium**")
			}
			}
		
		})
	
	
	client.login("NDg0NjUzNTg4NTY4NzM1NzQ1.DsIqIA.oOvFSPhVOniSX0CC5WUV9g9udE0")
