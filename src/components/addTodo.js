import React from 'react';
import {useDispatch} from "react-redux";
import {updateTodos} from "../redux/reducers/reducerTodo";

const AddTodo = () => {
    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodos(e.target.children[0].value));
        e.target.children[0].value = ''
    };
    return (
        <form onSubmit={formHandler} className={'addForm'}>
            <input type="text" className='form-control addInput' placeholder='add todo' required/>
            <button type="submit" className='btn btn-primary'>add todo</button>
        </form>
    );
};

export default AddTodo;