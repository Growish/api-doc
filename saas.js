/**
 * @api{post} /saas-partner/ Saas Partner Contact
 * @apiParam {String} name The user name
 * @apiParam {String} email The user email
 * @apiParam {Number} phone The user phone number
 * @apiName saasPartner
 * @apiGroup Saas
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"message":"Il formulario di contatto è stato spedito.","data": [], "pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/saas-partner\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('saasPartner').save({ name: "foo", email:"foo1@email.com", phone: "3200000000"}).then(function success(user) { }, function error(err) { });
 */

/**
 * @api{post} /saas-business/ Saas Business Contact
 * @apiParam {String} name The user name
 * @apiParam {String} activity The business activity
 * @apiParam {String} [company] The business company
 * @apiParam {String} [website] The business web site
 * @apiParam {Number} [phone] The user or business phone number
 * @apiParam {String} email The user or business email
 * @apiParam {String} message The message
 * @apiName saasBusiness
 * @apiGroup Saas
 * @apiPermission Public
 * @apiSuccessExample Public response example
 * {"code":200,"message":"Il formulario di contatto è stato spedito.","data": [], "pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/saas-business\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('saasBusiness').save({ name: "foo", activity: "footest", company: "foocompany", website: "https://foocompany.com", phone: "3200000000", email:"foo1@email.com", message: "foo message"}).then(function success(user) { }, function error(err) { });
 */