const fs = require("fs");

fs.writeFile("message.txt", "¡Hola desde Node.js!", (err) => {
  if (err) throw err;
  console.log("the file has been saved!");
}); 



//sepone en cometnario para no ejecutar lo anterior y viceversa

// fs.readFile("Hello from Victor!.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
