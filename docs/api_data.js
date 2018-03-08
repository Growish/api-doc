define({ "api": [
  {
    "type": "get",
    "url": "/access-token/:id/",
    "title": "Access Token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The user id</p>"
          }
        ]
      }
    },
    "name": "accessToken",
    "group": "Authorization",
    "description": "<p>It's a temporary token that you use to authorize the user in another app.</p>",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"accessToken\":\"YjFiMGYwYmRlZWFhOTJlYjY5ODAyZjgyZTYxZDYzNDhkMTUyZTg5Ng==\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/access-token\\/587f3900ff9822b7778b457e\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('accessToken', 'userId').read().then(function success(){},function error(){})",
        "type": "js"
      }
    ],
    "filename": "./auth.js",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p><a href=\"#api-Authorization-accessToken\">The accessToken</a></p>"
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
    "filename": "./auth.js",
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
    "type": "delete",
    "url": "/auth/",
    "title": "Logout",
    "name": "logout",
    "group": "Authorization",
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
          "title": "{\"code\":200,\"message\":\"OK\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/auth\\/\",\"method\":\"DELETE\"}",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/auth\\/\",\"method\":\"DELETE\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.logout().then(function success() {}, function error() {});",
        "type": "js"
      }
    ],
    "filename": "./auth.js",
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
    "type": "post",
    "url": "/beneficiary/",
    "title": "Create new Beneficiary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bankAccountIBAN",
            "description": "<p>The bank account IBAN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bankAccountOwnerAddress",
            "description": "<p>The bank account owner address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bankAccountOwnerName",
            "description": "<p>The bank account owner name</p>"
          }
        ]
      }
    },
    "name": "NewBeneficiary",
    "group": "Beneficiary",
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
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"beneficiary created\",\"data\":{\"id\":\"59ddf652ff9822e6068b4568\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/beneficiary\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('beneficiary').save({bankAccountOwnerName: \"Mario Rossi\", bankAccountIBAN: \"IT60X0542811101000000123456\", bankAccountOwnerAddress: \"Via dei Mille\" }).then(function success(response) {},function error(err) {});",
        "type": "js"
      }
    ],
    "filename": "./beneficiary.js",
    "groupTitle": "Beneficiary",
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
    "url": "/beneficiary/",
    "title": "Get the beneficiary data",
    "name": "getBeneficiary",
    "group": "Beneficiary",
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
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"bankAccountOwnerName\":\"Mario Rossi\",\"bankAccountOwnerAddress\":\"Via dei Mille\",\"bankAccountIBAN\":\"IT60X0542811101000000123456\",\"id\":\"58862d47ff9822a9778b4594\"},{\"bankAccountOwnerName\":\"Jhon Harris\",\"bankAccountOwnerAddress\":\"Oxford Road\",\"bankAccountIBAN\":\"GB29NWBK60161331926819\",\"id\":\"595f5cdbff98226f1b8b4581\"},{\"bankAccountOwnerName\":\"Jhon Harris\",\"bankAccountOwnerAddress\":\"Oxford Road\",\"bankAccountIBAN\":\"GB29NWBK60161331926819\",\"id\":\"595f5f0aff9822781a8b457c\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/beneficiary\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('beneficiary').read().then(function success(response) {$scope.beneficiaries = response;},function error() {});",
        "type": "js"
      }
    ],
    "filename": "./beneficiary.js",
    "groupTitle": "Beneficiary",
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
            "optional": true,
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"id\":\"596f1268ff9822b21b8b4598\", \"walletId\": \"59cb8357ff98225d068b458c\", \"email\":\"foo@bar.com\",\"name\":\"Foo Business 1\",\"category\":\"Foo1Category\",\"distance\":\"1500\",\"promo\": [{\"algorithm\": \"Cashback5\",\"description\": \"Godi del 5% di cashback su ogni pagamento presso questo fornitore!\",\"imageUrl\": \"https://growish-partner.s3.eu-central-1.amazonaws.com/agency-network-assets/promo-placeholder.1508417084.png\",\"placeholderUrl\": \"https://growish-partner.s3.eu-central-1.amazonaws.com/agency-network-assets/promo-placeholder.1508417084.png\"}],\"lat\":\"11.23\",\"lon\":\"12.22\",\"address\":\"Via foo bar, 12, Italy\"},{\"id\":\"596f1268ff98SSb21b8b4598\", \"walletId\": \"59cb8342ff98225d068b456e\", \"email\":\"foo@bar.com\",\"name\":\"Foo Business 2\",\"category\":\"Foo2Category,Foo2SecondCategory\",\"distance\":\"100\",\"promo\":[],\"lat\":\"11.23\",\"lon\":\"12.22\",\"address\":\"Via foo bar, 12, Italy\"}],\"pagination\": {\"page\": 1, \"perPage\": 50, \"total\": 2 }, \"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/business\\/?lat=12&lon=11\",\"method\":\"GET\"}",
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
    "type": "post",
    "url": "/withdrawal/",
    "title": "Cash out",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>The bank account IBAN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beneficiaryId",
            "description": "<p>The bank account owner address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>The bank account owner name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The bank account owner name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pin",
            "description": "<p>The bank account owner name</p>"
          }
        ]
      }
    },
    "name": "CashOut",
    "group": "CashOut",
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
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"withdrawal created\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/withdrawal\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('withdrawal').save({walletId: \"5886138cff9822ae778b458c\", beneficiaryId: \"591ecd6aff98226e648b456e\", amount: \"200\", password: \"123456\", pin: \"2345\"}).then(function success() {},function error(err) {})",
        "type": "js"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "417",
            "description": "<p>Pin request may be turned off or on, if it is off status code is 200 while if it is on status code in 417, make a new request with a valid pin value.</p>"
          }
        ]
      }
    },
    "filename": "./cashOut.js",
    "groupTitle": "CashOut",
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
    "url": "/blog-posts/",
    "title": "Return Blog Posts",
    "name": "blogPosts",
    "group": "List_Wallet",
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
          "content": "{\"code\":200,\"data\":[{\"title\":\"Il galateo del matrimonio civile\",\"description\":\"\\u003Cp\\u003EOggi, vogliamo sfatare una diceria comune, cio\\u00e8 che quello civile, sia un matrimonio \\u0026#8220;di serie B\\u0026#8221;. Molti ne sono davvero convinti purtroppo, ma in realt\\u00e0, non \\u00e8 cos\\u00ec. Anche il matrimonio civile ha le sue regole di bon ton, da seguire. Ecco Il galateo del matrimonio civile.\\u003C\\/p\\u003E\\n\",\"link\":\"https:\\/\\/blog.listanozzeonline.com\\/galateo-del-matrimonio-civile\\/\",\"image\":\"https:\\/\\/blog.listanozzeonline.com\\/wp-content\\/uploads\\/2017\\/12\\/Il-galateo-del-matrimonio-civile-300x143.jpg\"},{\"title\":\"5 consigli per il tuo matrimonio in inverno\",\"description\":\"\\u003Cp\\u003EHai mai pensato di celebrare il tuo matrimonio in inverno? E\\u0026#8217; vero, questa stagione \\u00e8 fredda e le temperature rigide spesso impongono diverse limitazioni. Ma diciamocelo:\\u00a0con i dovuti accorgimenti, l\\u0026#8217;inverno \\u00e8 uno di quei periodi pi\\u00f9 magici e suggestivi\\u00a0per celebrare un matrimonio \\u0026#8220;da fiaba\\u0026#8221;, circondati dall\\u2019incantevole atmosfera\\u00a0che solo questa stagione regala. Qui vi spieghiamo come\\u0026#8230; \\u003C\\/p\\u003E\\n\\u003Cdiv class=\\u0022clear\\u0022\\u003E\\u003C\\/div\\u003E\\n\\u003Cp\\u003E\\u003Ca href=\\u0022https:\\/\\/blog.listanozzeonline.com\\/5-consigli-matrimonio-inverno\\/\\u0022 class=\\u0022gdlr-button with-border excerpt-read-more\\u0022\\u003EContinua a leggere\\u003C\\/a\\u003E\\u003C\\/p\\u003E\\n\",\"link\":\"https:\\/\\/blog.listanozzeonline.com\\/5-consigli-matrimonio-inverno\\/\",\"image\":\"https:\\/\\/blog.listanozzeonline.com\\/wp-content\\/uploads\\/2017\\/10\\/matrimonio-in-inverno-2-300x143.jpg\"},{\"title\":\"I documenti necessari per sposarsi\",\"description\":\"\\u003Cp\\u003EState organizzando il matrimonio? Avete gi\\u00e0 pensato a tutti i documenti necessari per sposarsi? Organizzare un matrimonio non \\u00e8 solo stressante, \\u00e8 anche stimolante e divertente. Contattare la location, allestirla come si \\u00e8 sempre sognato, poi scegliere l\\u0026#8217;abito da sposa\\u0026#8230; Momenti unici e indimenticabili s\\u00ec, ma non dimenticatevi la burocrazia.\\u003C\\/p\\u003E\\n\",\"link\":\"https:\\/\\/blog.listanozzeonline.com\\/documenti-necessari-sposarsi\\/\",\"image\":\"https:\\/\\/blog.listanozzeonline.com\\/wp-content\\/uploads\\/2017\\/10\\/fedi-300x143.jpg\"}],\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/blog-posts\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('blogPosts').read().then(function success(blogPosts) { }, function error() { });",
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
    "url": "/download-ebook/",
    "title": "Download Ebook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user name</p>"
          },
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
            "field": "province",
            "description": "<p>The province of wedding list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weddingDate",
            "description": "<p>The date of wedding in YYYY-MM-GG format</p>"
          }
        ]
      }
    },
    "name": "downloadEbook",
    "group": "List_Wallet",
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
          "content": "{\"code\":200,\"data\":{\"ebookUrl\":\"https:\\/\\/s3.eu-central-1.amazonaws.com\\/growish-partner\\/ebook-nozze.pdf\"},\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/download-ebook\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('downloadEbook').save({ name: \"fooname\", email:\"foo1@email.com\", province: \"MI\", weddingDate: \"2018-12-31\"}).then(function success(data) { }, function error(err) { });",
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
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/list/:id/",
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
    "name": "listWallet",
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
        "content": "gwApi.request('listWallet', 'userId').read().then(function success(listWallet) { }, function error(err) { });",
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
    "url": "/pre-user/",
    "title": "Register pre User info during List Wallet Wizard (wedding list)",
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
            "field": "province",
            "description": "<p>The province of wedding list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weddingDate",
            "description": "<p>The date of wedding in YYYY-MM-GG format</p>"
          }
        ]
      }
    },
    "name": "preUser",
    "group": "List_Wallet",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\": [],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/pre-user\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('preUser').save({ email:\"foo1@email.com\", province: \"MI\", weddingDate: \"2018-12-31\"}).then(function success() { }, function error(err) { });",
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
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/:id/notification/",
    "title": "Get Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":userId",
            "description": "<p>The user unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category can be growish, wedding, scuolapay or nozzepay</p>"
          }
        ]
      }
    },
    "name": "getNotification",
    "group": "Notifications",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"type\":\"success\",\"read\":false,\"message\":\"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \\u0026euro;\",\"category\":\"growish\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"},{\"type\":\"messenger\",\"read\":false,\"message\":\"La tua contribuzione \\u00e8 avvenuta con successo!\",\"category\":\"growish\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/587f3900ff9822b7778b457e\\/notification\\/?category=growish\",\"method\":\"GET\"}",
          "type": "json"
        },
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"type\":\"success\",\"read\":false,\"message\":\"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \\u0026euro;\",\"category\":\"wedding\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"},{\"type\":\"messenger\",\"read\":false,\"message\":\"La tua contribuzione \\u00e8 avvenuta con successo!\",\"category\":\"wedding\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/587f3900ff9822b7778b457e\\/notification\\/?category=wedding\",\"method\":\"GET\"}",
          "type": "json"
        },
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"type\":\"success\",\"read\":false,\"message\":\"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \\u0026euro;\",\"category\":\"scuolapay\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"},{\"type\":\"messenger\",\"read\":false,\"message\":\"La tua contribuzione \\u00e8 avvenuta con successo!\",\"category\":\"scuolapay\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/587f3900ff9822b7778b457e\\/notification\\/?category=scuolapay\",\"method\":\"GET\"}",
          "type": "json"
        },
        {
          "title": "Owner response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"type\":\"success\",\"read\":false,\"message\":\"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \\u0026euro;\",\"category\":\"nozzepay\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"},{\"type\":\"messenger\",\"read\":false,\"message\":\"La tua contribuzione \\u00e8 avvenuta con successo!\",\"category\":\"nozzepay\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/587f3900ff9822b7778b457e\\/notification\\/?category=nozzepay\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.notifications', :userId).read({category: :category}).then(function success(notifications) { }, function error() { });",
        "type": "js"
      }
    ],
    "filename": "./notifications.js",
    "groupTitle": "Notifications",
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
    "url": "/checknoti/:id/",
    "title": "Update notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":userId",
            "description": "<p>The user unique Id</p>"
          }
        ]
      }
    },
    "name": "updateNotifications",
    "group": "Notifications",
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
          "content": "{\"code\":200,\"message\":\"notifica aggiornata con successo\",\"data\":{\"type\":\"success\",\"read\":true,\"message\":\"Hai ricevuto un nuovo versamento. Mario Rossi ha versato 40.00 \\u0026euro;\",\"category\":\"scuolapay\",\"when\":null,\"secondActionText\":null,\"secondActionUrl\":null,\"id\":\"59e8739dff9822ea898b456a\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/checknoti\\/59e8739dff9822ea898b456a\\/\",\"method\":\"PUT\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('notifications', :userId).update().then(function success() { }, function error() { });",
        "type": "js"
      }
    ],
    "filename": "./notifications.js",
    "groupTitle": "Notifications",
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
    "url": "/passwordrecovery/",
    "title": "Password recovery",
    "name": "Restore_Password",
    "group": "Password_recovery",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/passwordrecovery\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('restorePassword').save({email:\"mario.rossi@email.com\"}).then(function success() {},function error(err) {});",
        "type": "js"
      }
    ],
    "filename": "./password-recovery.js",
    "groupTitle": "Password_recovery",
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
    "url": "/check-contribution/:id/",
    "title": "Check Payin Credit Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of the Payin Credit Card</p>"
          }
        ]
      }
    },
    "name": "checkContribution",
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
          "title": "Response example",
          "content": "{\"code\": 200, \"message\": \"OK\", \"data\": [{\"message\": \"La tua contribuzione \\u00e8 avvenuta con successo!\"}], \"pagination\": null, \"uri\": \"https://apidev.growish.com/v1/check-contribution/\", \"method\": \"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('checkContribution', '596f1268ff9822b21b8b4598').read().then(function success(response) { }, function error(err) { });",
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
    "type": "post",
    "url": "/transfer-business/",
    "title": "Growish Payment to a business",
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
    "name": "sendMoneyBusiness",
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
          "content": "{\"code\":200,\"message\":\"Soldi trasferiti con successo\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/transfer-business\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('sendMoneyBusiness').save({ amount:5000,email:\"foo@bar.com\",password:\"password\",walletId: \"53b157b19a6b51c4048b4572\" }).then(function success(response) { }, function error(err) { });",
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
    "type": "post",
    "url": "/transfer/",
    "title": "Payment to a business",
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
    "name": "transferW2P",
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
        "content": "gwApi.request('sendMoney').save({ amount:5000,email:\"foo@bar.com\",password:\"password\",walletId: \"53b157b19a6b51c4048b4572\" }).then(function success(response) { }, function error(err) { });",
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
    "type": "post",
    "url": "/transfer_contribution/",
    "title": "Transfers money from wallet to wallet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payerWalletId",
            "description": "<p>The payer wallet unique Id</p>"
          },
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
            "field": "beneficiaryWalletId",
            "description": "<p>the beneficiary wallet id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the current logged user</p>"
          }
        ]
      }
    },
    "name": "transfer_wallet_to_wallet",
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
        "content": "gwApi.request('transferContribution').save({amount:5000, beneficiaryWalletId: \"53b157b19a6b51c4048a3484\",password:\"password\",payerWalletId: \"53b157b19a6b51c4048b4572\" }).then(function success(response) { }, function error(err) { });",
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
    "type": "put",
    "url": "/list/:list_id/quiz/:id/",
    "title": "Update quiz for list wallet",
    "name": "list_editQuiz",
    "group": "Quiz",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>The state of quiz [0|1]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"data\":{\"walletId\":\"5a212f07ff98225d5e8b457e\",\"state\":1,\"id\":\"5a815f1dff9822080f8b4568\",\"questions\":[{\"title\":\"first question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817660ff982283258b456a\"},{\"title\":\"second question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817668ff98225e088b4568\"},{\"title\":\"third question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a81766fff982286438b456f\"}]},\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/list\\/5a212f07ff98225d5e8b457e\\/quiz\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('list.editQuiz', someListId, quizId).update({state: 1}).then(function success(quiz) { }, function error() { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "url": "/list/:list_id/quiz/",
    "title": "Return quiz for list wallet",
    "name": "list_quiz",
    "group": "Quiz",
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
          "title": "Public response example",
          "content": "{\"code\":200,\"data\":{\"walletId\":\"5a212f07ff98225d5e8b457e\",\"state\":1,\"id\":\"5a815f1dff9822080f8b4568\",\"questions\":[{\"title\":\"first question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817660ff982283258b456a\"},{\"title\":\"second question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817668ff98225e088b4568\"},{\"title\":\"third question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a81766fff982286438b456f\"}]},\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/list\\/5a212f07ff98225d5e8b457e\\/quiz\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('list.quiz',someListId).read().then(function success(quiz) { }, function error() { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "url": "/list/:list_id/quiz-answers/",
    "title": "Send answers for quiz",
    "name": "list_quizAnswers",
    "group": "Quiz",
    "permission": [
      {
        "name": "Owner",
        "title": "Owner access only",
        "description": "<p>Only the author of one of the assets can create/read/modify/delete it, a token from the author is required.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>encoded answers</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Public response example",
          "content": "{\"code\":200,\"data\":[],\"message\":\"Congratulazioni, hai completato il quiz\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/list\\/5a212f07ff98225d5e8b457e\\/quiz-answers\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('list.quizAnswers', someListId).save({answers: \"[{\\\"questionId\\\": \\\"5a817660ff982283258b456a\\\", \\\"answersIds\\\": [1,2]},{\\\"questionId\\\": \\\"5a817668ff98225e088b4568\\\", \\\"answersIds\\\": [1,2,3]},{\\\"questionId\\\": \\\"5a81766fff982286438b456f\\\", \\\"answersIds\\\": [1,2]}]\"}).then(function success(response) { }, function error() { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "url": "/quiz-ranking/:list_id/",
    "title": "Get top three users quiz ranking position",
    "name": "quizRanking",
    "group": "Quiz",
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
          "content": "{\"code\":200,\"data\":[[{\"pos\":1,\"score\":3,\"user\":{\"id\":\"542146de9a6b51c9048b4567\",\"firstName\":\"Lorenzo\",\"lastName\":\"Colombini\",\"email\":\"lorenzo.colombini@growish.com\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/542146de9a6b51c9048b4567\\/image\\/\"}}],[{\"pos\":2,\"score\":2,\"user\":{\"id\":\"542146de9a6b51c9048b4567\",\"firstName\":\"Lorenzo\",\"lastName\":\"Colombini\",\"email\":\"lorenzo.colombini@growish.com\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/542146de9a6b51c9048b4567\\/image\\/\"}},{\"pos\":2,\"score\":2,\"user\":{\"id\":\"542146de9a6b51c9048b4567\",\"firstName\":\"Lorenzo\",\"lastName\":\"Colombini\",\"email\":\"lorenzo.colombini@growish.com\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/542146de9a6b51c9048b4567\\/image\\/\"}}],[{\"pos\":3,\"score\":1,\"user\":{\"id\":\"542146de9a6b51c9048b4567\",\"firstName\":\"Lorenzo\",\"lastName\":\"Colombini\",\"email\":\"lorenzo.colombini@growish.com\",\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/542146de9a6b51c9048b4567\\/image\\/\"}}]],\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/quiz-ranking\\/5a212f07ff98225d5e8b457e\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('quiz.Ranking',someListId).read().then(function success(response) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "type": "delete",
    "url": "/quiz/:quiz_id/question/:id/",
    "title": "Delete question from quiz",
    "name": "quiz_deleteQuestion",
    "group": "Quiz",
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
          "content": "{\"code\":200,\"data\":{\"walletId\":\"5a212f07ff98225d5e8b457e\",\"state\":1,\"id\":\"5a815f1dff9822080f8b4568\",\"questions\":[{\"title\":\"first question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817660ff982283258b456a\"},{\"title\":\"second question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817668ff98225e088b4568\"},{\"title\":\"third question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a81766fff982286438b456f\"}]},\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/quiz\\/5a815f1dff9822080f8b4568\\/question\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('quiz.question', someQuizId, someQuestionId).delete().then(function success(quiz) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "url": "/quiz/:quiz_id/question/",
    "title": "Add new question for quiz",
    "name": "quiz_newQuestion",
    "group": "Quiz",
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
          "content": "{\"code\":200,\"data\":{\"walletId\":\"5a212f07ff98225d5e8b457e\",\"state\":1,\"id\":\"5a815f1dff9822080f8b4568\",\"questions\":[{\"title\":\"first question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817660ff982283258b456a\"},{\"title\":\"second question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817668ff98225e088b4568\"},{\"title\":\"third question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a81766fff982286438b456f\"}]},\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/quiz\\/5a815f1dff9822080f8b4568\\/question\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('quiz.newQuestion').save({title: \"first question\", multipleSelect: 1, answers: \"[{\\\"text\\\": \\\"first answer\\\", \\\"correct\\\": 1},{\\\"text\\\": \\\"second answer\\\", \\\"correct\\\": 1},{\\\"text\\\": \\\"third answer\\\", \\\"correct\\\": 0}]\"}).then(function success(quiz) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "url": "/quiz/:quiz_id/question/:id/",
    "title": "Edit question into quiz",
    "name": "quiz_question",
    "group": "Quiz",
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
          "content": "{\"code\":200,\"data\":{\"walletId\":\"5a212f07ff98225d5e8b457e\",\"state\":1,\"id\":\"5a815f1dff9822080f8b4568\",\"questions\":[{\"title\":\"first question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817660ff982283258b456a\"},{\"title\":\"second question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a817668ff98225e088b4568\"},{\"title\":\"third question\",\"multipleSelect\":1,\"answers\":[{\"id\":1,\"text\":\"first answer\",\"correct\":1},{\"id\":2,\"text\":\"second answer\",\"correct\":1},{\"id\":3,\"text\":\"third answer\",\"correct\":0}],\"id\":\"5a81766fff982286438b456f\"}]},\"message\":\"OK\",\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/quiz\\/5a815f1dff9822080f8b4568\\/question\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('quiz.question', someQuizId, someQuestionId).update({title: \"first question\", multipleSelect: 1, answers: \"[{\\\"text\\\": \\\"first answer\\\", \\\"correct\\\": 1},{\\\"text\\\": \\\"second answer\\\", \\\"correct\\\": 1},{\\\"text\\\": \\\"third answer\\\", \\\"correct\\\": 0}]\"}).then(function success(quiz) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./quiz.js",
    "groupTitle": "Quiz",
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
    "url": "/saas-business/",
    "title": "Saas Business Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>The business activity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>The business company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>The business web site</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "phone",
            "description": "<p>The user or business phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user or business email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message</p>"
          }
        ]
      }
    },
    "name": "saasBusiness",
    "group": "Saas",
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
          "content": "{\"code\":200,\"message\":\"Il formulario di contatto è stato spedito.\",\"data\": [], \"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/saas-business\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('saasBusiness').save({ name: \"foo\", activity: \"footest\", company: \"foocompany\", website: \"https://foocompany.com\", phone: \"3200000000\", email:\"foo1@email.com\", message: \"foo message\"}).then(function success(user) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./saas.js",
    "groupTitle": "Saas",
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
    "type": "post",
    "url": "/saas-partner/",
    "title": "Saas Partner Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>The user phone number</p>"
          }
        ]
      }
    },
    "name": "saasPartner",
    "group": "Saas",
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
          "content": "{\"code\":200,\"message\":\"Il formulario di contatto è stato spedito.\",\"data\": [], \"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/saas-partner\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('saasPartner').save({ name: \"foo\", email:\"foo1@email.com\", phone: \"3200000000\"}).then(function success(user) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./saas.js",
    "groupTitle": "Saas",
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
    "type": "delete",
    "url": "/user/:id/common-fund/",
    "title": "Delete Common fund",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Common found title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Common found description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>Common found school</p>"
          }
        ]
      }
    },
    "name": "deleteCommonFund",
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
          "content": "{\"code\":200,\"message\":\"Cassa comune cancellata con successo\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/5886138cff9822ae778b458c\\/common-fund\\/5886138cff9822ae778b543c\",\"method\":\"DELETE\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.commonFund', 'someUserId').delete({title:\"Emergenze\", description:\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.\", school:\"Scuola Foo\"}).then(function success() { }, function error(err) { });",
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
    "type": "delete",
    "url": "/user/:id/address-book/",
    "title": "Delete a Contact or Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cellphone",
            "description": "<p>The cellphone of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>The school of the contact</p>"
          }
        ]
      }
    },
    "name": "deleteContact",
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
          "content": "{\"code\":200,\"message\":\"Contatto cancellato con successo\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/5886138cff9822ae778b458c\\/address-book\\/5886138cff9822ae778b543c\",\"method\":\"DELETE\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.addressBook', 'someUserId').delete({firstName:\"John\", lastName:\"Smith\" email:\"john.smith@email.com\", cellphone:\"3294822789\", school: \"Scuola Alessi\"}).then(function success() { }, function error(err) { });",
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
    "url": "/user/:id/common-fund/",
    "title": "Update common fund information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Common found title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Common found description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>Common found school</p>"
          }
        ]
      }
    },
    "name": "editCommonFund",
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
          "content": "{\"code\":200,\"message\":\"Edit common fund\",\"data\":{\"title\":\"Emergenze\", \"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.\",\"school\":\"Scuola Foo\"},\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/common-fund\",\"method\":\"PUT\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.commonFund', 'someUserId').update({title:\"Emergenze\", school:\"Scuola Foo\"}).then(function success() { }, function error() { });",
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
    "url": "/user/:id/address-book/",
    "title": "Request Address Book Information",
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
    "name": "getAddressBook",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"id\":\"59d4b3abff98221f758b4571\",\"customData\":{\"fullName\":\"Mario Rossi\",\"email\":\"mario.rossi@morsin.com\",\"privacyRestricted\":0},\"self\":1,\"children\":[{\"id\":\"59d4cd24ff982259748b456d\",\"customData\":{\"fullName\":\"Figlio 1\",\"organizationId\":\"\",\"parentId\":\"59d4aeacff982259748b4568\",\"privacyRestricted\":1},\"self\":0,\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"child\"},{\"id\":\"59d4cd2cff982201758b456a\",\"customData\":{\"fullName\":\"Figlio 2\",\"organizationId\":\"\",\"parentId\":\"59d4aeacff982259748b4568\",\"privacyRestricted\":1},\"self\":0,\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"child\"}],\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"parent\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59d4aeacff982259748b4568\\/address-book\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.addressBook', 'someUserId').read().then(function success(userAddressBook) { }, function error(err) { });",
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
    "url": "/user/:id/common-fund/",
    "title": "Request common fund information",
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
    "name": "getCommonFund",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"title\":\"Emergenze cartoleria\",\"school\":\"Scuola Demo\",\"avaiable\":\"9378\",\"description\":\"Lorem ipsum \",\"statement\":[{\"amount\":\"2400\",\"issuedBy\":\"Gaia Piccardi\",\"operation\":\"cashin\",\"status\":\"done\",\"updateDate\":\"2017-10-05 12:12:19\"},{\"amount\":\"3400\",\"issuedBy\":\"Michela Parodi\",\"operation\":\"cashin\",\"status\":\"done\",\"updateDate\":\"2017-10-05 12:12:19\"}]},\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/common-fund\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.commonFund', 'someUserId').read().then(function success(userCommonFund) { }, function error() { });",
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
    "url": "/user/:id/address-book/",
    "title": "Register new Contact or Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the new contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the new contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the new contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cellphone",
            "description": "<p>The cellphone of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>The school of the contact</p>"
          }
        ]
      }
    },
    "name": "newAddressBook",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"id\":\"59d4b3abff98221f758b4571\",\"customData\":{\"fullName\":\"Mario Rossi\",\"email\":\"mario.rossi@morsin.com\",\"privacyRestricted\":0},\"self\":1,\"children\":[{\"id\":\"59d4cd24ff982259748b456d\",\"customData\":{\"fullName\":\"figlio 1\",\"organizationId\":\"\",\"parentId\":\"59d4aeacff982259748b4568\",\"privacyRestricted\":1},\"self\":0,\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"child\"},{\"id\":\"59d4cd2cff982201758b456a\",\"customData\":{\"fullName\":\"figlio 2\",\"organizationId\":\"\",\"parentId\":\"59d4aeacff982259748b4568\",\"privacyRestricted\":1},\"self\":0,\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"child\"}],\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"parent\"},{\"id\":\"59d4f235ff98220c498b4567\",\"customData\":{\"fullName\":\"Liam Brown\",\"email\":\"liam.brown@email.com\",\"mobile\":\"3288766384\",\"privacyRestricted\":0},\"self\":0,\"children\":[],\"userId\":\"59d4aeacff982259748b4568\",\"type\":\"parent\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59d4aeacff982259748b4568\\/address-book\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.addressBook', 'someUserId').save(firstName:\"John\", lastName:\"Smith\" email:\"john.smith@email.com\", cellphone:\"3294822789\", school: \"Scuola Alessi\" ).then(function success() { }, function error(err) { });",
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
    "url": "/user/:id/common-fund/",
    "title": "Create new common fund information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Common found title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Common found description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>Common found school</p>"
          }
        ]
      }
    },
    "name": "newCommonFund",
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
          "content": "{\"code\":200,\"message\":\"common fund created\",\"data\":{\"title\":\"Emergenze cartoleria\", \"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.\",\"school\":\"Scuola Demo\"},\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/common-fund\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.commonFund', 'someUserId').save({\"title\":\"Emergenze cartoleria\", \"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.\",\"school\":\"Scuola Demo\"}).then(function success() { }, function error() { });",
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
    "url": "/user/:id/credit-card/",
    "title": "Register new Credit Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the card owner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the card owner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cardNumber",
            "description": "<p>credit card number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deadLine",
            "description": "<p>The credit card deadline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cvv",
            "description": "<p>The credit card cvv</p>"
          }
        ]
      }
    },
    "name": "newCreditCard",
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
          "content": "{\"code\":200,\"message\":\"credit card created\",\"data\":{\"firstName\":\"Jhon\",\"lastName\":\"Smith\",\"cardNumber\":\"4556530160159378\",\"deadLine\":\"5/23\",\"cvv\":\"784\"},\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/credit-card\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.creditCard', 'someUserId').save({firstName:\"Jhon\", lastName:\"Smith\", cardNumber:\"4556530160159378\", deadLine: \"5/23\", cvv:\"784\"}).then(function success() { }, function error() { });",
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
            "type": "String",
            "optional": false,
            "field": "referral",
            "description": "<p>The user referral code</p>"
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
        "content": "gwApi.request('newUser').save({ firstName:\"Jhon\",lastName:\"Smith\",email:\"foo1@email.com\",birthday:\"1986-03-19\",canBeContacted:1, marketingEmail:1, referral: \"gktl\" }).then(function success(user) { }, function error(err) { });",
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
    "url": "/user/:id/address-book-share/",
    "title": "Share address book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "recipients",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "contacts",
            "description": ""
          }
        ]
      }
    },
    "name": "shareAddressBook",
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
          "content": "{\"code\":200,\"message\":\"Contatti inviato\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/5886138cff9822ae778b458c\\/address-book-share/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.addressBookShare', 'someUserId').save({recipients:[], contacts: []}).then(function success() { }, function error() { });",
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
    "url": "/user/:id/credit-card/",
    "title": "Edit Credit Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>firstName of the card owner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName of the card owner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cardNumber",
            "description": "<p>credit card number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "deadLine",
            "description": "<p>The credit card deadline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cvv",
            "description": "<p>The credit card cvv</p>"
          }
        ]
      }
    },
    "name": "updateCreditCard",
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
          "content": "{\"code\":200,\"message\":\"Credit Card updated\",\"data\":{\"firstName\":\"Gaya\",\"lastName\":\"Smith\",\"cardNumber\":\"9378\",\"deadLine\":\"5/23\",\"cvv\":\"784\"},\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/credit-card\",\"method\":\"PUT\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.creditCard', 'someUserId').put({firstName:\"Gaya\").then(function success() { }, function error() { });",
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
    "title": "Update a user's password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The user old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeatPassword",
            "description": "<p>The user repeat new password</p>"
          }
        ]
      }
    },
    "name": "updatePassword",
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
          "content": "{\"code\":200,\"message\":\"User data updated\",\"data\":{\"firstName\":\"Jhon2\",\"lastName\":\"Smith\",\"email\":\"jhon.smith@email.com\",\"birthday\":\"1976-08-05 00:00:00\",\"canBeContacted\":1,\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59a6c7c1ff9822dd108b456b\\/image\\/\",\"taxCode\": null,\"lastSeen\":\"2017-10-03 15:16:28\",\"lastSeenMobile\":null,\"id\":\"59a6c7c1ff9822dd108b456b\",\"type\":\"user\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59a6c7c1ff9822dd108b456b\\/\",\"method\":\"PUT\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user', 'someUserId').update({oldPassword:\"test\", password: \"test2\", repeatPassword: \"test2\"}).then(function success(user) { }, function error(err) { });",
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
          "content": "{\"code\":200,\"message\":\"User data updated\",\"data\":{\"firstName\":\"Jhon2\",\"lastName\":\"Smith\",\"email\":\"jhon.smith@email.com\",\"birthday\":\"1976-08-05 00:00:00\",\"canBeContacted\":1,\"imageUrl\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59a6c7c1ff9822dd108b456b\\/image\\/\",\"taxCode\": null,\"lastSeen\":\"2017-10-03 15:16:28\",\"lastSeenMobile\":null,\"id\":\"59a6c7c1ff9822dd108b456b\",\"type\":\"user\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59a6c7c1ff9822dd108b456b\\/\",\"method\":\"PUT\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user', 'someUserId').update({ firstName:\"Jhon2\" }).then(function success(user) { }, function error(err) { });",
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
    "url": "/user-kyc-authentication/",
    "title": "Kyc User Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "requiredFile",
            "description": "<p>required document file into one format (pdf/png/jpg/gif)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "optionalFile",
            "description": "<p>document file into format (pdf/png/jpg/gif)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "occupation",
            "description": "<p>the occupation of user</p>"
          }
        ]
      }
    },
    "name": "userKycAuthentication",
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
          "content": "{\"code\":200,\"message\":\"Le informazioni sono state ricevute e sono in attesa di verifica.\",\"data\":[],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/user-kyc-authentication/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('userKycAuthentication').save({occupation: \"developer\", requiredFile: file1, optionalFile: file2}).then(function success() { }, function error() { });",
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
    "url": "/user/:id/credit-card/",
    "title": "Request Credit Card Information",
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
    "name": "user_creditCard",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":{\"token\": \"Njc0NWRmMzk2ZWVmZGUy77Y2NTA1NGVmOWNkNjQzOGQ21DJlYmFmNQ==\", \"firstName\":\"Jhon\",\"lastName\":\"Smith\",\"cardNumber\":\"9378\",\"deadLine\":\"5/23\",\"cvv\":\"784\"},\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/credit-card\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('user.creditCard', 'someUserId').read().then(function success(userCreditCard) { }, function error() { });",
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
    "url": "/user/:id/wallet/",
    "title": "Request wallets information",
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
    "name": "wallets",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"amount\":0,\"collectedAmount\":0,\"spentAmount\":0,\"optHideParticipants\":0,\"optHideContribution\":1,\"optHideTotal\":0,\"optOnlyPerkCashIn\":0,\"collectedFeeAmount\":0,\"optNoObjective\":1,\"description\":null,\"beneficiaryLabel\":\"Regalo per maestra Maria\",\"reasonLabel\":\"Regali agli insegnanti\",\"preset\":\"wallet_teacher_gift\",\"shortUrl\":\"http:\\/\\/bit.ly\\/2xYrvCf\",\"imageUrl\":null,\"raisingGoalAmount\":1000000,\"contributionLimitDate\":\"2017-11-22 00:00:00\",\"optSuggestedContribution\":0,\"optBlockContributionAmount\":0,\"comment\":[],\"status\":100,\"type\":1,\"creationDate\":\"2017-10-04 13:57:03\",\"optAddProducts\":0,\"allowWithdrawalIn\":0,\"id\":\"59d4cc8fff9822df7f8b4567\",\"alias\":\"wallet\",\"title\":\"Regalo per maestra Maria\",\"contributions\":[],\"availableAmount\":0,\"products\":[],\"perks\":[{\"walletId\":\"59d4cc8fff9822df7f8b4567\",\"title\":\"\",\"description\":\"\",\"amount\":5000,\"available\":null,\"imageId\":null,\"imageUrl\":null,\"id\":\"59d4cc90ff9822df7f8b4569\"}],\"transferStatus\":null,\"userType\":\"owner\"}],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/user\\/59d4aeacff982259748b4568\\/wallet\\/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('wallets', 'someUserId').read().then(function success(userWallets) { }, function error(err) { });",
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
    "url": "/wallet/:id",
    "title": "Request Wallet Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Wallet</p>"
          }
        ]
      }
    },
    "name": "getWallet",
    "group": "Wallet",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"goalAmount\":\"100\",\"imageUrl\":\"\",\"title\":\"Gita a Villa Monza\",\"contributionLimitDate\":\"2017-09-30 00:00:00\",\"description\":\"Lorem ipsum Lorem ipsum Lorem\",\"category\":\"gita\",\"comments\":[{\"fistName\":\"Michela\",\"lastName\":\"Parodi\",\"email\":\"michela.parodi@email.com\",\"comment\":\"Sarà una bellissima giornata\"},{\"fistName\":\"Mario\",\"lastName\":\"Rossi\",\"email\":\"mario.rossi@email.com\",\"comment\":\"Sarà bellissima la villa di Monza\"}],\"perks\":[{\"walletId\":\"59a91a4bff9822482b8b4567\",\"title\":\"Trasporti e Villa\",\"description\":\"Lorem ipsum Lorem ipsum\",\"amount\":\"30\",\"available\":\"10\"},{\"walletId\":\"59a91a4bff9822482b8b4567\",\"title\":\"Villa e merenda\",\"description\":\"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\",\"amount\":\"30\",\"available\":\"10\"}]}],\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/wallet/587f3900ff9822b7778b457e/\",\"method\":\"GET\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('wallet', 'walletId').read().then(function success(wallet) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./wallet.js",
    "groupTitle": "Wallet",
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
    "url": "/wallet/",
    "title": "Create a new Wallet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titleWallet",
            "description": "<p>The wallet title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goalAmount",
            "description": "<p>The wallet goal amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The wallet description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the wallet</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contributionLimitDate",
            "description": "<p>The deadline of the wallet in YYYY-MM-GG format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "perks",
            "description": "<p>The quotes of the wallet</p>"
          }
        ]
      }
    },
    "name": "newWallet",
    "group": "Wallet",
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
          "content": "{\"code\":200,\"message\":\"colletta creata con successo\",\"data\":{\"id\":\"59d4f71aff982269478b4567\"},\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/wallet\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('newWallet').save({ title:\"Gita a Villa Monza\", goalAmount:\"100\", imageUrl\":\"\", description:\"Lorem ipsum Lorem ipsum Lorem\", contributionLimitDate:\"2017-09-30 00:00:00\", category: \"gita\"}).then(function success() { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./wallet.js",
    "groupTitle": "Wallet",
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
    "url": "/wallet/:id",
    "title": "Update Wallet Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titleWallet",
            "description": "<p>The wallet title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goalAmount",
            "description": "<p>The wallet goal amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The wallet description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the wallet</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contributionLimitDate",
            "description": "<p>The deadline of the wallet in YYYY-MM-GG format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "perks",
            "description": "<p>The quotes of the wallet</p>"
          }
        ]
      }
    },
    "name": "updateWallet",
    "group": "Wallet",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[{\"goalAmount\":\"100\",\"imageUrl\":\"\",\"title\":\"Gita al parco di villa Monza\",\"contributionLimitDate\":\"2017-09-30 00:00:00\",\"description\":\"Lorem ipsum Lorem ipsum Lorem\",\"category\":\"gita\",\"perks\":[{\"walletId\":\"59a91a4bff9822482b8b4567\",\"title\":\"Trasporti e Villa\",\"description\":\"Lorem ipsum Lorem ipsum\",\"amount\":\"30\",\"available\":\"10\"},{\"walletId\":\"59a91a4bff9822482b8b4567\",\"title\":\"Villa e merenda\",\"description\":\"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\",\"amount\":\"30\",\"available\":\"10\"}]}],\"pagination\":null,\"uri\":\"https://apidev.growish.com/v1/wallet/587f3900ff9822b7778b457e/\",\"method\":\"put\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('wallet', 'walletId').update({title:\"Gita al parco di villa Monza\"}).then(function success(wallet) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./wallet.js",
    "groupTitle": "Wallet",
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
  },
  {
    "type": "post",
    "url": "/parserexcel/",
    "title": "Import contact from excel files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "name": "parserExcel",
    "group": "parserExcel",
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
          "content": "{\"code\":200,\"message\":\"OK\",\"data\":[[\"Nome\",\"Scuola\",\"email\",\"cellulare\"],[\"Gaia\",\"demo\",\"gg@gg.it\",\"12334566778\"],[\"Lorenzo\",\"test\",\"ll@ll.it\",\"345678902\"],[\"Caterina\",\"foo\",\"cc@cc.it\",\"2334556677\"]],\"pagination\":null,\"uri\":\"https:\\/\\/apidev.growish.com\\/v1\\/parserexcel\\/\",\"method\":\"POST\"}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Angular Growish API Client:",
        "content": "gwApi.request('parseExcel').save(file).then(function success(response) { }, function error(err) { });",
        "type": "js"
      }
    ],
    "filename": "./parser-excel.js",
    "groupTitle": "parserExcel",
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
  }
] });
