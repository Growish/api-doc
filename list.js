/**
 * @api{post} /list/ Register a new List Wallet (wedding list)
 * @apiParam {String} brideName The name of the bride.
 * @apiParam {String} groomName The name of the groom.
 * @apiParam {String} Province The province of the wedding. Two letters code, only Italian province are accepted. [Province Html List](https://gist.github.com/domingosl/d1234027adc2a86c48f00433f7e9e2b7)
 * @apiParam {String} weddingDate The date of the wedding in YYYY-MM-GG format.
 * @apiParam {Number} [cellphone] The cellphone of the owner of the list wallet.
 * @apiParam {String} [promoCode] A promotional code, gift code or promo id.
 * @apiName newListWallet
 * @apiGroup List Wallet
 * @apiPermission Private
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data":{"brideName":"Miss Smith","groomName":"Jhon Smith","weddingDate":"2017-11-12 00:00:00","type":null,"userId":"59a6c7c1ff9822dd108b456b","amount":0,"collectedAmount":0,"owners":[],"rules":[],"imageUrl":null,"state":100,"slug":"miss-smith-jhon-smith-121117","province":"BI","cellphone":"3317241893","listable":100,"keywords":["smith","bi"],"welcomeMsg":null,"ceremony":null,"event":null,"message":[],"extraEmail":null,"guests":[],"promoCode":"","showRsvp":1,"showContributors":1,"welcomeBoxPosition":1,"agencyId":null,"contractId":null,"protocolCode":null,"premiumDate":null,"domain":null,"forfait":0,"disableWithdrawalContribution":0,"cashAmount":0,"pendingCashAmount":0,"transferFromAgencyAmount":0,"id":"59a6ce99ff9822dd108b456f","availableAmount":0,"collectedFeeAmount":0,"url":"https:\/\/dev.listanozzeonline.com\/miss-smith-jhon-smith-121117","urlFriendly":"dev.listanozzeonline.com\/miss-smith-jhon-smith-121117","feeForfait":0,"products":[{"name":"Contributo Libero","description":"","category":"free_contribution","subCategory":null,"address":null,"url":null,"type":100,"collectedAmount":0,"goalAmount":5000000,"quoteAmount":null,"position":0,"quoteNumber":null,"imageId":null,"imageUrl":null,"contributors":[],"rating":0,"partnerProductCode":null,"authBy":"user","id":"59a6ce99ff9822dd108b456e","isEditable":true,"ecommerce":null,"promiseAmount":0}],"rsvp":[],"tables":[{"name":"Sposi","seats":2,"type":"rectangle","posX":0.5,"posY":0.2,"users":[],"id":"59a6ce99ff9822dd108b4571"},{"name":"Amici della sposa","seats":6,"type":"round","posX":0.25,"posY":0.5,"users":[],"id":"59a6ce99ff9822dd108b4572"},{"name":"Amici dello sposo","seats":6,"type":"round","posX":0.75,"posY":0.5,"users":[],"id":"59a6ce99ff9822dd108b4573"}],"ecommerces":[{"name":"Sposi Shop","description":"Sposishop \u00e8 un marketplace innovativo che offre un ampia scelta di prodotti per il tuo matrimonio.","url":"https:\/\/www.sposishop.com:10011\/","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logonew_b2.1474385239.1485184131.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/ss.1485958129.jpg","backgroundColor":"#411e56","id":"58861bb3ff9822ef778b4568"},{"name":"Love The Sign","description":"LOVEThESIGN \u00e8 il tuo nuovo ecommerce di riferimento per l\u0027home design. ","url":"http:\/\/stage.lovethesign.com","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logo-lovethsign.1485962490.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/d02da8bf866973ac52825b3e538b279e.1493985050.jpeg","backgroundColor":"#ffffff","id":"5891fcf9ff9822e20e8b45bc"},{"name":"In Love Partecipazioni","description":"Le migliori partecipazione del mondo a casa tua con un clic","url":"https:\/\/widgetdemo.growish.com\/listanozze.html","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/PartecipazioniInlove.1489747849.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/displayimagesyncresized.1489746414.png","backgroundColor":"#ffffff","id":"58cbb9edff9822405f8b4568"},{"name":"Bomboniere Cuorematto ","description":"Bomboniere Cuorematto: dallo stile classico a quello pi\u00f9 simpatico e divertente.","url":"https:\/\/www.sposishop.com\/search\/search?filtro=\u0026pagina=1\u0026categoria=38\u0026catec=38\u0026colori=\u0026marchio=1165%2C\u0026filtrobrand=\u0026brands=1165\u0026tags=\u0026prezzo=999999999\u0026orderBy=A-Z","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logo-cuorematto.1492767628.1494850330.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/Mongolfiera-in-Metallo-h12-5cm-linea-Cuore-in-Volo-Cuorematto-20-extra-big-4293.1492767628.1494850330.jpg","backgroundColor":"#ffffff","id":"59199b1aff98224e178b4597"}]},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/list\/59a6ce99ff9822dd108b456f\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('newListWallet').save({ brideName:"Miss Smith",groomName:"Smith",weddingDate:"2018-03-19",province: "AN" }).then(function success(listWallet) { }, function error(err) { });
 */

