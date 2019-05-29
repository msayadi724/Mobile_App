const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const trashsProvider = require('./controllers/trashs.provider');
const config = require('../env.config');

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;
var mqtt    = require('mqtt');
var options = {
    port: 10957,
    host: 'mqtt://m23.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'mohamed',
    password: '1995',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('mqtt://m23.cloudmqtt.com', options);
var topic="test";

console.log("connected flag  "+client.connected);
client.on("connect",function(){	
console.log("connected  "+client.connected);
})
////////////////

//client.on("error",function(error){ console.log("Can't connect"+error)})
client.subscribe(topic,{qos:1});

client.on('message',function(topic, message, packet){
    if(message){
    var buf = Buffer.from(message)
    var temp = JSON.parse(buf.toString());

          var msg1=message.toString()
          trashsProvider.verifTrash(msg1)}
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
