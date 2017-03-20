import React,{Component} from 'react';
export default class TodoList extends Component{
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(){

  }
  shouldComponentUpdate(nextProps){
   return this.props.todos.length!==nextProps.todos.length;
  }
  handleClick(e){
    this.props.actions.delTodo(e.target.parentElement.getAttribute('data-key')*1);
  }
  render(){
    return (
         <ul>
           {
            this.props.todos.map(item=>{
              return (<li data-key={item.id} key={item.id} >{item.text}<i style={{background:'red',display:'inline-block',width:20,height:20}} onClick={this.handleClick.bind(this)}>X</i></li>)
            })
          }
         </ul>
      )
  }
}