import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodos, doneTodos, importantTodos, setEditTodo, storageTodos} from "../redux/reducers/reducerTodo";

const Todo = ({ name, todoObj, idx }) => {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.reducerTodo.todos);
  const status = useSelector((s) => s.reducerTodo.status);
  const editTodo = useSelector((s) => s.reducerTodo.editTodo);

  const editHandler = (e) => dispatch(setEditTodo(e.target.value))
  const openEditForm = () => {
    Array.from(document.getElementsByClassName('edit-form')).map((el, elIdx) => {
      return idx === elIdx ? el.classList.add('active') : el
    })
  }
  const saveEditTodoHandler = (e) => {
    e.preventDefault();
    dispatch(setEditTodo(e.target.children[0].value));
    if (editTodo){
      dispatch(storageTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, todoName: editTodo} : todo)))
    }
    e.target.classList.remove('active');
  }
  const deleteHandler = () => {
    dispatch(
      deleteTodos(
        todos.map((todo) =>
          todo.id === todoObj.id
            ? { ...todo, isDeleted: !todo.isDeleted, isActive: !todo.isActive }
            : todo
        )
      )
    );
  };
  const doneHandler = () => {
    dispatch(
      doneTodos(
        todos.map((todo) =>
          todo.id === todoObj.id
            ? { ...todo, isActive: !todo.isActive, isDone: !todo.isDone }
            : todo
        )
      )
    );
  };
  const importantHandler = () => {
    dispatch(
      importantTodos(
        todos.map((todo) =>
          todo.id === todoObj.id
            ? { ...todo, isImportant: !todo.isImportant, }
            : todo
        )
      )
    );
  };
  
  return (
    
    <li className="list-group-item">
      <p
        className={`todo-name ${
          !todoObj.isActive && todoObj.isDone ? "done" : ""
        } ${todoObj.isImportant ? "important" : ""}`}
      >
        {name}
      </p>
      <form className='edit-form' onSubmit={saveEditTodoHandler}>
        <input type='text' defaultValue={name} className='form-control' onChange={editHandler} required/>
        <button type='submit' className={'btn btn-success saveBtn'}>Save</button>

      </form>
      <div className="buttons">
        <button type='button' className={'btn btn-outline-secondary'} onClick={openEditForm}>Edit</button>
        <button
          onClick={doneHandler}
          className={`btn btn-outline-success ${
            !todoObj.isActive && todoObj.isDone ? "active" : ""
          }`}
        >
          Done
        </button>
        <button
          onClick={importantHandler}
          className={`btn btn-outline-warning ${
            todoObj.isImportant ? "active" : ""
          }`}
        >
          Important
        </button>
        {
          status === 'recently' ? <button onClick={deleteHandler} className={`btn btn-outline-danger`}>Restore</button> : <button onClick={deleteHandler} className={`btn btn-outline-danger`}>Delete</button>


        }
      </div>
    </li>
  );
};

export default Todo;
