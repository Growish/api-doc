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
 * {"code":200,"message":"User data updated","data":{"firstName":"Jhon2","lastName":"Smith","email":"jhon.smith@email.com","birthday":"1976-08-05 00:00:00","canBeContacted":1,"imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/59a6c7c1ff9822dd108b456b\/image\/","taxCode": null,"lastSeen":"2017-10-03 15:16:28","lastSeenMobile":null,"id":"59a6c7c1ff9822dd108b456b","type":"user"},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/59a6c7c1ff9822dd108b456b\/","method":"PUT"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user', 'someUserId').update({ firstName:"Jhon2" }).then(function success(user) { }, function error(err) { });
 */


/**
 * @api{put} /user/:id Update a user's password
 * @apiParam {String} oldPassword The user old password
 * @apiParam {String} password The user new password
 * @apiParam {String} repeatPassword The user repeat new password
 * @apiName updatePassword
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"User data updated","data":{"firstName":"Jhon2","lastName":"Smith","email":"jhon.smith@email.com","birthday":"1976-08-05 00:00:00","canBeContacted":1,"imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/59a6c7c1ff9822dd108b456b\/image\/","taxCode": null,"lastSeen":"2017-10-03 15:16:28","lastSeenMobile":null,"id":"59a6c7c1ff9822dd108b456b","type":"user"},"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/59a6c7c1ff9822dd108b456b\/","method":"PUT"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user', 'someUserId').update({oldPassword:"test", password: "test2", repeatPassword: "test2"}).then(function success(user) { }, function error(err) { });
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


/**
 * @api{get} /user/:id/wallet/ Request wallets information
 * @apiParam {String} id User unique Id
 * @apiName wallets
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"amount":0,"collectedAmount":0,"spentAmount":0,"optHideParticipants":0,"optHideContribution":1,"optHideTotal":0,"optOnlyPerkCashIn":0,"collectedFeeAmount":0,"optNoObjective":1,"description":null,"beneficiaryLabel":"Regalo per maestra Maria","reasonLabel":"Regali agli insegnanti","preset":"wallet_teacher_gift","shortUrl":"http:\/\/bit.ly\/2xYrvCf","imageUrl":null,"raisingGoalAmount":1000000,"contributionLimitDate":"2017-11-22 00:00:00","optSuggestedContribution":0,"optBlockContributionAmount":0,"comment":[],"status":100,"type":1,"creationDate":"2017-10-04 13:57:03","optAddProducts":0,"allowWithdrawalIn":0,"id":"59d4cc8fff9822df7f8b4567","alias":"wallet","title":"Regalo per maestra Maria","contributions":[],"availableAmount":0,"products":[],"perks":[{"walletId":"59d4cc8fff9822df7f8b4567","title":"","description":"","amount":5000,"available":null,"imageId":null,"imageUrl":null,"id":"59d4cc90ff9822df7f8b4569"}],"transferStatus":null,"userType":"owner"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/59d4aeacff982259748b4568\/wallet\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('wallets', 'someUserId').read().then(function success(userWallets) { }, function error(err) { });
 */


/**
 * @api{get} /user/:id/address-book/ Request Address Book Information
 * @apiParam {String} id User unique Id
 * @apiName getAddressBook
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"id":"59d4b3abff98221f758b4571","customData":{"fullName":"Mario Rossi","email":"mario.rossi@morsin.com","privacyRestricted":0},"self":1,"children":[{"id":"59d4cd24ff982259748b456d","customData":{"fullName":"Figlio 1","organizationId":"","parentId":"59d4aeacff982259748b4568","privacyRestricted":1},"self":0,"userId":"59d4aeacff982259748b4568","type":"child"},{"id":"59d4cd2cff982201758b456a","customData":{"fullName":"Figlio 2","organizationId":"","parentId":"59d4aeacff982259748b4568","privacyRestricted":1},"self":0,"userId":"59d4aeacff982259748b4568","type":"child"}],"userId":"59d4aeacff982259748b4568","type":"parent"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/59d4aeacff982259748b4568\/address-book\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.addressBook', 'someUserId').read().then(function success(userAddressBook) { }, function error(err) { });
 */


/**
 * @api{post} /user/:id/address-book/ Register new Contact or Contacts
 * @apiParam {String} firstName firstName of the new contact
 * @apiParam {String} lastName lastName of the new contact
 * @apiParam {String} email The email of the new contact
 * @apiParam {String} [cellphone] The cellphone of the contact
 * @apiParam {String} [school] The school of the contact
 * @apiName  newAddressBook
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":[{"id":"59d4b3abff98221f758b4571","customData":{"fullName":"Mario Rossi","email":"mario.rossi@morsin.com","privacyRestricted":0},"self":1,"children":[{"id":"59d4cd24ff982259748b456d","customData":{"fullName":"figlio 1","organizationId":"","parentId":"59d4aeacff982259748b4568","privacyRestricted":1},"self":0,"userId":"59d4aeacff982259748b4568","type":"child"},{"id":"59d4cd2cff982201758b456a","customData":{"fullName":"figlio 2","organizationId":"","parentId":"59d4aeacff982259748b4568","privacyRestricted":1},"self":0,"userId":"59d4aeacff982259748b4568","type":"child"}],"userId":"59d4aeacff982259748b4568","type":"parent"},{"id":"59d4f235ff98220c498b4567","customData":{"fullName":"Liam Brown","email":"liam.brown@email.com","mobile":"3288766384","privacyRestricted":0},"self":0,"children":[],"userId":"59d4aeacff982259748b4568","type":"parent"}],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/59d4aeacff982259748b4568\/address-book\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.addressBook', 'someUserId').save(firstName:"John", lastName:"Smith" email:"john.smith@email.com", cellphone:"3294822789", school: "Scuola Alessi" ).then(function success() { }, function error(err) { });
 */


/**
 * @api{delete} /user/:id/address-book/ Delete a Contact or Contacts
 * @apiParam {String} firstName firstName of the contact
 * @apiParam {String} lastName lastName of the contact
 * @apiParam {String} email The email of the contact
 * @apiParam {String} [cellphone] The cellphone of the contact
 * @apiParam {String} [school] The school of the contact
 * @apiName deleteContact
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Contatto cancellato con successo","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/5886138cff9822ae778b458c\/address-book\/5886138cff9822ae778b543c","method":"DELETE"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.addressBook', 'someUserId').delete({firstName:"John", lastName:"Smith" email:"john.smith@email.com", cellphone:"3294822789", school: "Scuola Alessi"}).then(function success() { }, function error(err) { });
 */


/**
 * @api{get} /user/:id/credit-card/ Request Credit Card Information
 * @apiParam {String} id User unique Id
 * @apiName user.creditCard
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":{"token": "Njc0NWRmMzk2ZWVmZGUy77Y2NTA1NGVmOWNkNjQzOGQ21DJlYmFmNQ==", "firstName":"Jhon","lastName":"Smith","cardNumber":"9378","deadLine":"5/23","cvv":"784"},"pagination":null,"uri":"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/credit-card","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.creditCard', 'someUserId').read().then(function success(userCreditCard) { }, function error() { });
 */

/**
 * @api{post} /user/:id/credit-card/ Register new Credit Card
 * @apiParam {String} firstName firstName of the card owner
 * @apiParam {String} lastName lastName of the card owner
 * @apiParam {String} cardNumber credit card number
 * @apiParam {String} deadLine The credit card deadline
 * @apiParam {String} cvv The credit card cvv
 * @apiName newCreditCard
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"credit card created","data":{"firstName":"Jhon","lastName":"Smith","cardNumber":"4556530160159378","deadLine":"5/23","cvv":"784"},"pagination":null,"uri":"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/credit-card","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.creditCard', 'someUserId').save({firstName:"Jhon", lastName:"Smith", cardNumber:"4556530160159378", deadLine: "5/23", cvv:"784"}).then(function success() { }, function error() { });
 */

/**
 * @api{put} /user/:id/credit-card/ Edit Credit Card
 * @apiParam {String} [firstName] firstName of the card owner
 * @apiParam {String} [lastName] lastName of the card owner
 * @apiParam {String} [cardNumber] credit card number
 * @apiParam {String} [deadLine] The credit card deadline
 * @apiParam {String} [cvv] The credit card cvv
 * @apiName updateCreditCard
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Credit Card updated","data":{"firstName":"Gaya","lastName":"Smith","cardNumber":"9378","deadLine":"5/23","cvv":"784"},"pagination":null,"uri":"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/credit-card","method":"PUT"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.creditCard', 'someUserId').put({firstName:"Gaya").then(function success() { }, function error() { });
 */

/**
 * @api{get} /user/:id/common-fund/ Request common fund information
 * @apiParam {String} id User unique Id
 * @apiName getCommonFund
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"OK","data":{"title":"Emergenze cartoleria","school":"Scuola Demo","avaiable":"9378","description":"Lorem ipsum ","statement":[{"amount":"2400","issuedBy":"Gaia Piccardi","operation":"cashin","status":"done","updateDate":"2017-10-05 12:12:19"},{"amount":"3400","issuedBy":"Michela Parodi","operation":"cashin","status":"done","updateDate":"2017-10-05 12:12:19"}]},"pagination":null,"uri":"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/common-fund","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.commonFund', 'someUserId').read().then(function success(userCommonFund) { }, function error() { });
 */

/**
 * @api{post} /user/:id/common-fund/ Create new common fund information
 * @apiParam {String} title Common found title
 * @apiParam {String} description Common found description
 * @apiParam {String} [school] Common found school
 * @apiName newCommonFund
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"common fund created","data":{"title":"Emergenze cartoleria", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.","school":"Scuola Demo"},"pagination":null,"uri":"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/common-fund","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.commonFund', 'someUserId').save({"title":"Emergenze cartoleria", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.","school":"Scuola Demo"}).then(function success() { }, function error() { });
 */

/**
 * @api{put} /user/:id/common-fund/ Update common fund information
 * @apiParam {String} title Common found title
 * @apiParam {String} description Common found description
 * @apiParam {String} [school] Common found school
 * @apiName editCommonFund
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Edit common fund","data":{"title":"Emergenze", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.","school":"Scuola Foo"},"pagination":null,"uri":"https://apidev.growish.com/v1/user/53b157b19a6b51c4048b4572/common-fund","method":"PUT"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.commonFund', 'someUserId').update({title:"Emergenze", school:"Scuola Foo"}).then(function success() { }, function error() { });
 */


/**
 * @api{delete} /user/:id/common-fund/ Delete Common fund
 * @apiParam {String} title Common found title
 * @apiParam {String} description Common found description
 * @apiParam {String} [school] Common found school
 * @apiName deleteCommonFund
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Cassa comune cancellata con successo","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/5886138cff9822ae778b458c\/common-fund\/5886138cff9822ae778b543c","method":"DELETE"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.commonFund', 'someUserId').delete({title:"Emergenze", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pellentesque arcu vel varius.", school:"Scuola Foo"}).then(function success() { }, function error(err) { });
 */

/**
 * @api{post} /user/:id/address-book-share/ Share address book
 * @apiParam {String[]} recipients
 * @apiParam {String[]} contacts
 * @apiName shareAddressBook
 * @apiGroup User
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 * {"code":200,"message":"Contatti inviato","data":[],"pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/user\/5886138cff9822ae778b458c\/address-book-share/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('user.addressBookShare', 'someUserId').save({recipients:[], contacts: []}).then(function success() { }, function error() { });
 */
