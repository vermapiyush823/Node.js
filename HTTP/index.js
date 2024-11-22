const http = require("http");
const fs = require("fs");

// fs.writeFileSync("source.txt", "Hello how are you");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("Welcome to Index page");
//   } else if (req.url == "/duplicate") {
//     fs.copyFile("source.txt", "duplicate.txt", (err) => {
//       if (err) {
//         res.write("Nahi hua");
//       }
//     });
//     res.write("Ho gya");

//     res.end();
//   } else {
//     res.end("invalid request of the user");
//   }
// });

// server.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

// const server = http.createServer((req,res)=>{
// })

// server.listen(3000,"Listening on port 3000")

const isprimeNumber = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const writableStream = fs.createWriteStream("sample.txt");

for (let i = 1; i <= 10000; i++) {
  if (isprimeNumber(i)) {
    writableStream.write(i + "\n");
  }
}
writableStream.end(() => {
  console.log("Completed");
});
