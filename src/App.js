import React from 'react';
import './App.css';

const ItemsList = (props) => {
    const { items } = props;
    console.log(items);

    return(
        <ul>
            {
                items && items.map( (item, i) => <li className={item.completed ? 'is-done' : ' '} key={i}>{ item.name } <button id={i} onClick={props.mark} >X</button> </li>)
            }
        </ul>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.mark = this.mark.bind(this);
        this.state = {
            items: [],
        }
        this.inputItemRef = React.createRef();
    }



    handleChange(e) {
        e.preventDefault();
    }

    handleSubmit(e) {
        e.preventDefault();
        const { items } = this.state;
        if(this.inputItemRef.current.value.length == 0) return false;
        const item = {
            name : this.inputItemRef.current.value,
            completed: false
        };
        items.push(item);
        this.setState({items});
        this.inputItemRef.current.value = '';
    }

    mark(e) {
        console.log('mark', e.target.id);


        const { items } = this.state;
        const item = items[e.target.id];

        item.completed = ! item.completed;

        items[e.target.id] = item;
        this.setState({
            items
        })

    }

    render() {
        return (
            <div className="App">
                <h1>Todo</h1>
                <p>Remaining Tasks: {this.state.items.filter( item => item.completed === true).length}  { this.state.items.length} </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="item" ref={this.inputItemRef} onChange={ this.handleChange } />
                    <button>Add</button>
                </form>

                <ItemsList items={this.state.items} mark={this.mark}/>
            </div>
        );
    }
}

export default App;




