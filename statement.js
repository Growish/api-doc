/**
 * @api{get} /statement/:id Gets the statement of a wallet or list wallet
 * @apiParam {String} id Unique Id of the wallet or list wallet.
 * @apiName GetStatement
 * @apiGroup Statement
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"operation":"cashout","type":"transfer_user_partner","updateDate":"2017-09-01 12:01:45","amount":5800,"partnerName":"Qui Mamme Shop","partnerEmail":"domingo.lupo@growish.com"},{"operation":"cashin","type":"card","status":"done","updateDate":"2017-09-01 11:52:03","issuedBy":"Bar Lupo","amount":200000,"netAmount":200000,"symbol":"+","fee":3800}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/statement\/596f1268ff9822b21b8b4598\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('statement', '596f1268ff9822b21b8b4598').read().then(function success(listWallet) { }, function error(err) { });
 */