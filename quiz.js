/**
 * @api{get} /list/:list_id/quiz/ Return quiz for list wallet
 * @apiName list.quiz
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiSuccessExample Public response example
 {"code":200,"data":{"walletId":"5a212f07ff98225d5e8b457e","state":1,"id":"5a815f1dff9822080f8b4568","questions":[{"title":"first question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817660ff982283258b456a"},{"title":"second question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817668ff98225e088b4568"},{"title":"third question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a81766fff982286438b456f"}]},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/list\/5a212f07ff98225d5e8b457e\/quiz\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('list.quiz',someListId).read().then(function success(quiz) { }, function error() { });
 */

/**
 * @api{put} /list/:list_id/quiz/:id/ Update quiz for list wallet
 * @apiName list.editQuiz
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiParam {Number} state The state of quiz [0|1]
 * @apiSuccessExample Public response example
 {"code":200,"data":{"walletId":"5a212f07ff98225d5e8b457e","state":1,"id":"5a815f1dff9822080f8b4568","questions":[{"title":"first question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817660ff982283258b456a"},{"title":"second question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817668ff98225e088b4568"},{"title":"third question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a81766fff982286438b456f"}]},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/list\/5a212f07ff98225d5e8b457e\/quiz\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('list.editQuiz', someListId, quizId).update({state: 1}).then(function success(quiz) { }, function error() { });
 */

/**
 * @api{post} /list/:list_id/quiz-answers/ Send answers for quiz
 * @apiName list.quizAnswers
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiParam {String} json encoded answers
 * @apiSuccessExample Public response example
 {"code":200,"data":[],"message":"Congratulazioni, hai completato il quiz","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/list\/5a212f07ff98225d5e8b457e\/quiz-answers\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('list.quizAnswers', someListId).save({answers: "[{\"questionId\": \"5a817660ff982283258b456a\", \"answersIds\": [1,2]},{\"questionId\": \"5a817668ff98225e088b4568\", \"answersIds\": [1,2,3]},{\"questionId\": \"5a81766fff982286438b456f\", \"answersIds\": [1,2]}]"}).then(function success(response) { }, function error() { });
 */

/**
 * @api{post} /quiz/:quiz_id/question/ Add new question for quiz
 * @apiName quiz.newQuestion
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 {"code":200,"data":{"walletId":"5a212f07ff98225d5e8b457e","state":1,"id":"5a815f1dff9822080f8b4568","questions":[{"title":"first question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817660ff982283258b456a"},{"title":"second question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817668ff98225e088b4568"},{"title":"third question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a81766fff982286438b456f"}]},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/quiz\/5a815f1dff9822080f8b4568\/question\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('quiz.newQuestion').save({title: "first question", multipleSelect: 1, answers: "[{\"text\": \"first answer\", \"correct\": 1},{\"text\": \"second answer\", \"correct\": 1},{\"text\": \"third answer\", \"correct\": 0}]"}).then(function success(quiz) { }, function error(err) { });
 */

/**
 * @api{put} /quiz/:quiz_id/question/:id/ Edit question into quiz
 * @apiName quiz.question
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 {"code":200,"data":{"walletId":"5a212f07ff98225d5e8b457e","state":1,"id":"5a815f1dff9822080f8b4568","questions":[{"title":"first question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817660ff982283258b456a"},{"title":"second question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817668ff98225e088b4568"},{"title":"third question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a81766fff982286438b456f"}]},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/quiz\/5a815f1dff9822080f8b4568\/question\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('quiz.question', someQuizId, someQuestionId).update({title: "first question", multipleSelect: 1, answers: "[{\"text\": \"first answer\", \"correct\": 1},{\"text\": \"second answer\", \"correct\": 1},{\"text\": \"third answer\", \"correct\": 0}]"}).then(function success(quiz) { }, function error(err) { });
 */

/**
 * @api{delete} /quiz/:quiz_id/question/:id/ Delete question from quiz
 * @apiName quiz.deleteQuestion
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 {"code":200,"data":{"walletId":"5a212f07ff98225d5e8b457e","state":1,"id":"5a815f1dff9822080f8b4568","questions":[{"title":"first question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817660ff982283258b456a"},{"title":"second question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a817668ff98225e088b4568"},{"title":"third question","multipleSelect":1,"answers":[{"id":1,"text":"first answer","correct":1},{"id":2,"text":"second answer","correct":1},{"id":3,"text":"third answer","correct":0}],"id":"5a81766fff982286438b456f"}]},"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/quiz\/5a815f1dff9822080f8b4568\/question\/","method":"POST"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('quiz.question', someQuizId, someQuestionId).delete().then(function success(quiz) { }, function error(err) { });
 */

/**
 * @api{get} /quiz-ranking/:list_id/ Get top three users quiz ranking position
 * @apiName quizRanking
 * @apiGroup Quiz
 * @apiPermission Owner
 * @apiSuccessExample Owner response example
 {"code":200,"data":[[{"pos":1,"score":3,"user":{"id":"542146de9a6b51c9048b4567","firstName":"Lorenzo","lastName":"Colombini","email":"lorenzo.colombini@growish.com","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/542146de9a6b51c9048b4567\/image\/"}}],[{"pos":2,"score":2,"user":{"id":"542146de9a6b51c9048b4567","firstName":"Lorenzo","lastName":"Colombini","email":"lorenzo.colombini@growish.com","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/542146de9a6b51c9048b4567\/image\/"}},{"pos":2,"score":2,"user":{"id":"542146de9a6b51c9048b4567","firstName":"Lorenzo","lastName":"Colombini","email":"lorenzo.colombini@growish.com","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/542146de9a6b51c9048b4567\/image\/"}}],[{"pos":3,"score":1,"user":{"id":"542146de9a6b51c9048b4567","firstName":"Lorenzo","lastName":"Colombini","email":"lorenzo.colombini@growish.com","imageUrl":"https:\/\/apidev.growish.com\/v1\/user\/542146de9a6b51c9048b4567\/image\/"}}]],"message":"OK","pagination":null,"uri":"https:\/\/apidev.growish.com\/v1\/quiz-ranking\/5a212f07ff98225d5e8b457e\/","method":"GET"}
 * @apiVersion 1.0.0
 * @apiUse AppKey
 * @apiUse Token
 * @apiExample {js} Angular Growish API Client:
 * gwApi.request('quiz.Ranking',someListId).read().then(function success(response) { }, function error(err) { });
 */