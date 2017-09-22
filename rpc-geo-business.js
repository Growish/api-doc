/**
 * @api{get} /business/?lat=:lat&lon=:lon&radius=:radius&network=nozzepay&filterByName=:name&filterByType Request Business in a area
 * @apiParam {Number} lat Latitude.
 * @apiParam {Number} lon Longitude.
 * @apiParam {Number} radius Radius in meters around lat, lon center (Max 50000).
 * @apiParam {String} [filterByName] Complete or partial name of the business.
 * @apiParam {String} [filterByType] Accepted values: "physical" and "online".
 * @apiParam {String} network A string indicating the name of the network the business belongs to.
 * @apiName getBusinessByArea
 * @apiGroup Business
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data":[{"id":"596f1268ff9822b21b8b4598","email":"foo@bar.com","name":"Foo Business 1","category":"Foo1Category","distance":"1.5Km","promo":"","lat":"11.23","lon":"12.22","address":"Via foo bar, 12, Italy"},{"id":"596f1268ff98SSb21b8b4598","email":"foo@bar.com","name":"Foo Business 2","category":"Foo2Category","distance":"100m","promo":"","lat":"11.23","lon":"12.22","address":"Via foo bar, 12, Italy"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/business\/?lat=12&lon=11","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('business').read({lat: 12, lon: 11}).then(function success(business) { }, function error(err) { });
 */