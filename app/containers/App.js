import React from 'react';
import {bindActionCreators} from 'redux';
import TodoApp from '../components/TodoApp';
import {connect} from 'react-redux';
import * as TodoActions from '../actions';

const App=({todos,actions})=>{
  return (
	<div>
	     <TodoApp todos={todos} actions={actions} />
	</div>
    )
};
const mapStateToProps=state=>({
	todos:state.todos
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(TodoActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
