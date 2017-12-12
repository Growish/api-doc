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
 * @api{get} /list/:id/ Get a List Wallet (wedding list)
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

/**
 * @api{post} /charge-wallet/ Recharge List Wallet (wedding list)
 * @apiParam {String} walletId Unique Id of the wallet to recharge
 * @apiParam {Number} amount The amount to be charge in [eurocents](https://en.wiktionary.org/wiki/Eurocent#English)
 * @apiParam {String} mode Method of recharge, accepted values: "chargeCardWallet" for Payin Credit Card and "chargeBankwireWallet" for Payin BankWire
 * @apiParam {String} [returnUrl] This field is mandatory in order to return to Application/Website when doing Payin Credit Card
 * @apiName chargeWallet
 * @apiGroup List Wallet
 * @apiPermission Owner
 * @apiSuccessExample Payin Credit Card response example
 * {"code": 200, "message": "contribution created", "data": {"paymentUrl": "https://homologation-secure-p.payline.com/webpayment/step2.do?reqCode=prepareStep2&token=1mFrNegrAWRUvp2Ke3051506606925967"}, "pagination": null, "uri": "https://apidev.growish.com/v1/charge-wallet/", "method": "POST"}
 * @apiSuccessExample Payin Bankwire response example
 * {"code": 200, "message": "withdrawal contribution created", "data": {"bankAccountOwner": "MANGOPAY","bankAccountIBAN": "FR7618829754160173622224251","bankAccountBIC": "CMBRFR2BCME","generatedReference": "4a020559fa","amountDeclared": 10000,"id": "59ccfe93ff982249168b4568"}, "pagination": null, "uri": "https://apidev.growish.com/v1/charge-wallet/", "method": "POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('chargeWallet').save({ walletId:"59c241c6ff9822902f8b45a4", amount: 10000, mode: "chargeCardWallet", returnUrl: "https://appReturnUrl" }).then(function success(response) { }, function error(err) { });
 */

/**
 * @api{get} /blog-posts/ Return Blog Posts
 * @apiName blogPosts
 * @apiGroup List Wallet
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"data":[{"title":"Il galateo del matrimonio civile","description":"\u003Cp\u003EOggi, vogliamo sfatare una diceria comune, cio\u00e8 che quello civile, sia un matrimonio \u0026#8220;di serie B\u0026#8221;. Molti ne sono davvero convinti purtroppo, ma in realt\u00e0, non \u00e8 cos\u00ec. Anche il matrimonio civile ha le sue regole di bon ton, da seguire. Ecco Il galateo del matrimonio civile.\u003C\/p\u003E\n","link":"https:\/\/blog.listanozzeonline.com\/galateo-del-matrimonio-civile\/","image":"https:\/\/blog.listanozzeonline.com\/wp-content\/uploads\/2017\/12\/Il-galateo-del-matrimonio-civile-300x143.jpg"},{"title":"5 consigli per il tuo matrimonio in inverno","description":"\u003Cp\u003EHai mai pensato di celebrare il tuo matrimonio in inverno? E\u0026#8217; vero, questa stagione \u00e8 fredda e le temperature rigide spesso impongono diverse limitazioni. Ma diciamocelo:\u00a0con i dovuti accorgimenti, l\u0026#8217;inverno \u00e8 uno di quei periodi pi\u00f9 magici e suggestivi\u00a0per celebrare un matrimonio \u0026#8220;da fiaba\u0026#8221;, circondati dall\u2019incantevole atmosfera\u00a0che solo questa stagione regala. Qui vi spieghiamo come\u0026#8230; \u003C\/p\u003E\n\u003Cdiv class=\u0022clear\u0022\u003E\u003C\/div\u003E\n\u003Cp\u003E\u003Ca href=\u0022https:\/\/blog.listanozzeonline.com\/5-consigli-matrimonio-inverno\/\u0022 class=\u0022gdlr-button with-border excerpt-read-more\u0022\u003EContinua a leggere\u003C\/a\u003E\u003C\/p\u003E\n","link":"https:\/\/blog.listanozzeonline.com\/5-consigli-matrimonio-inverno\/","image":"https:\/\/blog.listanozzeonline.com\/wp-content\/uploads\/2017\/10\/matrimonio-in-inverno-2-300x143.jpg"},{"title":"I documenti necessari per sposarsi","description":"\u003Cp\u003EState organizzando il matrimonio? Avete gi\u00e0 pensato a tutti i documenti necessari per sposarsi? Organizzare un matrimonio non \u00e8 solo stressante, \u00e8 anche stimolante e divertente. Contattare la location, allestirla come si \u00e8 sempre sognato, poi scegliere l\u0026#8217;abito da sposa\u0026#8230; Momenti unici e indimenticabili s\u00ec, ma non dimenticatevi la burocrazia.\u003C\/p\u003E\n","link":"https:\/\/blog.listanozzeonline.com\/documenti-necessari-sposarsi\/","image":"https:\/\/blog.listanozzeonline.com\/wp-content\/uploads\/2017\/10\/fedi-300x143.jpg"}],"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/blog-posts\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('blogPosts').read().then(function success(blogPosts) { }, function error() { });
 */

/**
 * @api{post} /download-ebook/ Download Ebook
 * @apiParam {String} name The user name
 * @apiParam {String} email The user email
 * @apiParam {String} province The province of wedding list
 * @apiParam {String} weddingDate The date of wedding in YYYY-MM-GG format
 * @apiName downloadEbook
 * @apiGroup List Wallet
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"data":{"ebookUrl":"https:\/\/s3.eu-central-1.amazonaws.com\/growish-partner\/ebook-nozze.pdf"},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/download-ebook\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('downloadEbook').save({ name: "fooname", email:"foo1@email.com", province: "MI", weddingDate: "2018-12-31"}).then(function success(data) { }, function error(err) { });
 */

/**
 * @api{post} /pre-user/ Register pre User info during List Wallet Wizard (wedding list)
 * @apiParam {String} email The user email
 * @apiParam {String} province The province of wedding list
 * @apiParam {String} weddingDate The date of wedding in YYYY-MM-GG format
 * @apiName preUser
 * @apiGroup List Wallet
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data": [],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/pre-user\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('preUser').save({ email:"foo1@email.com", province: "MI", weddingDate: "2018-12-31"}).then(function success() { }, function error(err) { });
 */

