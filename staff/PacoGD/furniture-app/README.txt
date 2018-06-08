Unas pistas de lo que debería tener vuestro proyecto a nivel tecnológico:

*Client*
-    rutas (privadas y publicas)
-    session o local storage
-    separado por capas (componentes)
-    comprension de los ciclos de vida de react
-    Control de errores (then – catch)
-    componentes minimos
-    search (si es necesario en la aplicación)
-    panel basico para el CRUD del modelo de bbdd que escojan
-    vistas que rendericen informacion para el usuario
-    sign up – sign in

*Api-client*
-    api utilizando fetch//axios//promise-request
-    Control de errores (then – catch)
-    funcion _baseUrl y _call
-    test con mocha u otro metodo (minimo un test por llamada a la api // cobertura del 30%)

*Server*  
-    Separado por capas { logic -- models -- routes}
-    Rutas
-    Modelos exportables (model.export)
-    Control de usuarios
-    CRUD basico tanto del usuario y otra coleccion dependiendo del contenido del proyecto
-    Control de errores (then – catch)
-    Test en mocha u otro metodo (minimo un test por cada funcion de la logica // cobertura del 30%) (editado)

06/06
IMPORTANT

para hoy deberias ir cerrando la primera version de server (incluyendo api-routes, logic, y data) con las primeras tres llamadas a api (como minimo, el maximo lo poneis vosotros, pero sin perderos en el tiempo, que el viernes tiene que verse el circuito completo)
mañana deberias estar ya con el api client listo para empezar a usarlo dentro del logic de client, y luego usar este logic en react
venga, buen revuelco en el barro y hasta tomorrow ,)