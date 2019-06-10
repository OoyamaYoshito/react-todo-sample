import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  //タスク追加
  handleAdd(e) {
    e.preventDefault()
    if (e.target.text.value === "") return
    const new_todo = {
      title: e.target.text.value
    }
    this.setState({ todos: [...this.state.todos, new_todo] })
    e.target.text.value = ''
  }

  // タスク削除
  handleDelete(target_id) {
    this.setState({
      todos: this.state.todos.filter((x, i) => i !== target_id)
    })
  }

  render() {
    return (
        <div>
            <Form handleAdd={(e) => this.handleAdd(e)} />
            <TaskList todos={this.state.todos} handleDelete={(i) => this.handleDelete(i)} />
        </div>
    );
  }
}

const Form = (props) =>
    <form
      onSubmit={e => props.handleAdd(e)}
    >
      <input
        name="text"
        type="text"
      />
      <label
        htmlFor="addtext"
      >
        Task Add
      </label>
    </form>

const TaskList = (props) =>
    <ul>
      {props.todos.map((todo, i) =>
        <TaskView
          key={todo.title}
          todo={todo}
          handleDelete={() => props.handleDelete(i)}
        />
      )}
    </ul>

const TaskView = (props) =>
  <li>
    <div>
      {props.todo.title} 
      <button
        onClick={props.handleDelete}
      >
        <i>
          delete
        </i>
      </button>
    </div>
  </li>

export default App;
