import readDatabase from "./full_server/utils.js";

readDatabase("database.csv")
  .then((result) => {
    console.log(result);
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After!");
