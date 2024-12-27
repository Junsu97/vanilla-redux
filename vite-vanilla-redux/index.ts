import {legacy_createStore as createStore} from 'redux';

const ADD = "ADD";
const MINUS = "MINUS";

interface AddAction {
    type: "ADD";
    payload: number;
}

interface MinusAction {
    type: "MINUS";
    payload: number;
}

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = '0';

// description : createStore는 Store를 create 하고 store는 data를 저장하는 곳

const countModifier = (count: number = 0, action: AddAction | MinusAction) => {
    switch (action.type) {
        case ADD:
            return count + action.payload;
        case MINUS:
            return count - action.payload;
        default :
            return count;
    }
};


const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState().toString();
    console.log(countStore.getState());
}
countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: ADD, payload: 1});
}

const handleMinus = () => {
    countStore.dispatch({type: MINUS, payload: 1});
}
add.addEventListener("click", () => {
    handleAdd();
});
minus.addEventListener("click", () => {
    handleMinus();
});

