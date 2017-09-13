const $ = require("jquery"); // loading jquery.min.js
const data = require("./data");
const math = require("./math");

console.log(math.add(10, 98));
console.log(math.subtract(1, 98));
console.log(math.multiply(2, 9));
console.log(math.divide(10, 2.5));

// similar to doing this
/*const data = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};*/

const hello = () => console.log("hello redwood from webpack!");

hello();

console.log(data.whichSideOfTheForce);

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray")
;
