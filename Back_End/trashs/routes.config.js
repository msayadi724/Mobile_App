const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const trashsProvider = require('./controllers/trashs.provider');
const config = require('../env.config');

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;

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
