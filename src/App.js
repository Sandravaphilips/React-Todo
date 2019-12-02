import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: '',
          id: Date.now(),
          completed: false,
        }
      ],
      input: ''
    }

    this.addTodo = this.addTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.toggleTodoCompleteAtIndex = this.toggleTodoCompleteAtIndex.bind(this);
  }

  addTodo(e, todoTask) {
    e.preventDefault();
    const existing = this.state.todos.filter(
      todo => todo.task === todoTask
    );
    if (existing.length === 0) {
      const newTodo = {
        task: todoTask,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  }

  toggleTodoCompleteAtIndex(id) {
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  onInputChange = e => {
    this.setState(
      {
        ...this.state, input: e.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <TodoForm value={this.state.input} onInputChange={this.onInputChange} addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todos={this.state.todos} onClick={this.toggleTodoCompleteAtIndex} />
      </div>
    );
  }
}

export default App;
