import {createStore} from 'redux';

interface Todo {
    text? : string;
    id: string;
}

interface AddTodoAction {
    type: "ADD_TODO";
    text?: string;
    id: string;
}

interface DeleteTodoAction {
    type: "DELETE_TODO";
    id: string;
}

const ADD = "ADD_TODO";
const DELETE = "DELETE_TODO";

export const addTodo = (text: string) => {
    return {
        type: ADD,
        text: text,
        id: Date.now().toString()
    }
}


export const deleteTodo = (id: string) => {
    return {
        type: DELETE,
        id: id,
    }
}

const reducer = (state : Todo[] = [], action: AddTodoAction | DeleteTodoAction): Todo[] => {
    switch (action.type) {
        case ADD :
            return [{text: action.text, id: action.id}, ...state];
        case DELETE:
            return state.filter((toDo: Todo) => toDo.id !== action.id);
        default:
            return state;
    }
}
const store = createStore(reducer);


export default store;