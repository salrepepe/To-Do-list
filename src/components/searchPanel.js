import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusTodos, setSearch } from "../redux/reducers/reducerTodo";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const StatusValue = useSelector((s) => s.reducerTodo.status);
  const statusHandler = (e) => {
    dispatch(statusTodos(e.target.value));
  };
  const searchHandler = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className="block">
      <div className="coll">
        <input
          type="text"
          placeholder="search todo"
          className="form-control form-control-lg"
          onChange={searchHandler}
        />
      </div>
      <div className="coll">
        <div className="btns">
          <button
            className={`btn btn-outline-info ${
              StatusValue === "all" ? "active" : ""
            }`}
            value="all"
            onClick={statusHandler}
          >
            all
          </button>
          <button
            className={`btn btn-outline-info ${
              StatusValue === "active" ? "active" : ""
            }`}
            value="active"
            onClick={statusHandler}
          >
            active
          </button>
          <button
            className={`btn btn-outline-info ${
              StatusValue === "done" ? "active" : ""
            }`}
            value="done"
            onClick={statusHandler}
          >
            done
          </button>
          <button
            className={`btn btn-outline-info ${
              StatusValue === "recently" ? "active" : ""
            }`}
            value="recently"
            onClick={statusHandler}
          >
            recently
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
