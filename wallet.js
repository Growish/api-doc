/**
 * @api{post} /wallet/ Create a new Wallet
 * @apiParam {String} titleWallet The wallet title
 * @apiParam {String} goalAmount The wallet goal amount
 * @apiParam {String} description The wallet description
 * @apiParam {String} category The category of the wallet
 * @apiParam {String} contributionLimitDate The deadline of the wallet in YYYY-MM-GG format.
 * @apiParam {String} [perks] The quotes of the wallet
 * @apiName newWallet
 * @apiGroup Wallet
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"colletta creata con successo","data":{"id":"59d4f71aff982269478b4567"},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/wallet\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('newWallet').save({ title:"Gita a Villa Monza", goalAmount:"100", imageUrl":"", description:"Lorem ipsum Lorem ipsum Lorem", contributionLimitDate:"2017-09-30 00:00:00", category: "gita"}).then(function success() { }, function error(err) { });
 */



/**
 * @api{get} /wallet/:id  Request Wallet Information
 * @apiParam {String} id Wallet
 * @apiName getWallet
 * @apiGroup Wallet
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"goalAmount":"100","imageUrl":"","title":"Gita a Villa Monza","contributionLimitDate":"2017-09-30 00:00:00","description":"Lorem ipsum Lorem ipsum Lorem","category":"gita","comments":[{"fistName":"Michela","lastName":"Parodi","email":"michela.parodi@email.com","comment":"Sarà una bellissima giornata"},{"fistName":"Mario","lastName":"Rossi","email":"mario.rossi@email.com","comment":"Sarà bellissima la villa di Monza"}],"perks":[{"walletId":"59a91a4bff9822482b8b4567","title":"Trasporti e Villa","description":"Lorem ipsum Lorem ipsum","amount":"30","available":"10"},{"walletId":"59a91a4bff9822482b8b4567","title":"Villa e merenda","description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum","amount":"30","available":"10"}]}],"pagination":null,"uri":"https://apidev.growish.com/v1/wallet/587f3900ff9822b7778b457e/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('wallet', 'walletId').read().then(function success(wallet) { }, function error(err) { });
 */

/**
 * @api{put} /wallet/:id  Update Wallet Information
 * @apiParam {String} titleWallet The wallet title
 * @apiParam {String} goalAmount The wallet goal amount
 * @apiParam {String} description The wallet description
 * @apiParam {String} category The category of the wallet
 * @apiParam {String} contributionLimitDate The deadline of the wallet in YYYY-MM-GG format.
 * @apiParam {String} [perks] The quotes of the wallet
 * @apiName updateWallet
 * @apiGroup Wallet
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"goalAmount":"100","imageUrl":"","title":"Gita al parco di villa Monza","contributionLimitDate":"2017-09-30 00:00:00","description":"Lorem ipsum Lorem ipsum Lorem","category":"gita","perks":[{"walletId":"59a91a4bff9822482b8b4567","title":"Trasporti e Villa","description":"Lorem ipsum Lorem ipsum","amount":"30","available":"10"},{"walletId":"59a91a4bff9822482b8b4567","title":"Villa e merenda","description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum","amount":"30","available":"10"}]}],"pagination":null,"uri":"https://apidev.growish.com/v1/wallet/587f3900ff9822b7778b457e/","method":"put"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('wallet', 'walletId').update({title:"Gita al parco di villa Monza"}).then(function success(wallet) { }, function error(err) { });
 */



