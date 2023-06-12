import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoApp.style.css";

const TodoApp = () => {
  const [todo, setTodo] = useState({ name: "", id: "", done: false });
  const [todoList, setTodoList] = useState([]);

  const onChangeHandler = (e) => {
    setTodo({ name: e.target.value, id: uuidv4() });
  };

  const onCheckedHandler = (id) => {
    const doneTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodoList(doneTodos);
  };

  const onClickHandler = () => {
    setTodoList([...todoList, todo]);
    setTodo({ name: "", id: "", done: false });
  };

  const deleteHandler = (el) => {
    const filteredList = todoList.filter((todo) => todo.id !== el.id);
    setTodoList(filteredList);
  };

  return (
    <div>
      <input
        value={todo.name}
        placeholder="please add todo"
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>ADD</button>
      {todoList.map((el, index) => {
        return (
          <div
            key={index}
            id={el.id}
            className={`single_todo ${el.done && "line-through"}`}
          >
            <p>{el.name}</p>
            <button onClick={() => deleteHandler(el)}>X</button>
            <input
              checked={el.done}
              type="checkbox"
              onChange={() => onCheckedHandler(el.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoApp;
