Como iniciar el proyecto 

Ejemplo 

 

        1 crear la carpeta 

        2 crear archivo index.js 

        3 iniciar NPM  

            Ubicarse en la ruta del proyecto 

            En la terminal escribir npm init –y 

        4 instalar Express 

            En la terminal escribir npm i express 

            (i es de install) 

            Entrar al archivo package.json  

            Escribir "type": "module", 

        Guardar el archivo 	 

        5 crear la aplicación en index.js 

                        Ejemplo 

                        import express from "express"; 

                        const app = express(); 

                        const port = 3000; 

                        app.listen(port, () => { 

                        console.log(`Server running on port ${port}.`); 

                        }); 


 6 crear el servidor 

	Escribir en la terminal node index .js 

	El resultado se debería ver algo asi 