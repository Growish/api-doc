/**
 * @api{post} /passwordrecovery/ Password recovery
 * @apiName Restore Password
 * @apiGroup Password recovery
 * @apiPermission Public
 * @apiParam {String} email The user Email.
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/passwordrecovery\/","method":"POST"}
 * @apiUse AppKey
 * @apiVersion 1.0.0
 * @apiExample {js} Angular Growish API Client:
 *  gwApi.request('restorePassword').save({email:"mario.rossi@email.com"}).then(function success() {},function error(err) {});
 */
