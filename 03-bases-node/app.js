const fs = require('fs'); // propio de node
// const fs = require('express'); // paquete que se instala
// const fs = require('./'); // de archivos que creamos

let base = 4;
let data = '';

for (let i = 1; i <= 10; i++) {
  data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`The file ${base} has been saved!`);
});