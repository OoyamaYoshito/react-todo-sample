import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  //タスク追加
  handleAdd(e) {
    e.preventDefault()
    if (e.target.text.value == "") return;
    this.state.todos.push({ title: e.target.text.value })
    this.setState({ todos: this.state.todos })
    e.target.text.value = ''
  }

  // タスク削除
  handleDelete(i) {
    this.state.todos.splice(i, 1)
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div className="App">

        <div class="container">
          <div class="row">
            <Form handleAdd={this.handleAdd} />
            <List todos={this.state.todos} handleRemove={this.handleDelete} />
          </div>
        </div>
        <div>
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' />
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
        </div>
      </div>
    );
  }
}

const Form = (props) => (
  <div class="input-field col s6">
    <form onSubmit={props.handleAdd} class="input-field">
      <input id="addtext" name="text" type="text" class="autocomplete" />
      <label for="addtext" class="active">Task Add</label>
    </form>
  </div>
);

const List = (props) => (
  <div class="input-field col s12">
    <ul class="collection">
      {props.todos.map((todos, i) => {
        return <li key={i} class="blue-grey-text text-darken-4 collection-item"><div>{todos.title} <a onClick={() => props.handleRemove(i)} class="right secondary-content"><i class="material-icons">delete</i></a>
        </div></li>
      })}
    </ul>
  </div>
)

export default App;
