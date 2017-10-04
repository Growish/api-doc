/**
 * @api{post} /parserexcel/ Import contact from excel files
 * @apiParam {File} file
 * @apiName parserExcel
 * @apiGroup parserExcel
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[["Nome","Scuola","email","cellulare"],["Gaia","demo","gg@gg.it","12334566778"],["Lorenzo","test","ll@ll.it","345678902"],["Caterina","foo","cc@cc.it","2334556677"]],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/parserexcel\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('parseExcel').save(file).then(function success(response) { }, function error(err) { });
 */