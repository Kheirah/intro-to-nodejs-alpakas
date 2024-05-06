const fs = require("fs");

let count = 0;
count = count + 1;

fs.writeFileSync(
  "hello.txt",
  "Hello from Node.js! The current count value is " + count
);
