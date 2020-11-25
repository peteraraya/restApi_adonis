'use strict'
const Proyecto = use('App/Models/Proyecto');

class ProyectoController {
   // metodo index
   async index( { auth } ){
        const user = await auth.getUser();
        // console.log(user.id);
        return await user.proyectos().fetch();
        // return {
        //     mensaje: 'Hola estamos en el index de prooyectos!!! '
        // }
    }

    // metodo create
    async create({ auth, request }) {
        const user = await auth.getUser(); // usuario tomado desde el token
        const { nombre } = request.all(); // tomamos el nombre de todo lo que esta enviando al servidor
        // llamado a nuestro modelo de proyecto
        const proyecto = new Proyecto();
        
        proyecto.fill({ // llenar
            nombre
        });

        await user.proyectos().save(proyecto);

        return proyecto;

    }



}
module.exports = ProyectoController
