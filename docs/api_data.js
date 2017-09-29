define({ "api": [
  {
    "type": "post",
    "url": "/auth/",
    "title": "Login",
    "name": "authorization",
    "group": "Authorization",
    "permission": [
      {
        "name": "Public",
        "title": "No token is required to access this asset",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"token\":\"Njc0NWRmMzk2ZWVmZGUy77Y2NTA1NGVmOWNkNjQzOGQ21DJlYmFmNQ==\",\"id\":\"53b157b19a6b51c4048b4572\",\"firstName\":\"Jhon\",\"lastName\":\"Smith\",\"birthday\":\"1986-03-19 00:00:00\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/53b157b19a6b51c4048b4572\\/image\\/\",\"taxCode\":\"\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/auth\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.authenticate('foo@bar.com', '12345678').then(function success(user) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Invalid credentials.</p>"
          }
        ]
      }
    },
    "filename": "./login.js",
    "groupTitle": "Authorization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/business/?lat=:lat&lon=:lon&radius=:radius&network=:network&filterByName=:name&filterByType&filterByCategory=:category",
    "title": "Request Business in a area",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lon",
            "description": "<p>Longitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>Radius in meters around lat, lon center (Max 50000).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>A string with comma separated value indicating the name of the networks the business belongs to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filterByName",
            "description": "<p>Complete or partial name of the business.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filterByType",
            "description": "<p>Accepted values: &quot;physical&quot; and &quot;online&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filterByCategory",
            "description": "<p>A string with comma separated value indicating the name of the categories to search.</p>"
          }
        ]
      }
    },
    "name": "getBusinessByArea",
    "group": "Business",
    "permission": [
      {
        "name": "Public",
        "title": "No token is required to access this asset",
        "description": ""
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"id\":\"596f1268ff9822b21b8b4598\", \"walletId\": \"59cb8357ff98225d068b458c\", \"email\":\"foo@bar.com\",\"name\":\"Foo Business 1\",\"category\":\"Foo1Category\",\"distance\":\"1500\",\"promo\":\"\",\"lat\":\"11.23\",\"lon\":\"12.22\",\"address\":\"Via foo bar, 12, Italy\"},{\"id\":\"596f1268ff98SSb21b8b4598\", \"walletId\": \"59cb8342ff98225d068b456e\", \"email\":\"foo@bar.com\",\"name\":\"Foo Business 2\",\"category\":\"Foo2Category,Foo2SecondCategory\",\"distance\":\"100\",\"promo\":\"\",\"lat\":\"11.23\",\"lon\":\"12.22\",\"address\":\"Via foo bar, 12, Italy\"}],\"pagination\": {\"page\": 1, \"perPage\": 50, \"total\": 2 }, \"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/business\\/?lat=12&lon=11\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('business').read({lat: 45, lon: 9, radius: 1000, network: \"netexample\"}).then(function success(business) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./rpc-geo-business.js",
    "groupTitle": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/list/:id",
    "title": "Get a List Wallet (wedding list)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of the list.</p>"
          }
        ]
      }
    },
    "name": "ListWallet",
    "group": "List_Wallet",
    "permission": [
      {
        "name": "Mixed",
        "title": "The response of this asset varies if a token is used or not",
        "description": ""
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"brideName\":\"Her\",\"groomName\":\"Him\",\"weddingDate\":\"2017-07-31 00:00:00\",\"type\":\"1\",\"userId\":\"53b157b19a6b51c4048b4572\",\"owners\":[],\"rules\":[],\"imageUrl\":null,\"state\":300,\"slug\":\"something-domingo-lupo-310717\",\"province\":\"PA\",\"cellphone\":\"3317241893\",\"listable\":100,\"keywords\":[\"lupo\",\"pa\"],\"welcomeMsg\":null,\"ceremony\":null,\"event\":null,\"showRsvp\":\"1\",\"showContributors\":\"1\",\"welcomeBoxPosition\":1,\"protocolCode\":null,\"premiumDate\":null,\"domain\":null,\"forfait\":0,\"disableWithdrawalContribution\":0,\"id\":\"596f1268ff9822b21b8b4598\",\"collectedFeeAmount\":0,\"url\":\"https:\\/\\/dev.listanozzeonline.com\\/something-domingo-lupo-310717\",\"urlFriendly\":\"dev.listanozzeonline.com\\/something-domingo-lupo-310717\",\"feeForfait\":0,\"products\":[{\"name\":\"Contributo Libero\",\"description\":\"\",\"category\":\"free_contribution\",\"subCategory\":null,\"address\":null,\"url\":null,\"type\":100,\"collectedAmount\":0,\"goalAmount\":5000000,\"quoteAmount\":null,\"position\":0,\"quoteNumber\":null,\"imageId\":null,\"imageUrl\":null,\"contributors\":[],\"rating\":0,\"partnerProductCode\":null,\"authBy\":\"user\",\"id\":\"596f1268ff9822b21b8b4597\",\"isEditable\":true,\"ecommerce\":null,\"promiseAmount\":0}],\"ecommerces\":[{\"name\":\"Sposi Shop\",\"description\":\"Sposishop \\u00e8 un marketplace innovativo che offre un ampia scelta di prodotti per il tuo matrimonio.\",\"url\":\"https:\\/\\/www.sposishop.com:10011\\/\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logonew_b2.1474385239.1485184131.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/ss.1485958129.jpg\",\"backgroundColor\":\"#411e56\",\"id\":\"58861bb3ff9822ef778b4568\"},{\"name\":\"Love The Sign\",\"description\":\"LOVEThESIGN \\u00e8 il tuo nuovo ecommerce di riferimento per l\\u0027home design. \",\"url\":\"http:\\/\\/stage.lovethesign.com\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logo-lovethsign.1485962490.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/d02da8bf866973ac52825b3e538b279e.1493985050.jpeg\",\"backgroundColor\":\"#ffffff\",\"id\":\"5891fcf9ff9822e20e8b45bc\"},{\"name\":\"In Love Partecipazioni\",\"description\":\"Le migliori partecipazione del mondo a casa tua con un clic\",\"url\":\"https:\\/\\/widgetdemo.growish.com\\/listanozze.html\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/PartecipazioniInlove.1489747849.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/displayimagesyncresized.1489746414.png\",\"backgroundColor\":\"#ffffff\",\"id\":\"58cbb9edff9822405f8b4568\"},{\"name\":\"Bomboniere Cuorematto \",\"description\":\"Bomboniere Cuorematto: dallo stile classico a quello pi\\u00f9 simpatico e divertente.\",\"url\":\"https:\\/\\/www.sposishop.com\\/search\\/search?filtro=\\u0026pagina=1\\u0026categoria=38\\u0026catec=38\\u0026colori=\\u0026marchio=1165%2C\\u0026filtrobrand=\\u0026brands=1165\\u0026tags=\\u0026prezzo=999999999\\u0026orderBy=A-Z\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logo-cuorematto.1492767628.1494850330.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/Mongolfiera-in-Metallo-h12-5cm-linea-Cuore-in-Volo-Cuorematto-20-extra-big-4293.1492767628.1494850330.jpg\",\"backgroundColor\":\"#ffffff\",\"id\":\"59199b1aff98224e178b4597\"}]},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/list\\/596f1268ff9822b21b8b4598\\/\",\"method\":\"GET\"}",
          "type": "json"
        },
        {
          "title": "Private response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"brideName\":\"Her\",\"groomName\":\"Him\",\"weddingDate\":\"2017-07-31 00:00:00\",\"type\":null,\"userId\":\"53b157b19a6b51c4048b4572\",\"amount\":0,\"collectedAmount\":0,\"owners\":[],\"rules\":[],\"imageUrl\":null,\"state\":100,\"slug\":\"something-domingo-lupo-310717\",\"province\":\"PA\",\"cellphone\":null,\"listable\":100,\"keywords\":[\"lupo\",\"pa\"],\"welcomeMsg\":null,\"ceremony\":null,\"event\":null,\"message\":[],\"extraEmail\":null,\"guests\":[],\"promoCode\":\"\",\"showRsvp\":1,\"showContributors\":1,\"welcomeBoxPosition\":1,\"agencyId\":null,\"contractId\":null,\"protocolCode\":null,\"premiumDate\":null,\"domain\":null,\"forfait\":0,\"disableWithdrawalContribution\":0,\"cashAmount\":0,\"pendingCashAmount\":0,\"transferFromAgencyAmount\":0,\"id\":\"596f1268ff9822b21b8b4598\",\"availableAmount\":0,\"collectedFeeAmount\":0,\"url\":\"https:\\/\\/dev.listanozzeonline.com\\/something-domingo-lupo-310717\",\"urlFriendly\":\"dev.listanozzeonline.com\\/something-domingo-lupo-310717\",\"feeForfait\":0,\"products\":[{\"name\":\"Contributo Libero\",\"description\":\"\",\"category\":\"free_contribution\",\"subCategory\":null,\"address\":null,\"url\":null,\"type\":100,\"collectedAmount\":0,\"goalAmount\":5000000,\"quoteAmount\":null,\"position\":0,\"quoteNumber\":null,\"imageId\":null,\"imageUrl\":null,\"contributors\":[],\"rating\":0,\"partnerProductCode\":null,\"authBy\":\"user\",\"id\":\"596f1268ff9822b21b8b4597\",\"isEditable\":true,\"ecommerce\":null,\"promiseAmount\":0}],\"rsvp\":[],\"tables\":[{\"name\":\"Sposi\",\"seats\":2,\"type\":\"rectangle\",\"posX\":0.5,\"posY\":0.2,\"users\":[],\"id\":\"596f1268ff9822b21b8b459a\"},{\"name\":\"Amici della sposo\",\"seats\":6,\"type\":\"round\",\"posX\":0.75,\"posY\":0.5,\"users\":[],\"id\":\"596f1268ff9822b21b8b459c\"},{\"name\":\"Amici della sposa\",\"seats\":6,\"type\":\"round\",\"posX\":0.25,\"posY\":0.5,\"users\":[],\"id\":\"596f1268ff9822b21b8b459b\"}],\"ecommerces\":[{\"name\":\"Sposi Shop\",\"description\":\"Sposishop \\u00e8 un marketplace innovativo che offre un ampia scelta di prodotti per il tuo matrimonio.\",\"url\":\"https:\\/\\/www.sposishop.com:10011\\/\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logonew_b2.1474385239.1485184131.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/ss.1485958129.jpg\",\"backgroundColor\":\"#411e56\",\"id\":\"58861bb3ff9822ef778b4568\"},{\"name\":\"Love The Sign\",\"description\":\"LOVEThESIGN \\u00e8 il tuo nuovo ecommerce di riferimento per l\\u0027home design. \",\"url\":\"http:\\/\\/stage.lovethesign.com\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logo-lovethsign.1485962490.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/d02da8bf866973ac52825b3e538b279e.1493985050.jpeg\",\"backgroundColor\":\"#ffffff\",\"id\":\"5891fcf9ff9822e20e8b45bc\"},{\"name\":\"In Love Partecipazioni\",\"description\":\"Le migliori partecipazione del mondo a casa tua con un clic\",\"url\":\"https:\\/\\/widgetdemo.growish.com\\/listanozze.html\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/PartecipazioniInlove.1489747849.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/displayimagesyncresized.1489746414.png\",\"backgroundColor\":\"#ffffff\",\"id\":\"58cbb9edff9822405f8b4568\"},{\"name\":\"Bomboniere Cuorematto \",\"description\":\"Bomboniere Cuorematto: dallo stile classico a quello pi\\u00f9 simpatico e divertente.\",\"url\":\"https:\\/\\/www.sposishop.com\\/search\\/search?filtro=\\u0026pagina=1\\u0026categoria=38\\u0026catec=38\\u0026colori=\\u0026marchio=1165%2C\\u0026filtrobrand=\\u0026brands=1165\\u0026tags=\\u0026prezzo=999999999\\u0026orderBy=A-Z\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logo-cuorematto.1492767628.1494850330.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/Mongolfiera-in-Metallo-h12-5cm-linea-Cuore-in-Volo-Cuorematto-20-extra-big-4293.1492767628.1494850330.jpg\",\"backgroundColor\":\"#ffffff\",\"id\":\"59199b1aff98224e178b4597\"}]},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/list\\/something-domingo-lupo-310717\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('newListWallet').save({ brideName:\"Miss Smith\",groomName:\"Smith\",weddingDate:\"2018-03-19\",province: \"AN\" }).then(function success(listWallet) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./list.js",
    "groupTitle": "List_Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/charge-wallet/",
    "title": "Recharge List Wallet (wedding list)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>Unique Id of the wallet to recharge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>The amount to be charge in <a href=\"https://en.wiktionary.org/wiki/Eurocent#English\">eurocents</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>Method of recharge, accepted values: &quot;chargeCardWallet&quot; for Payin Credit Card and &quot;chargeBankwireWallet&quot; for Payin BankWire</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "returnUrl",
            "description": "<p>This field is mandatory in order to return to Application/Website when doing Payin Credit Card</p>"
          }
        ]
      }
    },
    "name": "chargeWallet",
    "group": "List_Wallet",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Payin Credit Card response example",
          "content": "{\"code\": 200, \"message\": \"contribution created\", \"data\": {\"paymentUrl\": \"https://homologation-secure-p.payline.com/webpayment/step2.do?reqCode=prepareStep2&token=1mFrNegrAWRUvp2Ke3051506606925967\"}, \"pagination\": null, \"uri\": \"https://apidev.growish.com/v1/charge-wallet/\", \"method\": \"POST\"}",
          "type": "json"
        },
        {
          "title": "Payin Bankwire response example",
          "content": "{\"code\": 200, \"message\": \"withdrawal contribution created\", \"data\": {\"bankAccountOwner\": \"MANGOPAY\",\"bankAccountIBAN\": \"FR7618829754160173622224251\",\"bankAccountBIC\": \"CMBRFR2BCME\",\"generatedReference\": \"4a020559fa\",\"amountDeclared\": 10000,\"id\": \"59ccfe93ff982249168b4568\"}, \"pagination\": null, \"uri\": \"https://apidev.growish.com/v1/charge-wallet/\", \"method\": \"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('chargeWallet').save({ walletId:\"59c241c6ff9822902f8b45a4\", amount: 10000, mode: \"chargeCardWallet\", returnUrl: \"https://appReturnUrl\" }).then(function success(response) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./list.js",
    "groupTitle": "List_Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/list/",
    "title": "Register a new List Wallet (wedding list)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brideName",
            "description": "<p>The name of the bride.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groomName",
            "description": "<p>The name of the groom.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Province",
            "description": "<p>The province of the wedding. Two letters code, only Italian province are accepted. <a href=\"https://gist.github.com/domingosl/d1234027adc2a86c48f00433f7e9e2b7\">Province Html List</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weddingDate",
            "description": "<p>The date of the wedding in YYYY-MM-GG format.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cellphone",
            "description": "<p>The cellphone of the owner of the list wallet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "promoCode",
            "description": "<p>A promotional code, gift code or promo id.</p>"
          }
        ]
      }
    },
    "name": "newListWallet",
    "group": "List_Wallet",
    "permission": [
      {
        "name": "Private",
        "title": "A token is required to access this asset",
        "description": ""
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"brideName\":\"Miss Smith\",\"groomName\":\"Jhon Smith\",\"weddingDate\":\"2017-11-12 00:00:00\",\"type\":null,\"userId\":\"59a6c7c1ff9822dd108b456b\",\"amount\":0,\"collectedAmount\":0,\"owners\":[],\"rules\":[],\"imageUrl\":null,\"state\":100,\"slug\":\"miss-smith-jhon-smith-121117\",\"province\":\"BI\",\"cellphone\":\"3317241893\",\"listable\":100,\"keywords\":[\"smith\",\"bi\"],\"welcomeMsg\":null,\"ceremony\":null,\"event\":null,\"message\":[],\"extraEmail\":null,\"guests\":[],\"promoCode\":\"\",\"showRsvp\":1,\"showContributors\":1,\"welcomeBoxPosition\":1,\"agencyId\":null,\"contractId\":null,\"protocolCode\":null,\"premiumDate\":null,\"domain\":null,\"forfait\":0,\"disableWithdrawalContribution\":0,\"cashAmount\":0,\"pendingCashAmount\":0,\"transferFromAgencyAmount\":0,\"id\":\"59a6ce99ff9822dd108b456f\",\"availableAmount\":0,\"collectedFeeAmount\":0,\"url\":\"https:\\/\\/dev.listanozzeonline.com\\/miss-smith-jhon-smith-121117\",\"urlFriendly\":\"dev.listanozzeonline.com\\/miss-smith-jhon-smith-121117\",\"feeForfait\":0,\"products\":[{\"name\":\"Contributo Libero\",\"description\":\"\",\"category\":\"free_contribution\",\"subCategory\":null,\"address\":null,\"url\":null,\"type\":100,\"collectedAmount\":0,\"goalAmount\":5000000,\"quoteAmount\":null,\"position\":0,\"quoteNumber\":null,\"imageId\":null,\"imageUrl\":null,\"contributors\":[],\"rating\":0,\"partnerProductCode\":null,\"authBy\":\"user\",\"id\":\"59a6ce99ff9822dd108b456e\",\"isEditable\":true,\"ecommerce\":null,\"promiseAmount\":0}],\"rsvp\":[],\"tables\":[{\"name\":\"Sposi\",\"seats\":2,\"type\":\"rectangle\",\"posX\":0.5,\"posY\":0.2,\"users\":[],\"id\":\"59a6ce99ff9822dd108b4571\"},{\"name\":\"Amici della sposa\",\"seats\":6,\"type\":\"round\",\"posX\":0.25,\"posY\":0.5,\"users\":[],\"id\":\"59a6ce99ff9822dd108b4572\"},{\"name\":\"Amici dello sposo\",\"seats\":6,\"type\":\"round\",\"posX\":0.75,\"posY\":0.5,\"users\":[],\"id\":\"59a6ce99ff9822dd108b4573\"}],\"ecommerces\":[{\"name\":\"Sposi Shop\",\"description\":\"Sposishop \\u00e8 un marketplace innovativo che offre un ampia scelta di prodotti per il tuo matrimonio.\",\"url\":\"https:\\/\\/www.sposishop.com:10011\\/\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logonew_b2.1474385239.1485184131.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/ss.1485958129.jpg\",\"backgroundColor\":\"#411e56\",\"id\":\"58861bb3ff9822ef778b4568\"},{\"name\":\"Love The Sign\",\"description\":\"LOVEThESIGN \\u00e8 il tuo nuovo ecommerce di riferimento per l\\u0027home design. \",\"url\":\"http:\\/\\/stage.lovethesign.com\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logo-lovethsign.1485962490.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/d02da8bf866973ac52825b3e538b279e.1493985050.jpeg\",\"backgroundColor\":\"#ffffff\",\"id\":\"5891fcf9ff9822e20e8b45bc\"},{\"name\":\"In Love Partecipazioni\",\"description\":\"Le migliori partecipazione del mondo a casa tua con un clic\",\"url\":\"https:\\/\\/widgetdemo.growish.com\\/listanozze.html\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/PartecipazioniInlove.1489747849.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/displayimagesyncresized.1489746414.png\",\"backgroundColor\":\"#ffffff\",\"id\":\"58cbb9edff9822405f8b4568\"},{\"name\":\"Bomboniere Cuorematto \",\"description\":\"Bomboniere Cuorematto: dallo stile classico a quello pi\\u00f9 simpatico e divertente.\",\"url\":\"https:\\/\\/www.sposishop.com\\/search\\/search?filtro=\\u0026pagina=1\\u0026categoria=38\\u0026catec=38\\u0026colori=\\u0026marchio=1165%2C\\u0026filtrobrand=\\u0026brands=1165\\u0026tags=\\u0026prezzo=999999999\\u0026orderBy=A-Z\",\"logoUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/logo-cuorematto.1492767628.1494850330.png\",\"backgroundImageUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ecommerce-images\\/Mongolfiera-in-Metallo-h12-5cm-linea-Cuore-in-Volo-Cuorematto-20-extra-big-4293.1492767628.1494850330.jpg\",\"backgroundColor\":\"#ffffff\",\"id\":\"59199b1aff98224e178b4597\"}]},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/list\\/59a6ce99ff9822dd108b456f\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('newListWallet').save({ brideName:\"Miss Smith\",groomName:\"Smith\",weddingDate:\"2018-03-19\",province: \"AN\" }).then(function success(listWallet) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./list.js",
    "groupTitle": "List_Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/transfer/",
    "title": "Transfers money from a user wallet to another",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>The amount to be transfer in <a href=\"https://en.wiktionary.org/wiki/Eurocent#English\">eurocents</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the beneficiary of the transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the current logged user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>The payer wallet unique Id</p>"
          }
        ]
      }
    },
    "name": "transferW2W",
    "group": "Payments",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"Soldi trasferiti con successo\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/transfer\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('transfer').save({ amount:5000,email:\"foo@bar.com\",password:\"password\",walletId: \"53b157b19a6b51c4048b4572\" }).then(function success(response) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./payments.js",
    "groupTitle": "Payments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/statement/:id",
    "title": "Gets the statement of a wallet or list wallet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of the wallet or list wallet.</p>"
          }
        ]
      }
    },
    "name": "GetStatement",
    "group": "Statement",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"operation\":\"cashout\",\"type\":\"transfer_user_partner\",\"updateDate\":\"2017-09-01 12:01:45\",\"amount\":5800,\"partnerName\":\"Qui Mamme Shop\",\"partnerEmail\":\"domingo.lupo@growish.com\"},{\"operation\":\"cashin\",\"type\":\"card\",\"status\":\"done\",\"updateDate\":\"2017-09-01 11:52:03\",\"issuedBy\":\"Bar Lupo\",\"amount\":200000,\"netAmount\":200000,\"symbol\":\"+\",\"fee\":3800}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/statement\\/596f1268ff9822b21b8b4598\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('statement', '596f1268ff9822b21b8b4598').read().then(function success(listWallet) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./statement.js",
    "groupTitle": "Statement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/:id/",
    "title": "Request User Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User unique Id</p>"
          }
        ]
      }
    },
    "name": "getUser",
    "group": "User",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"firstName\":\"Jhon\",\"lastName\":\"Smith\",\"email\":\"foo@email.com\",\"birthday\":\"1986-03-19 00:00:00\",\"canBeContacted\":1,\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/53b157b19a6b51c4048b4572\\/image\\/\",\"taxCode\":\"\",\"lastSeen\":\"2017-08-30 14:30:19\",\"lastSeenMobile\":null,\"id\":\"53b157b19a6b51c4048b4572\",\"type\":\"user\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/53b157b19a6b51c4048b4572\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user', 'someUserId').read().then(function success(user) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/:userId/list/:listId/",
    "title": "Request User's Lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listId",
            "description": "<p>List unique Id</p>"
          }
        ]
      }
    },
    "name": "getUserLists",
    "group": "User",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"id\":\"596f1268ff9822b21b8b4598\",\"brideName\":\"Her\",\"groomName\":\"Him\",\"weddingDate\":\"2017-07-31 00:00:00\",\"amount\":0},{\"id\":\"59130875ff98228f178b4570\",\"brideName\":\"Another\",\"groomName\":\"Foo\",\"weddingDate\":\"2017-05-24 00:00:00\",\"amount\":0}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/53b157b19a6b51c4048b4572\\/list\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.list', 'someUserId', 'someListId').read().then(function success(userLists) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Register a new User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The user first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The user last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>The user date of birth in YYYY-MM-GG format</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "canBeContacted",
            "description": "<p>Legacy field, must be set to 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "marketingEmail",
            "description": "<p>Legacy field, must be set to 1</p>"
          }
        ]
      }
    },
    "name": "newUser",
    "group": "User",
    "permission": [
      {
        "name": "Public",
        "title": "No token is required to access this asset",
        "description": ""
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"user created\",\"data\":{\"token\":\"MGY5ODNFFjZkMmU3YTQ12GMyM2ExYTA3Zjg2YmY5MjRiZTBhNTgxMg==\",\"id\":\"59a6c7c1ff9822dd108b456b\",\"firstName\":\"Jhon\",\"lastName\":\"Smith\",\"birthday\":\"1976-08-05 00:00:00\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59a6c7c1ff9822dd108b456b\\/image\\/\",\"taxCode\":null},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('newUser').save({ firstName:\"Jhon\",lastName:\"Smith\",email:\"foo1@email.com\",birthday:\"1986-03-19\",canBeContacted:1, marketingEmail:1 }).then(function success(user) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update an existing User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>The user first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>The user last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>The user date of birth in YYYY-MM-GG format</p>"
          }
        ]
      }
    },
    "name": "updateUser",
    "group": "User",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"user created\",\"data\":{\"token\":\"MGY5ODNFFjZkMmU3YTQ12GMyM2ExYTA3Zjg2YmY5MjRiZTBhNTgxMg==\",\"id\":\"59a6c7c1ff9822dd108b456b\",\"firstName\":\"Jhon2\",\"lastName\":\"Smith\",\"birthday\":\"1976-08-05 00:00:00\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59a6c7c1ff9822dd108b456b\\/image\\/\",\"taxCode\":null},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user').update({ firstName:\"Jhon2\" }).then(function success(user) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-App-Key",
            "description": "<p>Api client app key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>The user token.</p>"
          }
        ]
      }
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_lorenzo_Projects_Growish_api_doc_docs_main_js",
    "groupTitle": "_home_lorenzo_Projects_Growish_api_doc_docs_main_js",
    "name": ""
  }
] });
