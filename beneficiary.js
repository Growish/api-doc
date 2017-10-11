/**
 * @api{get} /beneficiary/ Get the beneficiary data
 * @apiName getBeneficiary
 * @apiGroup Beneficiary
 * @apiPermission Owner
 * @apiSuccessExample Public response example
 {"code":200,"message":"OK","data":[{"bankAccountOwnerName":"Mario Rossi","bankAccountOwnerAddress":"Via dei Mille","bankAccountIBAN":"IT60X0542811101000000123456","id":"58862d47ff9822a9778b4594"},{"bankAccountOwnerName":"Jhon Harris","bankAccountOwnerAddress":"Oxford Road","bankAccountIBAN":"GB29NWBK60161331926819","id":"595f5cdbff98226f1b8b4581"},{"bankAccountOwnerName":"Jhon Harris","bankAccountOwnerAddress":"Oxford Road","bankAccountIBAN":"GB29NWBK60161331926819","id":"595f5f0aff9822781a8b457c"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/beneficiary\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('beneficiary').read().then(function success(response) {$scope.beneficiaries = response;},function error() {});
 */


/**
 * @api{post} /beneficiary/ Create new Beneficiary
 * @apiParam {String} bankAccountIBAN The bank account IBAN
 * @apiParam {String} bankAccountOwnerAddress The bank account owner address
 * @apiParam {String} bankAccountOwnerName The bank account owner name
 * @apiName NewBeneficiary
 * @apiGroup Beneficiary
 * @apiPermission Owner
 * @apiSuccessExample Public response example
 {"code":200,"message":"beneficiary created","data":{"id":"59ddf652ff9822e6068b4568"},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/beneficiary\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('beneficiary').save({bankAccountOwnerName: "Mario Rossi", bankAccountIBAN: "IT60X0542811101000000123456", bankAccountOwnerAddress: "Via dei Mille" }).then(function success(response) {},function error(err) {});
 */

