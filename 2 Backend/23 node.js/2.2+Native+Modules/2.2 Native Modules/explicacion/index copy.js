const fs = require('fs');

fs.writeFile("message.txt", "¡Hola desde Node.js!", (err) => {
  if (err) { 
    throw err;
  }
  console.log("the file has been saved!");
});

//se ejecuta abirendo la terminal
//poscicionandose en la ruta de la carpeta
//una vez en la ruta escribir en la terminal 
// node index.js
//creara el .txt con la info quese le pidio
//esto seejcuta en el ndex.js y en el archivo de texto qeuse cree




//const fs = require("fs") //aqui se esta poniendo el sistema dearchivos de node
                        // abreviado es fs "Sistema de Archivos"

                        //metodo "fs. writeFile", por que esto nosva a permitir tomar un mensaje que dice entradas de usuario o de algun bit de nuestro sitio web 
                        // y somos capaces de escribir en un archivo para ser guardado en el rdenador

//sintaxis de fs.writeFile
//fs.writeFile(ruta, contenido, opciones, callback)

//ruta: Ruta del archivo (ej. 'archivo.txt')
//contenido: Lo que quieres escribir (texto o buffer)
//opciones (opcional): codificación, permisos, etc.
//callback: Función que se ejecuta al terminar (si hubo error o no)


// //✅ Ejemplo básico:


// const fs = require('fs');

// fs.writeFile('hola.txt', '¡Hola desde Node.js!', (err) => {
//   if (err) {
//     console.error('Error al escribir el archivo:', err);
//   } else {
//     console.log('Archivo creado exitosamente');
//   }
// });

