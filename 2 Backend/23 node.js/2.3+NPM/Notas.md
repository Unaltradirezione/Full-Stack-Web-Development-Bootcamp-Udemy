en el archivo

package.json 

viene de la sigueitne manera

{
  "name": "learning-npm",
  "version": "1.0.0",
  "description": "estoy aprendiendo sobre npm",
  "license": "ISC",
  "author": "victor",
  "type": "module",  
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "sillyname": "^0.1.0"
  }
}

    se cambio 
        "type": "commonjs",  
    
    POR
         "type": "module",  


para utilizar la interfs moderna para JavaScript

es decir
ECMAScript Modules (esta desde la versión 12 de node)
Es el sistema moderno de módulos en JavaScript
