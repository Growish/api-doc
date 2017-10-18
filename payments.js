/**
 * @api{post} /transfer/ Transfers money from a user wallet to another
 * @apiParam {Number} amount The amount to be transfer in [eurocents](https://en.wiktionary.org/wiki/Eurocent#English)
 * @apiParam {String} email Email of the beneficiary of the transaction
 * @apiParam {String} password Password of the current logged user
 * @apiParam {String} walletId The payer wallet unique Id
 * @apiName transferW2P
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


/**
 * @api{post} /transfer_contribution/ Transfers money from wallet to wallet
 * @apiParam {String} payerWalletId The payer wallet unique Id
 * @apiParam {Number} amount The amount to be transfer in [eurocents](https://en.wiktionary.org/wiki/Eurocent#English)
 * @apiParam {String} beneficiaryWalletId the beneficiary wallet id
 * @apiParam {String} password Password of the current logged user
 * @apiName transfer wallet to wallet
 * @apiGroup Payments
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Soldi trasferiti con successo","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/transfer\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('transferContribution').save({amount:5000, beneficiaryWalletId: "53b157b19a6b51c4048a3484",password:"password",payerWalletId: "53b157b19a6b51c4048b4572" }).then(function success(response) { }, function error(err) { });
 */

/**
 * @api{get} /check-contribution/:id/ Check Payin Credit Card
 * @apiParam {String} id Unique Id of the Payin Credit Card
 * @apiName checkContribution
 * @apiGroup Payments
 * @apiPermission Owner
 * @apiSuccessExample Response example
 * {"code": 200, "message": "OK", "data": [{"message": "La tua contribuzione \u00e8 avvenuta con successo!"}], "pagination": null, "uri": "https://apidev.growish.com/v1/check-contribution/", "method": "GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('checkContribution', '596f1268ff9822b21b8b4598').read().then(function success(response) { }, function error(err) { });
 */

