/**
 * @api{post} /withdrawal/ Cash out
 * @apiParam {String} walletId The bank account IBAN
 * @apiParam {String} beneficiaryId The bank account owner address
 * @apiParam {String} amount The bank account owner name
 * @apiParam {String} password The bank account owner name
 * @apiParam {String} pin The bank account owner name
 * @apiName CashOut
 * @apiGroup CashOut
 * @apiPermission Owner
 * @apiSuccessExample Public response example
 {"code":200,"message":"withdrawal created","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/withdrawal\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('withdrawal').save({walletId: "5886138cff9822ae778b458c", beneficiaryId: "591ecd6aff98226e648b456e", amount: "200", password: "123456", pin: "2345"}).then(function success() {},function error(err) {})
 * @apiError 417 Pin request may be turned off or on, if it is off status code is 200 while if it is on status code in 417, make a new request with a valid pin value.
 */