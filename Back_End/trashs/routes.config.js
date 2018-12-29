const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const trashsProvider = require('./controllers/trashs.provider');
const config = require('../env.config');

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;
var mqtt    = require('mqtt');
var client  = mqtt.connect("mqtt://localhost:127.0.0.1:1883",{clientId:"mqttjs01"});
var topic="test";

console.log("connected flag  "+client.connected);
client.on("connect",function(){	
console.log("connected  "+client.connected);
})
////////////////

//client.on("error",function(error){ console.log("Can't connect"+error)})
client.subscribe(topic,{qos:1});

client.on('message',function(topic, message, packet){
    
    var buf = Buffer.from(message)
    var temp = JSON.parse(buf.toString());

          var msg1=message.toString()
          trashsProvider.verifTrash(msg1)
})



exports.routesConfig = function (app) {

    app.post('/Trashs/addTrash', [
        
        AuthorizationValidation.validJWTNeeded,
        AuthorizationPermission.minimumPermissionLevelRequired(Master),
        trashsProvider.addTrash
    ]);

    app.get('/Trashs/loadTrashsdata', [
        
        AuthorizationValidation.validJWTNeeded,
       //AuthorizationPermission.minimumPermissionLevelRequired(Surfer),
        trashsProvider.getallTrashs
    ]);

    app.post('/Trashs/deleteTrashdata', [
        
        AuthorizationValidation.validJWTNeeded,
       AuthorizationPermission.minimumPermissionLevelRequired(Master),
        trashsProvider.deleteTrash
    ]);

}
