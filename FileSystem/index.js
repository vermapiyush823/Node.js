const fs = require("fs");
const EventEmitter = require("events");

// Synchronous File handling
// fs.writeFileSync("sample.txt", "Hello ji");
// fs.appendFileSync("sample.txt", "kya haal hai?");
// fs.renameSync("sample.txt", "renamed.txt");
// fs.renameSync("renamed.txt", "sample.txt");

// Asynchronous File handling
// fs.writeFile("sample.txt", "\n Asyncronous hai ab", () => {
//   console.log("async");
// });
// fs.readFile("sample.txt", "utf-8", (error, data) => {
//   console.log(data);
// });
// console.log("file");

// Events
// const event = new EventEmitter();
// event.on("click", () => {
//   console.log("It got clicked");
// });

// event.emit("click");

const obj = {
  name: "Piyush",
  age: 20,
  gender: "Male",
};

const jsonObj = JSON.stringify(obj);

fs.writeFileSync("sample.txt", jsonObj);

const newObj = fs.readFileSync("sample.txt", "utf8");

console.log(JSON.parse(newObj));
