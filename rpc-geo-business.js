/**
 * @api{get} /business/?lat=:lat&lon=:lon&radius=:radius&network=:network&filterByName=:name&filterByType&filterByCategory=:category Request Business in a area
 * @apiParam {Number} lat Latitude.
 * @apiParam {Number} lon Longitude.
 * @apiParam {Number} [radius] Radius in meters around lat, lon center (Max 50000).
 * @apiParam {String} network A string with comma separated value indicating the name of the networks the business belongs to.
 * @apiParam {String} [filterByName] Complete or partial name of the business.
 * @apiParam {String} [filterByType] Accepted values: "physical" and "online".
 * @apiParam {String} [filterByCategory] A string with comma separated value indicating the name of the categories to search.
 * @apiName getBusinessByArea
 * @apiGroup Business
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data":[{"id":"596f1268ff9822b21b8b4598","walletId":"59cb8357ff98225d068b458c","email":"foo@bar.com","name":"Foo Business 1","category":"Foo1Category","distance":"1500","promo":[{"algorithm":"Cashback5","description":"Godi del 5% di cashback su ogni pagamento presso questo fornitore!","imageUrl":"https://growish-partner.s3.eu-central-1.amazonaws.com/agency-network-assets/promo-placeholder.1508417084.png","placeholderUrl":"https://growish-partner.s3.eu-central-1.amazonaws.com/agency-network-assets/promo-placeholder.1508417084.png"}],"lat":"11.23","lon":"12.22","address":"Via foo bar, 12, Italy","paymentEnabled":true},{"id":"596f1268ff98SSb21b8b4598","walletId":"59cb8342ff98225d068b456e","email":"foo@bar.com","name":"Foo Business 2","category":"Foo2Category,Foo2SecondCategory","distance":"100","promo":[],"lat":"11.23","lon":"12.22","address":"Via foo bar, 12, Italy","paymentEnabled":false}],"pagination":{"page":1,"perPage":50,"total":2},"uri":"https://apidev.growish.com/v1/business/?lat=12&lon=11","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('business').read({lat: 45, lon: 9, radius: 1000, network: "netexample"}).then(function success(business) { }, function error(err) { });
 */

/**
 * @api{get} /business-coupon/ Get all User buyed Business Coupon
 * @apiName userBusinessCoupon
 * @apiGroup Business
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"data":[{"description":"Foo Description","validFrom":"2018-01-01 00:00:00","validTo":"2018-12-31 23:59:59","imageUrl":"https:\/\/viaplacehold.it\/300x150?text=coupon","id":"5aa15bcbff9822173f8b456b","buyed":true}],"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/business-coupon\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('userBusinessCoupon').read().then(function success(businessCoupon) { }, function error(err) { });
 */

/**
 * @api{get} /business-coupon/:id/ Get Business Coupon available with information of Owner Coupon already buyed
 * @apiParam {String} :id The id of the business
 * @apiName businessCoupon
 * @apiGroup Business
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"data":[{"description":"Foo Description","validFrom":"2018-01-01 00:00:00","validTo":"2018-12-31 23:59:59","imageUrl":"https:\/\/viaplacehold.it\/300x150?text=coupon","id":"5aa15bcbff9822173f8b456b","buyed":true}],"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/business-coupon\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('businessCoupon').read().then(function success(businessCoupon) { }, function error(err) { });
 */

/**
 * @api{post} /buy-business-coupon/ Buy a Business Coupon
 * @apiParam {String} businessCouponId The Business Coupon Id
 * @apiName buyBusinessCoupon
 * @apiGroup Business
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"data":{"description":"Foo Description","validFrom":"2018-01-01 00:00:00","validTo":"2018-12-31 23:59:59","imageUrl":"https:\/\/viaplacehold.it\/300x150?text=coupon","id":"5aa15bcbff9822173f8b456b"},"message":"Operazione completata con successo","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/buy-business-coupon\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('buyBusinessCoupon').save({ businessCouponId: "5aa15bcbff9822173f8b456b" }).then(function success(response) { }, function error(err) { });
 */