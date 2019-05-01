import React  from 'react';
import Navbar from './components/layout/Navbar';
import TodoList from './components/dashboard/TodoList';

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:
                [
                    {
                        id: 1,
                        task: 'Write React app using hooks',
                        completed: true
                    },
                    {
                        id: 2,
                        task: 'Write backend in node express',
                        completed: false
                    },
                    {
                        id: 3,
                        task: 'Write backend in node hapi',
                        completed: true
                    },
                    {
                        id: 4,
                        task: 'Write backend in node GraphGL',
                        completed: false
                    }
                ]
        };

        this.updateTodos = this.updateTodos.bind(this);
    }

    updateTodos(todos) {
        this.setState({todos});
    }

    render() {
        return (
            <div className="App">
                <Navbar/>

                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m10 offset-m1">
                            <TodoList updateTodos={this.updateTodos} todos={this.state.todos} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


export default App;




