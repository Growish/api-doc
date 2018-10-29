/**
 * @api{post} /bank-mandate/ Create User Wallet Bank Mandate for Sepa Direct Debit
 * @apiParam {String} iban The bank account iban
 * @apiParam {String} address The bank account owner address
 * @apiParam {String} budgetAmount The budget amount for User Wallet
 * @apiParam {String} returnUrl Return url after confirmation on mangopay page
 * @apiName BankMandate
 * @apiGroup SepaDirectDebit
 * @apiPermission Owner
 * @apiSuccessExample Public response example
 {"code":200,"data":{"mandateUrl":"https:\/\/api.sandbox.mangopay.com\/public\/mandates\/e8a73d\/cbfee6258cc44af0b4e73dca6435abcf\/confirmation"},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/bank-mandate\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('bankMandate').save({iban: "FR7611808009101234567890147", address: "Test", budgetAmount: 10000, returnUrl: "http://127.0.0.1:8080" }).then(function success(response) {},function error(err) {});
 */

/**
 * @api{post} /sepa-direct-debit/ User Wallet payin with Sepa Direct Debit
 * @apiParam {String} walletId The wallet Id
 * @apiParam {String} mandateId The mandate Id
 * @apiParam {String} amount The amount to pay in
 * @apiName SepaDirectDebit
 * @apiGroup SepaDirectDebit
 * @apiPermission Owner
 * @apiSuccessExample Public response example
 {"code":200,"data":{"amount":10000,"statementDescriptor":"GrowishPay ricarica conto personale tramite Sepa Direct Debit","mangopayStatus":"CREATED","id":"5bd6e947ff98223a408b4569"},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/sepa-direct-debit\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('sepaDirectDebit').save({walletId: "57cec46aff9822c4038b4590", mandateId: "5bbe0927ff9822e1638b4579", amount: 10000}).then(function success(response) {},function error(err) {});
 */