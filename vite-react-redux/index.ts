import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (count: number = 0) => {
    return count;
};

const countStore = createStore(countModifier);

console.log(countStore)

