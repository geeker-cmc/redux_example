import React,{Component} from 'react';
import TodoList from './TodoList';

export default class TodoApp extends Component{
  constructor(props) {
    super(props);
    this.state={
      text:''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.state.text.trim()&&this.props.actions.addTodo(this.state.text);
    this.setState({
      text:''
    })
  }
  handleChange(e){
    this.setState({
      text:e.target.value
    })
  }
  render(){
    return (
          <div>
            <h3>todo</h3>
            <TodoList {...this.props}/>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)} autoFocus='true' value={this.state.text}/>
               <button>{'#'+(this.props.todos.length)}</button>
            </form>
           
          </div>
      )
  }
}