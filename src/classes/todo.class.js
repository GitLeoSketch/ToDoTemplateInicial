
// esta clace sera utilizada fuera de este archivo por lo que habra que exprotarla con export

import { toDoList } from "..";

export class ToDo {

    // creo una funsion estatica para usar como constructor en el caso de pasar
    // un archivo Json
    // se pasa como parametro un objeto, en este caso lo muestro desestructurado
    static fromJson({ tarea , id, completado, creado }){
        const tempToDo = new ToDo( tarea );

        tempToDo.id =id;
        tempToDo.completado = completado;
        tempToDo.creado = creado;

        return tempToDo;

    }

    constructor(tarea){

        this.tarea = tarea;

        this.id = new Date().getTime();// manejaremos el numero dado como un id

        this.completado = false;

        this.creado = new Date();
    }
// metodo para probar el uso del objeto desde las listas
// imprime el objeto mismo
    imprimirClase(){

      console.log(`${this.tarea} - ${this.id}`)  ;

    }
}