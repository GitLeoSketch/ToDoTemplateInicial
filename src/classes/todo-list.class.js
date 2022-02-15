// siempre exprotamos la clase

import { ToDo } from "./todo.class";
import { pendientes } from "../js/componentes";

export class ToDoList {


    constructor(){
        // this.toDos = [];
        this.cargarLocalStorage();
    }

    nuevoToDo(toDo){

            this.toDos.push(toDo);

            this.guardarLocalStorage();
            
    }

    eliminarToDo(id){
        // filter devuelve un arreglo en base a los datos que cumplan con la condicion
      this.toDos =  this.toDos.filter( toDo => id != toDo.id);
      this.guardarLocalStorage()
    }

    marcarCompletado(id){
       for(const toDo of this.toDos){
        //    console.log(id, toDo.id);
           if(toDo.id == id){

            toDo.completado = !toDo.completado;
            this.guardarLocalStorage()
            break;

           }

       }
    }

    eliminarCompletados(){
        // regrea solo los elementos que fueron completados
        this.toDos =  this.toDos.filter( toDo => !toDo.completado);
        this.guardarLocalStorage();
    
           
    }

    obtenerPendientes(){
    // guardar en local storage los pendientes
    let totalPendientes = 0;
    this.toDos.forEach(element => {
            
            if(!element.completado){
                totalPendientes ++;
            }
            return totalPendientes;
        });
        
        localStorage.setItem('pendientes',`${totalPendientes}`);
        

        // console.log({pendientes});
        pendientes.firstChild.innerText = localStorage.getItem('pendientes');

    }
    guardarLocalStorage(){
// en el local storage debemos guardar como string los valores
// toString

// si pasamos objetos o arreglos debemos transformar a JSON el codigo, de la siguiente forma
        localStorage.setItem('toDo',JSON.stringify(this.toDos)  );

        this.obtenerPendientes();
       
    }

    cargarLocalStorage(){
        this.toDos = (localStorage.getItem('toDo'))
        ? JSON.parse(localStorage.getItem('toDo'))
        :[];
 
 // gracias al metodo statico de la clase toDo
//  transformo todos los objetos basicos en intancias de la clase toDo para poder usar metodos o funciones
// de la misma.  en este caso utilizo map, ver mas infgormacion sobre map

// simplificar este codigo en base a argumento recibido
        // this.toDos = this.toDos.map( obj => ToDo.fromJson( obj ) ); 
        // resultado:
        this.toDos = this.toDos.map(ToDo.fromJson);

        this.obtenerPendientes();
        // antes de trabajar con las propiedades del lcoal storage, es importante verificar
        // que dicha propiedad exista

//         if(localStorage.getItem('toDo')){
// // tener cuidado aqui transfromamos toDos en un string y pierde las funcionalidades de arreglos
// // debemos pasar la informacion como un arreglo para ser recuperada
// // usaremos el procedimiento inverso a JSON.stringify que es JSON.parse

//     // para resolver luego,
//     //  lo que devuelve son objetos no isntancias de los toDo creados


//             this.toDos =JSON.parse(localStorage.getItem('toDo')) ;
//             console.log('Cargar Local '+this.toDos);
           
//         }else{
//             this.toDos = [];
        
           
//         }



    }
}