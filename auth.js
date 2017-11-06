/**
 * @api{post} /auth/ Login
 * @apiName authorization
 * @apiGroup Authorization
 * @apiPermission Public
 * @apiParam {String} email The user Email.
 * @apiParam {String} password The user Password.
 * @apiParam {String} accessToken <a href="#api-Authorization-accessToken">The accessToken</a>
 * @apiSuccessExample Public response example
 * {"code":200,"message":"OK","data":{"token":"Njc0NWRmMzk2ZWVmZGUy77Y2NTA1NGVmOWNkNjQzOGQ21DJlYmFmNQ==","id":"53b157b19a6b51c4048b4572","firstName":"Jhon","lastName":"Smith","birthday":"1986-03-19 00:00:00","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/53b157b19a6b51c4048b4572\/image\/","taxCode":""},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/auth\/","method":"POST"}
 * @apiUse AppKey
 * @apiVersion 1.0.0
 * @apiExample {js} Angular Growish API Client:
 * gwApi.authenticate('foo@bar.com', '12345678').then(function success(user) { }, function error(err) { });
 * @apiError 403 Invalid credentials.
 */

/**
 * @api{delete} /auth/ Logout
 * @apiName logout
 * @apiGroup Authorization
 * @apiPermission Owner
 * @apiSuccessExample
 * {"code":200,"message":"OK","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/auth\/","method":"DELETE"}
 * @apiUse AppKey
 * @apiVersion 1.0.0
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('logout').delete().then(function success(user) { }, function error(err) { });
 */

/**
 * @api{get} /access-token/:id/ Access Token
 * @apiParam {String} userId The user id
 * @apiName accessToken
 * @apiGroup Authorization
 * @apiDescription It's a temporary token that you use to authorize the user in another app.
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":{"accessToken":"YjFiMGYwYmRlZWFhOTJlYjY5ODAyZjgyZTYxZDYzNDhkMTUyZTg5Ng=="},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/access-token\/587f3900ff9822b7778b457e\/","method":"GET"}
 * @apiUse AppKey
 * @apiVersion 1.0.0
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('accessToken', 'userId').read().then(function success(){},function error(){})
 */
