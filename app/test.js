import React from 'react'  
import { createStore, bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

function createAction() {
  return {
    type: 'ADD_TODO',
    data: 'some data'
  }
}  

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{width:'200px', height:'200px',margin:'100px',border:'2px solid black'}}>
                <div onClick={this.props.actions.createAction.bind(this)}>
                  {"Click Me!"}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({createAction}, dispatch)
  }
}

var AppApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function reducer(state, action) {
  console.log(action);
  return state;
}

var store = createStore(reducer);
ReactDom.render(
  <Provider store={store}>
    <AppApp />
  </Provider>,
  document.getElementById('content')
);