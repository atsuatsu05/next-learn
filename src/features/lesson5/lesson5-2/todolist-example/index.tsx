"use client";
import React, { useState } from "react";

export const TodoListExample: React.FC = () => {
    const [contentVal, setContentVal] = useState("");
    const [id, setId] = useState(0);
    const [todoList, setTodoList] = useState<{ id: number; content: string }[]>(
        [],
    );

    const addTodo = () => {
        const newTodo = {
            id: id,
            content: contentVal,
        };
        setTodoList((todoList) => [...todoList, newTodo]);
        setId((id) => id + 1);
    };
    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    };

    return (
        <>
            <input
                type="text"
                onChange={(e) => setContentVal(e.target.value)}
            />
            <button onClick={addTodo}>追加</button>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id} data-id={item.id}>
                        {item.content}
                        <button onClick={() => deleteTodo(item.id)}>
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
