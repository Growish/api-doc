/**
 * @api{get} /user/:id/ Request User Information
 * @apiParam {String} id User unique Id
 * @apiName getUser
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":{"firstName":"Jhon","lastName":"Smith","email":"foo@email.com","birthday":"1986-03-19 00:00:00","canBeContacted":1,"imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/53b157b19a6b51c4048b4572\/image\/","taxCode":"","lastSeen":"2017-08-30 14:30:19","lastSeenMobile":null,"id":"53b157b19a6b51c4048b4572","type":"user"},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/53b157b19a6b51c4048b4572\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user', 'someUserId').read().then(function success(user) { }, function error(err) { });
 */

/**
 * @api{put} /user/:id Update an existing User
 * @apiParam {String} [firstName] The user first name
 * @apiParam {String} [lastName] The user last name
 * @apiParam {String} [birthday] The user date of birth in YYYY-MM-GG format
 * @apiName updateUser
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"user created","data":{"token":"MGY5ODNFFjZkMmU3YTQ12GMyM2ExYTA3Zjg2YmY5MjRiZTBhNTgxMg==","id":"59a6c7c1ff9822dd108b456b","firstName":"Jhon2","lastName":"Smith","birthday":"1976-08-05 00:00:00","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/59a6c7c1ff9822dd108b456b\/image\/","taxCode":null},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user').update({ firstName:"Jhon2" }).then(function success(user) { }, function error(err) { });
 */

/**
 * @api{post} /user/ Register a new User
 * @apiParam {String} email The user email
 * @apiParam {String} firstName The user first name
 * @apiParam {String} lastName The user last name
 * @apiParam {String} birthday The user date of birth in YYYY-MM-GG format
 * @apiParam {Number} canBeContacted Legacy field, must be set to 1
 * @apiParam {Number} marketingEmail Legacy field, must be set to 1
 * @apiName newUser
 * @apiGroup User
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"message":"user created","data":{"token":"MGY5ODNFFjZkMmU3YTQ12GMyM2ExYTA3Zjg2YmY5MjRiZTBhNTgxMg==","id":"59a6c7c1ff9822dd108b456b","firstName":"Jhon","lastName":"Smith","birthday":"1976-08-05 00:00:00","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/59a6c7c1ff9822dd108b456b\/image\/","taxCode":null},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('newUser').save({ firstName:"Jhon",lastName:"Smith",email:"foo1@email.com",birthday:"1986-03-19",canBeContacted:1, marketingEmail:1 }).then(function success(user) { }, function error(err) { });
 */

/**
 * @api{get} /user/:userId/list/:listId/ Request User's Lists
 * @apiParam {String} userId User unique Id
 * @apiParam {String} listId List unique Id
 * @apiName getUserLists
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"id":"596f1268ff9822b21b8b4598","brideName":"Her","groomName":"Him","weddingDate":"2017-07-31 00:00:00","amount":0},{"id":"59130875ff98228f178b4570","brideName":"Another","groomName":"Foo","weddingDate":"2017-05-24 00:00:00","amount":0}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/53b157b19a6b51c4048b4572\/list\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.list', 'someUserId', 'someListId').read().then(function success(userLists) { }, function error(err) { });
 */