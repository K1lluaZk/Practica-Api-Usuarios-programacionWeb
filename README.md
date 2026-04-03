## Mi Proyecto de Administrador de Usuarios

Este es un proyecto sencillo de Backend donde construí una aplicación para guardar, ver, editar y borrar usuarios. Lo hice usando Node.js y el framework Express.

## ¿Cómo funciona?

El proyecto se divide en dos partes backend y frontend, el backend esta hecho con API que responde peticiones para crear usuario, editarlo, eliminarlo y mostrarlos todos, este proyecto usa node y express, y para conectar el backend con frontend, utilize ejs para añadir una interfaz para que el backend también tenga una interfaz pero que funciona con fecth y la API backend.


## Lo que mi aplicación puede hacer:

•	Guardar usuarios: Registra nombre, correo y edad. Tiene validaciones para que no aceptes edades negativas o correos mal escritos.

•	Base de Datos local: No necesité instalar una base de datos pesada; todo se guarda en un archivo de texto (JSON), así que los datos no se borran al apagar la computadora.


•	Edición rápida: Si te equivocas en un nombre, puedes darle al botón de editar y los datos suben al formulario para corregirlos.


Ejecucion Get: Funcion para obtener todos los usuarios

Ejecucion Get/id: Para obtener a un usuario especifico por id

Ejecucion Post: Para crear un usuario
 
Ejecucion put: para editar un usuario creado anteriormente

Ejecucion Delete: Para eliminar un usuario creado anteriormente
 

## Explicacion de ejecucion:

1. Ver la lista (GET /users)
Esta es la función de lectura. Cuando entras a la página, el servidor abre el archivo users.json, lee todo lo que hay dentro y se lo pasa a la vista (EJS) para que tú veas las tarjetitas de los usuarios. En Postman, simplemente te devuelve el texto plano para que confirmes que los datos están ahí.

2. Registrar a alguien (POST /users)
Esta es la función de escritura. El servidor recibe los datos que escribiste en el formulario. Antes de anotar nada, revisa las reglas: "¿Tiene nombre?", "¿El correo es válido?", "¿La edad es mayor a 0?". Si todo está bien, le asigna un ID único (usando la hora exacta en milisegundos) y lo guarda al final del archivo.

3. Editar un registro (PUT /users/:id)
Esta función es de actualización. Cuando le das a "Editar", el servidor busca en el archivo el ID específico que seleccionaste. Una vez que lo encuentra, borra la información vieja y escribe la nueva encima. Es como borrar con lápiz y escribir con lapicero para que el cambio sea permanente.

4. Borrar un usuario (DELETE /users/:id)
Esta es la función de limpieza. El servidor recibe el ID del usuario que quieres eliminar. Lo que hace internamente no es "borrar" un pedazo del archivo, sino que crea una lista nueva donde mete a todos los usuarios menos al que quieres eliminar, y luego guarda esa lista nueva sobre la anterior.


Link de repo: K1lluaZk/Practica-Api-Usuarios-programacionWeb
