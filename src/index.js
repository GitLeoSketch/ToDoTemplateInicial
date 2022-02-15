import './styles.css';
// por defecto buscara las importaciones en el index
import { ToDo, ToDoList } from './classes';
import { crearToDoHtml } from './js/componentes';

export const toDoList = new ToDoList();



        // toDoList.toDos.forEach( toDo => crearToDoHtml( toDo ));

        // si se envia un unico argumento a una funcion para todos los parametros se puede reducir 
        // el codigo de la siguiente manera

        // se quitaria el argumento enviado
        // solo se usa cuando se recibe un unico argumento en la funcion
toDoList.toDos.forEach( crearToDoHtml );

// console.log(toDoList.toDos);
// prueba de llamado a metodos del objeto
// toDoList.toDos[1].imprimirClase();
            // const tarea = new ToDo('Aprender JS');

            // tarea.completado= true;
            // toDoList.nuevoToDo(tarea);

            // console.log(tarea);

            // console.table(toDoList.toDos);

            // crearToDoHtml(tarea);


            // localstorage

            // solo se puede acceder a un local storage por dominio  en paginas

            // agregar item a storage local (persiste)
                // localStorage.setItem('mi-key', 'Leonardo');
            // agregar item al session storage (informacion volatil)
                // sessionStorage.setItem('mi-key', 'abc123');
            // set time out para que ejecute instruccion en determinado tiempo

                // setTimeout(()=>{
                // // Borrara este valor
                // localStorage.removeItem('mi-key');

                // },1500);//segundo y medio

            // tambien se puede eliminar un valor de esta forma, y persistir la existencia de la key
            // localStorage.setItem('mi-key', '');


 

            