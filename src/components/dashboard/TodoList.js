import React  from 'react';
import Todo from './Todo';

function TodoList(props) {
    const {todos, updateTodos} = props;
    let taskRef = React.createRef();

    const updateTodo = (todo) => {
        const index = todos.findIndex(item => item.id === todo.id);
        todos[index] = todo;
        updateTodos(todos);
    };

    const addTodo = () => {
        if(taskRef.current.value == '') return null;

        const todo = {
            task : taskRef.current.value,
            completed : false
        };
        todos.push(todo);
        updateTodos(todos);
        taskRef.current.value = '';
        taskRef.current.focus();
    };

    const deleteTodo = (index) => {
        todos.splice(index, 1);
        updateTodos(todos);
    };

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Todos</span>
                    <ul className="todos">
                        {
                            todos && todos.map((todo, i) => <Todo updateTodo={updateTodo} deleteTodo={() => deleteTodo(i)} addTodo={addTodo}
                                                                  key={i} todo={todo}/>)
                        }

                        <li className='todo'>
                            <input type="text" ref={taskRef} />
                            <button onClick={addTodo} className="waves-effect pink darken-4 btn-small">Add</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;
