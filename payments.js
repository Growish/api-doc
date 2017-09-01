/**
 * @api{post} /transfer/ Transfers money from a user wallet to another
 * @apiParam {Number} amount The amount to be transfer in [eurocents](https://en.wiktionary.org/wiki/Eurocent#English)
 * @apiParam {String} email Email of the beneficiary of the transaction
 * @apiParam {String} password Password of the current logged user
 * @apiParam {String} walletId The payer wallet unique Id
 * @apiName transferW2W
 * @apiGroup Payments
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Soldi trasferiti con successo","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/transfer\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('transfer').save({ amount:5000,email:"foo@bar.com",password:"password",walletId: "53b157b19a6b51c4048b4572" }).then(function success(response) { }, function error(err) { });
 */