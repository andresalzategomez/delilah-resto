DELILAH RESTÓ

#Objetivo:
Crear el backend para un sistema de pedidos online para un restaurante.

#Acciones User:
- Registrar Usuario
- Iniciar Sesión
- Crear Órdenes de pedido
- Listar las Órdenes
- Mostrar el catálogo de comidas
----------------------------------------------------------------------------------------------------------

#Acciones Admin:
- Listar Plato de comida
- Agregar Plato de comida
- Eliminar Plato de comida
- Actualizar Plato de comida
- Obtener todas las Órdenes
- Eliminar Órdenes
- Actualizar estado de Órdenes
- Crear Órdenes
- Actualizar rol de Usuario
- Agregar un nuevo Usuario
- Eliminar Usuarios
- Listar todos los Usuarios
----------------------------------------------------------------------------------------------------------

1. Clonar el proyecto desde tu consola 

copia y pega esta línea de comando:

___
git clone https://github.com/andresalzategomez/delilah-resto.git
___

----------------------------------------------------------------------------------------------------------

2. Instalar dependencia 

copia y pega esta línea de comando:

___
npm i
___

----------------------------------------------------------------------------------------------------------

3. Crear Base de Datos

Al clonar el proyecto hay un archivo llamado DBScript.sql ahí están 
todas las instrucciones para la creación de las tablas que debes 
crear para poder iniciar el servidor con la base de datos. 
También se encuentran la creación de las FOREIGN KEY para 
hacer la relación entre las tablas.

----------------------------------------------------------------------------------------------------------

4. Configurar archivo ".env" 

Debes crear un archivo .env para guardar las variables de entorno (en el proyecto tienes un archivo llamado .envTemplate para que puedas guiarte):

- TOKEN_SECRET
- EXPIRES

Debe estar escrito tal cual como se muestra en este documento.

- TOKEN_SECRET (es el token que se necesita para generar y decodificar 
el token de cada usuario y así poder hacer las diferentes acciones, 
recuerda que este token debe estar en una variable de entorno y el string debe estar oculto)

- EXPIRES (es el tiempo de validez que tendrá el token 
del usuario para hacer operaciones).

----------------------------------------------------------------------------------------------------------

5. Inicia el servidor 

Tienes varias opciones para iniciar el servidor. Desde tu terminal o editor de código(en la consola) y estando en la carpeta delilah-resto puedes introducir cualquiera de estos comandos:

___
node app.js
nodemon app.js
npm start
___

----------------------------------------------------------------------------------------------------------

6. Puedes ir a swagger copiar y pegar el contenido del archivo YAML para entender mejor el funcionamiento de la API

----------------------------------------------------------------------------------------------------------

7. EDPOINT 

#API Desing:

| Metodo  | Enpoint                | Body                                                     | Header  | Descripcion                        |
|---------|------------------------|----------------------------------------------------------|---------|------------------------------------|
| USERS   |                        |                                                          |         |                                    |
|         |                        |                                                          |         |                                    |
| POST    | /v1/api/auth/register  |{nombre_user, email, phone, address, contrasena, id_role} |         | Registra un usuario nuevo          |
| POST    | /v1/api/auth/login     |{email, contrasena}	                                      |         | Inicio de sesión del usuario       |
| GET     | /v1/api/users          |                                                          | {TOKEN} | Obtiene todos los usuarios (Admin) |
| POST    | /v1/api/users          |{nombre_user, email, phone, address, contrasena, id_role} | {TOKEN} | Crear un nuevo usuario (Admin)     |
| GET     | /v1/api/users/:userId  |                                                          | {TOKEN} | Obtiene usuario por su ID (Admin)  |
| PUT     | /v1/api/users/:userId  |{id_role}                                                 | {TOKEN} | Actualiza rol del usuario (Admin)  |
| DELETE  | /v1/api/users/:userId  |{mealsID} (por parámetro)                                 | {TOKEN} | Elimina Usuario (Admin)            |
|         |                        |                                                          |         |                                    |
| MEALS   |                        |                                                          |         |                                    |
|         |                        |                                                          |         |                                    |
| POST    | /v1/api/meals          |{nombre_meal, precio, img}                                | {TOKEN} | Crea un plato (Admin)              |
| GET     | /v1/api/meals          |                                                          |         | Devuelve todos los platos          |
| GET     | /v1/api/meals/:mealsId |                                                          |         | Devuelve un plato según su ID      |
| PUT     | /v1/api/meals/:mealsId |{nombre_meal, precio, img}                                | {TOKEN} | Actualiza un plato (Admin)         |
| DELETE  | /v1/api/meals/:mealsId |{mealsID} (por parámetro)                                 | {TOKEN} | Elimina un plato (Admin)           |
|         |                        |                                                          |         |                                    |
| ORDERS  |                        |                                                          |         |                                    |
|         |                        |                                                          |         |                                    |
| POST    | /v1/api/orders         |{id_user, id_meal, id_forma_pago, id_status}              | {TOKEN} | Crea una nueva orden               |
| GET     | /v1/api/orders         |                                                          | {TOKEN} | Obtiene todas las órdenes (Admin)  |
| GET     | /v1/api/orders/user    |                                                          | {TOKEN} | Obtiene las órdener del usuario    |
| PUT     | /v1/api/orders/:orderId|{orderId} (por parámetro)                                 | {TOKEN} | Actualiza status orden (Admin)     |
| DELETE  | /v1/api/orders/:orderId|{orderId} (por parámetro)                                 | {TOKEN} | Elimina la orden (Admin)           |

