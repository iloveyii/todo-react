import React  from 'react';

const Todo = (props) => {
    const {todo, updateTodo, deleteTodo} = props;

    const className = todo.completed ? 'waves-effect pink darken-4 btn-small fixed-width' : 'waves-effect blue darken-1 btn-small fixed-width';
    const text = todo.completed ? 'completed' : 'complete';
    const completed = todo.completed ? 'completed' : '';

    return (
        <li className='todo'>
            <span className={completed}>{todo.task}</span>
            <button onClick={deleteTodo} className="waves-effect pink darken-4 btn-small">X</button>
            <button onClick={() => { todo.completed = ! todo.completed; updateTodo(todo);}} className={className}>{text}</button>
        </li>
    )
};

export default Todo;
