import {legacy_createStore as createStore} from 'redux'

interface AddTodoAction {
    type: "ADD_TODO";
    text? : string;
    id: string;
}

interface DeleteTodoAction {
    type: "DELETE_TODO";
    text? : string;
    id: string;
}

const ADD = "ADD_TODO";
const DELETE = "DELETE_TODO";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const addTodo = (text: string, id : string) : AddTodoAction => {
    return {type: ADD, text: text, id:id}
}
const deleteTodo = (id: string): DeleteTodoAction => {
    return {type: DELETE, id:id};
}

const reducer = (state = [], action: AddTodoAction | DeleteTodoAction) => {
    switch (action.type) {
        case ADD:
            return [{text: action.text, id: action.id}, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id!== action.id);
        default:
            return state;
    }
}

const dispatchAddTodo = (text : string) => {
    const id = Date.now().toString();
    console.log(id);
    store.dispatch(addTodo(text, id))
}

const dispatchDeleteTodo = (e) => {
    const id = e.target.parentNode.id;
    console.log(id);
    store.dispatch(deleteTodo(id));
}

const onChange = () => {
    console.log(store.getState());
}

const store = createStore(reducer);
store.subscribe(onChange)

const paintTodos = () => {
    const toDos = store.getState();
    ul.innerHTML = '';
    toDos.forEach(todo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = 'DELETE';
        btn.addEventListener("click",  dispatchDeleteTodo)

        li.id = todo.id;
        li.innerText = todo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}
store.subscribe(paintTodos);


// const createTodo = (todo : string) => {
//     const li = document.createElement("li");
//     li.innerText = todo;
//     ul.appendChild(li);
// }

const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const todo = input.value;
    input.value = "";
    // createTodo(todo);
    dispatchAddTodo(todo);
}

form.addEventListener("submit", onSubmit);



