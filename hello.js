process.argv.forEach((arg, index) => {
  if (arg === "switch") {
    //change to another branch
  } else if (arg === "pull") {
    //
  }
});

/* 
import db from "mongodb";

db.connect("secret-login-name", "F3(32ymv)gd-ß203")
*/

console.log(process.env.DB_PASSWORD);
console.log(process.env.OPEN_AI);
