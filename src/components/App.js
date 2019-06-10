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
      <div className="App">
        <div className="container">
          <div className="row">
            <Form handleAdd={(e) => this.handleAdd(e)} />
            <TaskList todos={this.state.todos} handleDelete={(i) => this.handleDelete(i)} />
          </div>
        </div>
        <Materialize />
      </div>
    );
  }
}

const Form = (props) =>
  <div
    className="input-field col s6"
  >
    <form
      onSubmit={e => props.handleAdd(e)}
      className="input-field"
    >
      <input
        id="addtext"
        name="text"
        type="text"
        className="autocomplete"
      />
      <label
        htmlFor="addtext"
        className="active"
      >
        Task Add
      </label>
    </form>
  </div>

const TaskList = (props) =>
  <div className="col s12">
    <ul className="collection">
      {props.todos.map((todo, i) =>
        <TaskView
          key={todo.title}
          todo={todo}
          handleDelete={() => props.handleDelete(i)}
        />
      )}
    </ul>
  </div>

const TaskView = (props) =>
  <li
    className="blue-grey-text text-darken-4 collection-item"
  >
    <div>
      {props.todo.title} 
      <a
        onClick={props.handleDelete}
        className="right secondary-content"
      >
        <i
          className="material-icons"
        >
          delete
        </i>
      </a>
    </div>
  </li>

const Materialize = () =>
  <div>
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' />
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
  </div>


export default App;
