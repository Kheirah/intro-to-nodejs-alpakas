const fs = require("fs");

const content = fs.readFileSync("hello.txt", { encoding: "utf8" });
console.log(content);
