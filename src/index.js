const $ = require("jquery"); // loading jquery.min.js

const hello = () => console.log("hello redwood from webpack!");

hello();

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray")
;
