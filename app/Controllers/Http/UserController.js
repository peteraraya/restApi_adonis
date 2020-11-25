'use strict'

//Importamos el modelo

const User = use('App/Models/User');

class UserController {

    async login ({ request, auth }){
        // solicitanmos email y password
        const { userName, email, password } = request.all();
        const token = await auth.attempt(email,password);
        return token;
    }




    // Crear un usuario --> debe ser asincrono 
    async store({ request }) {
        const { userName, email, password } = request.all(); // de todo lo que erercibe debe buscarnos estas variables
        console.log(email, password)
        // con estos datos creamos el usuario
        const user = await User.create({
            userName: email, //para escribir menos
            email,
            password
        });
        return this.login(...arguments); // devolvemos el usuario
    }
}

module.exports = UserController
