import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";

const TodoList = () => {
  const filteredTodo = useSelector((s) => s.reducerTodo.status);
  const todoArray = useSelector((s) => s.reducerTodo.todos);
  const search = useSelector((s) => s.reducerTodo.searchTodo);
  return (
    <ul className="list-group">
      {todoArray
        .filter((todo) => {
          switch (filteredTodo) {
            case "active": {
              return todo.isActive && !todo.isDeleted;
            }
            case "done": {
              return todo.isDone && !todo.isActive;
            }
            case "recently": {
              return todo.isDeleted && !todo.isActive || todo.isDeleted && !todo.isActive && todo.isDone || todo.isDeleted && todo.isActive && todo.isDone;
             }
            default:
              return todo && !todo.isDeleted;
          }
        })
        .filter((todo) => todo.todoName.includes(search))
        .map((el, idx) => (
          <Todo todoObj={el} key={el.id} name={el.todoName} idx={idx}/>
        ))}
    </ul>
  );
};

export default TodoList;
