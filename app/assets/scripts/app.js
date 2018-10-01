const Person = require('./modules/person');

let john = new Person("John Doe", "Blue");
let Jane = new Person("John Smith", "Purple");

john.greet();
Jane.greet();
