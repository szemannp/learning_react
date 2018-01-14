const React = require('react')

const ReactDOM = require('react-dom')

let TodoItem = require('./TodoItem')
let AddItem = require('./AddItem')

require('./css/index.css')

const myCheese = {
  name: 'smelly jelly',
  smellFactor: 'exquisite',
  price: '450'
}


class TodoComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Wazaaaa</h1>
        <p>Peeps</p>
        <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
        <p><strong>Cheese smell: </strong> {this.props.cheese.smellFactor}</p>
        <p><strong>Cheese price: </strong> {this.props.cheese.price}</p>
      </div>
    )
  }
}


// doin' the props' way
ReactDOM.render(<TodoComponent cheese={myCheese}/>, document.getElementById('list-wrapper'))


class StatedTodoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['take a nap', 'learn react', 'drink coffee', 'drink again, lots this time'],
      age: 123
    }
  }

  render() {
    var todos = this.state.todos
    todos = todos.map(function(item, index) {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)} />
      )
    }.bind(this))
    return (
      <div id="todo-list">
        <p onClick={this.clicked}>Tryin the stated way</p>
        <p>{this.state.age}</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd.bind(this)}/>
      </div>
    )
  } // render

  clicked() {
    console.log("clickzie'd")
  }

  onDelete(item) {
    var updatedTodos = this.state.todos.filter(function(value, index) {
      return item !== value
    })
    this.setState({
      todos: updatedTodos
    })
  }

  onAdd(item) {
    let updatedTodos = this.state.todos
    updatedTodos.push(item)
    this.setState({
      todos: updatedTodos
    })
  }
}


ReactDOM.render(<StatedTodoComponent />, document.getElementById('todo-wrapper'))
