/**
 * @api{get} /user/:id/notification/ Get Notification
 * @apiParam {String} category The category can be growish, wedding or scuolapay
 * @apiName getNotification
 * @apiGroup Notifications
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"type":"success","read":false,"message":"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \u0026euro;","category":"growish","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"},{"type":"messenger","read":false,"message":"La tua contribuzione \u00e8 avvenuta con successo!","category":"growish","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/587f3900ff9822b7778b457e\/notification\/?category=growish","method":"GET"}
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"type":"success","read":false,"message":"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \u0026euro;","category":"wedding","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"},{"type":"messenger","read":false,"message":"La tua contribuzione \u00e8 avvenuta con successo!","category":"wedding","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/587f3900ff9822b7778b457e\/notification\/?category=wedding","method":"GET"}
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"type":"success","read":false,"message":"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \u0026euro;","category":"scuolapay","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"},{"type":"messenger","read":false,"message":"La tua contribuzione \u00e8 avvenuta con successo!","category":"scuolapay","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/587f3900ff9822b7778b457e\/notification\/?category=scuolapay","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.notifications', 123456789).read({category: 'growish'}).then(function success(notifications) { }, function error() { });
 */


/**
 * @api{put} /checknoti/:id/ Update notification
 * @apiName updateNotifications
 * @apiGroup Notifications
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"notifica aggiornata con successo","data":{"type":"success","read":true,"message":"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \u0026euro;","category":"scuolapay","when":null,"secondActionText":null,"secondActionUrl":null,"id":"59e8739dff9822ea898b456a"},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/checknoti\/59e8739dff9822ea898b456a\/","method":"PUT"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('notifications', 123456789).update().then(function success() { }, function error() { });
 */