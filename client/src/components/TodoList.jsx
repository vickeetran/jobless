import React from 'react';
import TodoListEntry from './TodoList';


/*
parent component should pass two things:
  - the events that are due today (including the completion status in the object)
  - a function to toggle the completion status
*/
let todoItems = [
    {
        name: 'Castle Siege Aden [Lineage2]',
        timestamp: 1457642423369
    },
    {
        name: 'Grand Olympiad [Lineage 2]',
        timestamp: 1457642436369
    },
    {
        name: 'Get some sleep [Real life]',
        timestamp: 1457642445369
    }
];

export default class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItems = this.addItems.bind(this);
    }

    componentDidMount() {
        this.setState({items: todoItems});
    }

    deleteItem(index) {
        let items = this.state.items;

        items.splice(index, 1);
        this.setState({items: items});
    }

    addItems(item) {
        if (item) {
            let items = this.state.items;
            items.push(item)
            this.setState({items: items});
        }
    }

    render() {
        return(
            <div className="todo">
                <TodoInput add={this.addItems} />
                <TodoList delete={this.deleteItem} items={this.state.items} />
            </div>
        )
    }
}

class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        let target = React.findDOMNode(this.refs.input);

        if (target.value) {
            let dataToAdd = {
                name: target.value,
                timestamp: new Date().getTime()
            };

            this.props.add(dataToAdd);
            target.value = '';
        }
    }

    render() {
        return(
            <form className="form-todo" onSubmit={this.onSubmit}>
                <div className="form-title">Add new item:</div>
                <div className="form-container">
                  <input ref="input" type="text" placeholder="Type something..." />
                  <button type="submit">Add</button>
                </div>
            </form>
        )
    }
}

class TodoList extends React.Component {
    render() {
        let list = this.props.items.map((item, index) => {
            return <TodoListItem
                key={index}
                index={index}
                item={item} 
                delete={this.props.delete} />
        });

        return (
            <ul className="todo-list">
                {list}
            </ul>
        )
    }
}

class TodoListItem extends React.Component {
    onCloseClick(item, event) {
        this.props.delete(item);
    }

    render() {
        let item =this.props.item;
        let time = new Date(item.timestamp).toDateString();

        return <li>
            <div className="info">
                <div>{item.name}</div>
                <div className="time">[ {time} ]</div>
            </div>
            <i onClick={this.onCloseClick.bind(this, this.props.index)} className="close">×</i>
        </li>
    }
}

