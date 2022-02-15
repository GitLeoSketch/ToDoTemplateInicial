import {ToDo} from '../classes/todo.class';
import {toDoList} from '../index.js'
// referencias al html

const divTodoList = document.querySelector('.todo-list');
const txtToDo = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
export const pendientes = document.querySelector('.todo-count');

export const crearToDoHtml = (toDo)=>{

    const htmlToDo = `
    <li class="${ (toDo.completado)?'completed' : '' }" data-id="${toDo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (toDo.completado)?'checked' : '' }>
            <label>${toDo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML= htmlToDo;
// en vez de insertar nuestro div creado hacemos un append del primer hijo
    // divTodoList.append( div );

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

// Eventos
// keyup cuando se suelta una tecla

txtToDo.addEventListener('keyup', (event)=>{

    // console.log(event);
    // if(event.key === "Enter"){
    //     console.log("Enter");
    // }
     if(event.keyCode === 13 && txtToDo.value.length > 0){
        //  creo nuevo tarea ToDO
        const nuevoToDo = new ToDo(txtToDo.value);

    //    agrego esa tarea a la lista de tareas que importe previamente
        
        toDoList.nuevoToDo(nuevoToDo);

        // console.table(toDoList.toDos);

        // borro luego de guardar
        txtToDo.value= "";

        // creo elemento en el html

        crearToDoHtml(nuevoToDo);
    }

});

divTodoList.addEventListener('click',(event)=>{

    // console.log('click');
    // console.log(event);
    // local name nos dice exactamente que elemento se manejo
    // console.log(event.target.localName);
    // target es el objeto al qeu se dio click
    // console.log(event.target);
// forma que encontre de tomar el elemento li completo
    // console.log(event.target.offsetParent);
    // forma del profesor
    // console.log(event.target.parentElement.parentElement);
    // recuperar datos a variables

// en este evento controlo donde se hace clic sobre la lista y puedo trabajr en base a ello

    const nombreElemento = event.target.localName;    //input, label, button
    const toDoElemento = event.target.offsetParent;
    const toDoId = toDoElemento.getAttribute('data-id');

    // console.log(toDoId);

    if(nombreElemento.includes('input')){
        toDoList.marcarCompletado(toDoId);
        // si existe la quita y si no existe la agrega con toggle
        toDoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        // borrar elementos
        toDoList.eliminarToDo(toDoId);
        // se remueve del html el elemento
        divTodoList.removeChild(toDoElemento);
    }

    // console.table(toDoList.toDos);


    // clear-completed
  
});


btnBorrarCompletados.addEventListener('click',(event)=>{

    // console.log(toDoList.toDos);
    toDoList.eliminarCompletados();
    // console.log(toDoList.toDos);
    // necesito hacer referencia a los hijos para borrar desde el ultimo
    // hasta el primero
    // for recorrido decreciente
    for(let i = divTodoList.children.length -1; i>=0;i--){

        const elemento = divTodoList.children[i];
        // forma que enconte
// elemento.getAttribute('class').includes('completed')

        // mas eficiente la del profesor
        if (elemento.classList.contains('completed')){

            divTodoList.removeChild(elemento);

        }
        
    

    }

});


ulFiltros.addEventListener('click',(event)=>{
    // .text texto dentro del target

    const filtro = event.target.text;
    // console.log(filtro);
// si filtro esta vacio o undefined no hace nada
    if(!filtro){return;}
    // console.log(anchorFiltros);
    anchorFiltros.forEach(element => element.classList.remove('selected'));
// agrego clase selected a la opcion que selecciono.
event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        // console.log(elemento);
// quito la clase oculta para ver los elementos
        elemento.classList.remove('hidden');
        // verifico si esta como completado el li
        const completado = elemento.classList.contains('completed');
       
        // switch para evaluar el caso
        switch ( filtro) {
            case 'Pendientes':
                if (completado){
                    elemento.classList.add('hidden');
                    
                    
                }
                break;
            case 'Completados':
                    if (!completado){
                        elemento.classList.add('hidden');
                    }
                    break;
        }
    }

    

});
