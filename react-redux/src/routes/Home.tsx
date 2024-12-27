import {ChangeEvent, useState} from "react";
import React from "react";

export default function Home() {
    const [text, setText] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText('');
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}