import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";
import SearchPanel from "./searchPanel";
import TodoList from "./todoList";
import AddTodo from "./addTodo";
import { storageTodos } from "../redux/reducers/reducerTodo";

const Root = () => {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.reducerTodo.todos);
  useEffect(() => {
    dispatch(storageTodos(JSON.parse(localStorage.getItem("todo"))));
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="app">
      <div className="jumbotron">
        <Header />
        <SearchPanel />
        {todos.length === 0 ? 
        <div className={'card border-dark mb-3 statusTodo'}>Here should be your todo : )</div>
         :<TodoList />}
        <AddTodo />
      </div>
    </div>
  );
};

export default Root;
