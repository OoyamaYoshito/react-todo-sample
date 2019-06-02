import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  //タスク追加
  handleAdd(e){
    e.preventDefault()
    if(e.target.text.value == "")return;
    this.state.todos.push({title: e.target.text.value})
    this.setState({todos: this.state.todos})
    e.target.text.value = ''
  }

  // タスク削除
  handleDelete(i){
    this.state.todos.splice(i,1)
    this.setState({todos: this.state.todos})
  }

  render(){
  return (
    <div className="App">
      <Form handleAdd={this.handleAdd}/>
      <List todos={this.state.todos} handleRemove={this.handleDelete}/>
    </div>
  );
  }
}

const Form = (props) => (
  <form onSubmit={props.handleAdd}>
      <label >Task Add</label>
      <input name="text" placeholder="text" type="text"/><input type="submit" value="Add"/>
  </form>
);

const List = (props) => (
  <ul>
    {props.todos.map((todos, i) => {
      return <li key={i} >{todos.title} <button onClick={() => props.handleRemove(i)}>Delete</button>
      </li>
    })}
  </ul>
)

export default App;
