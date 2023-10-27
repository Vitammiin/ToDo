import { useState } from 'react';
import React from 'react';
import css from './ToDo.module.css';
const ToDo = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const todoInputVul = event => {
    setInput(event.target.value);
    console.log(input);
  };
  //
  const addTask = event => {
    event.preventDefault();
    setTodo(prevState => [input, ...prevState]);
  };

  const deleteTask = event => {};

  return (
    <div>
      <h2>Today</h2>

      <form onSubmit={addTask}>
        <input type="text" onChange={todoInputVul} value={input} />
        <button type="submit">Add</button>
      </form>
      <div className={css.allTask}>
        <ul className={css.ulTask}>
          {todo.map((tod, index) => (
            <li className={css.task} key={index}>
              <p className={css.taskP}>{tod}</p>

              <button className={css.buton}>Delete</button>
              <button className={css.make}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
