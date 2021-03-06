'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// En nuestra apu nunca vamos a puntar  a nuestra dirección directa
// Route.get('/', () => {
//   return { greeting: 'Hola mundo' }
// })

// Crear usuario, 
// parametros : 1 ruta, 
// Route.post('users/register',()=>{
//   return { mensaje:'Hola acabas de registrar un usuario'}
// })

// Adonis nos permite agrupar rutas, utilizamos también prefijos
Route.group(() => {
  
  // Llamamos al controlador
  Route.post('users/register' ,'UserController.store');
  Route.post('users/login'    ,'UserController.login');
  Route.get('proyectos'       ,'ProyectoController.index').middleware('auth');
  Route.post('proyectos'       ,'ProyectoController.create').middleware('auth');
  
}).prefix('api/v1/');


// Route.group(() => {
//   // Llamamos al contreolador
//   Route.post('users/register','UserController.store');
//   Route.post('users/login','UserController.login');
// }).prefix('api/v2/');