/**
 * @api{get} /list/:id Get a List Wallet (wedding list)
 * @apiParam {String} id Unique Id of the list.
 * @apiName ListWallet
 * @apiGroup List Wallet
 * @apiPermission Mixed
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data":{"brideName":"Her","groomName":"Him","weddingDate":"2017-07-31 00:00:00","type":"1","userId":"53b157b19a6b51c4048b4572","owners":[],"rules":[],"imageUrl":null,"state":300,"slug":"something-domingo-lupo-310717","province":"PA","cellphone":"3317241893","listable":100,"keywords":["lupo","pa"],"welcomeMsg":null,"ceremony":null,"event":null,"showRsvp":"1","showContributors":"1","welcomeBoxPosition":1,"protocolCode":null,"premiumDate":null,"domain":null,"forfait":0,"disableWithdrawalContribution":0,"id":"596f1268ff9822b21b8b4598","collectedFeeAmount":0,"url":"https:\/\/dev.listanozzeonline.com\/something-domingo-lupo-310717","urlFriendly":"dev.listanozzeonline.com\/something-domingo-lupo-310717","feeForfait":0,"products":[{"name":"Contributo Libero","description":"","category":"free_contribution","subCategory":null,"address":null,"url":null,"type":100,"collectedAmount":0,"goalAmount":5000000,"quoteAmount":null,"position":0,"quoteNumber":null,"imageId":null,"imageUrl":null,"contributors":[],"rating":0,"partnerProductCode":null,"authBy":"user","id":"596f1268ff9822b21b8b4597","isEditable":true,"ecommerce":null,"promiseAmount":0}],"ecommerces":[{"name":"Sposi Shop","description":"Sposishop \u00e8 un marketplace innovativo che offre un ampia scelta di prodotti per il tuo matrimonio.","url":"https:\/\/www.sposishop.com:10011\/","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logonew_b2.1474385239.1485184131.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/ss.1485958129.jpg","backgroundColor":"#411e56","id":"58861bb3ff9822ef778b4568"},{"name":"Love The Sign","description":"LOVEThESIGN \u00e8 il tuo nuovo ecommerce di riferimento per l\u0027home design. ","url":"http:\/\/stage.lovethesign.com","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logo-lovethsign.1485962490.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/d02da8bf866973ac52825b3e538b279e.1493985050.jpeg","backgroundColor":"#ffffff","id":"5891fcf9ff9822e20e8b45bc"},{"name":"In Love Partecipazioni","description":"Le migliori partecipazione del mondo a casa tua con un clic","url":"https:\/\/widgetdemo.growish.com\/listanozze.html","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/PartecipazioniInlove.1489747849.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/displayimagesyncresized.1489746414.png","backgroundColor":"#ffffff","id":"58cbb9edff9822405f8b4568"},{"name":"Bomboniere Cuorematto ","description":"Bomboniere Cuorematto: dallo stile classico a quello pi\u00f9 simpatico e divertente.","url":"https:\/\/www.sposishop.com\/search\/search?filtro=\u0026pagina=1\u0026categoria=38\u0026catec=38\u0026colori=\u0026marchio=1165%2C\u0026filtrobrand=\u0026brands=1165\u0026tags=\u0026prezzo=999999999\u0026orderBy=A-Z","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logo-cuorematto.1492767628.1494850330.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/Mongolfiera-in-Metallo-h12-5cm-linea-Cuore-in-Volo-Cuorematto-20-extra-big-4293.1492767628.1494850330.jpg","backgroundColor":"#ffffff","id":"59199b1aff98224e178b4597"}]},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/list\/596f1268ff9822b21b8b4598\/","method":"GET"}
 * @apiSuccessExample Private response example
 * {"code":200,"message":"OK","data":{"brideName":"Her","groomName":"Him","weddingDate":"2017-07-31 00:00:00","type":null,"userId":"53b157b19a6b51c4048b4572","amount":0,"collectedAmount":0,"owners":[],"rules":[],"imageUrl":null,"state":100,"slug":"something-domingo-lupo-310717","province":"PA","cellphone":null,"listable":100,"keywords":["lupo","pa"],"welcomeMsg":null,"ceremony":null,"event":null,"message":[],"extraEmail":null,"guests":[],"promoCode":"","showRsvp":1,"showContributors":1,"welcomeBoxPosition":1,"agencyId":null,"contractId":null,"protocolCode":null,"premiumDate":null,"domain":null,"forfait":0,"disableWithdrawalContribution":0,"cashAmount":0,"pendingCashAmount":0,"transferFromAgencyAmount":0,"id":"596f1268ff9822b21b8b4598","availableAmount":0,"collectedFeeAmount":0,"url":"https:\/\/dev.listanozzeonline.com\/something-domingo-lupo-310717","urlFriendly":"dev.listanozzeonline.com\/something-domingo-lupo-310717","feeForfait":0,"products":[{"name":"Contributo Libero","description":"","category":"free_contribution","subCategory":null,"address":null,"url":null,"type":100,"collectedAmount":0,"goalAmount":5000000,"quoteAmount":null,"position":0,"quoteNumber":null,"imageId":null,"imageUrl":null,"contributors":[],"rating":0,"partnerProductCode":null,"authBy":"user","id":"596f1268ff9822b21b8b4597","isEditable":true,"ecommerce":null,"promiseAmount":0}],"rsvp":[],"tables":[{"name":"Sposi","seats":2,"type":"rectangle","posX":0.5,"posY":0.2,"users":[],"id":"596f1268ff9822b21b8b459a"},{"name":"Amici della sposo","seats":6,"type":"round","posX":0.75,"posY":0.5,"users":[],"id":"596f1268ff9822b21b8b459c"},{"name":"Amici della sposa","seats":6,"type":"round","posX":0.25,"posY":0.5,"users":[],"id":"596f1268ff9822b21b8b459b"}],"ecommerces":[{"name":"Sposi Shop","description":"Sposishop \u00e8 un marketplace innovativo che offre un ampia scelta di prodotti per il tuo matrimonio.","url":"https:\/\/www.sposishop.com:10011\/","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logonew_b2.1474385239.1485184131.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/ss.1485958129.jpg","backgroundColor":"#411e56","id":"58861bb3ff9822ef778b4568"},{"name":"Love The Sign","description":"LOVEThESIGN \u00e8 il tuo nuovo ecommerce di riferimento per l\u0027home design. ","url":"http:\/\/stage.lovethesign.com","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logo-lovethsign.1485962490.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/d02da8bf866973ac52825b3e538b279e.1493985050.jpeg","backgroundColor":"#ffffff","id":"5891fcf9ff9822e20e8b45bc"},{"name":"In Love Partecipazioni","description":"Le migliori partecipazione del mondo a casa tua con un clic","url":"https:\/\/widgetdemo.growish.com\/listanozze.html","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/PartecipazioniInlove.1489747849.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/displayimagesyncresized.1489746414.png","backgroundColor":"#ffffff","id":"58cbb9edff9822405f8b4568"},{"name":"Bomboniere Cuorematto ","description":"Bomboniere Cuorematto: dallo stile classico a quello pi\u00f9 simpatico e divertente.","url":"https:\/\/www.sposishop.com\/search\/search?filtro=\u0026pagina=1\u0026categoria=38\u0026catec=38\u0026colori=\u0026marchio=1165%2C\u0026filtrobrand=\u0026brands=1165\u0026tags=\u0026prezzo=999999999\u0026orderBy=A-Z","logoUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/logo-cuorematto.1492767628.1494850330.png","backgroundImageUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ecommerce-images\/Mongolfiera-in-Metallo-h12-5cm-linea-Cuore-in-Volo-Cuorematto-20-extra-big-4293.1492767628.1494850330.jpg","backgroundColor":"#ffffff","id":"59199b1aff98224e178b4597"}]},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/list\/something-domingo-lupo-310717\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('newListWallet').save({ brideName:"Miss Smith",groomName:"Smith",weddingDate:"2018-03-19",province: "AN" }).then(function success(listWallet) { }, function error(err) { });
 */