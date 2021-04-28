const UPDATE_TODOS = "UPDATE_TODOS";
const DELETE_TODOS = "DELETE_TODOS";
const DONE_TODOS = "DONE_TODOS";
const IMPORTANT_TODOS = "IMPORTANT_TODOS";
const STATUS_TODOS = "STATUS_TODOS";
const SEARCH_TODOS = "SEARCH_TODOS";
const STORAGE__TODOS = "STORAGE__TODOS";
const EDIT__TODO = 'EDIT__TODO'

const initState = {
  todos: [],
  status: "all",
  searchTodo: "",
  editTodo: ""
};

export default function f(state = initState, action) {
  switch (action.type) {
    case UPDATE_TODOS: {
      return { ...state, todos: [...state.todos, action.todo] };
    }

    case DELETE_TODOS: {
      return { ...state, todos: action.todos };
    }

    case DONE_TODOS: {
      return { ...state, todos: action.todos };
    }

    case IMPORTANT_TODOS: {
      return { ...state, todos: action.todos };
    }
    case STATUS_TODOS: {
      return { ...state, status: action.status };
    }
    case SEARCH_TODOS: {
      return {
        ...state,
        searchTodo: action.searchTodo,
      };
    }
    case STORAGE__TODOS: {
      return {
        ...state,
        todos: action.todos,
      };
    }
    case EDIT__TODO: {
      return {
        ...state, 
        editTodo: action.editTodo
      }
    }
    default: {
      return state;
    }
  }
}

export const updateTodos = (inputText) => {
  return {
    type: UPDATE_TODOS,
    todo: {
      todoName: inputText,
      id: Math.round(Math.random() * 1000),
      isActive: true,
      isDone: false,
      isDeleted: false,
      isImportant: false,
    },
  };
};

export const deleteTodos = (newArr) => {
  return {
    type: DELETE_TODOS,
    todos: newArr,
  };
};

export const doneTodos = (newArr) => {
  return {
    type: DONE_TODOS,
    todos: newArr,
  };
};

export const importantTodos = (newArr) => {
  return {
    type: IMPORTANT_TODOS,
    todos: newArr,
  };
};
export const statusTodos = (statusValue) => {
  return {
    type: STATUS_TODOS,
    status: statusValue,
  };
};
export const setSearch = (todo) => {
  return {
    type: SEARCH_TODOS,
    searchTodo: todo,
  };
};

export const storageTodos = (todo) => {
  return {
    type: STORAGE__TODOS,
    todos: todo,
  };
};

export const setEditTodo = (text) => {
  return {
    type: EDIT__TODO,
    editTodo: text
  }
}
