"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data; //use this interface to find errors even before running the code.
    var id = todo.id, title = todo.title, completed = todo.completed;
    console.log("\n        The Todo with ID: " + id + "\n        Has a title of : " + title + "\n        finished: " + completed + "\n    ");
});
