import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewToDo } from './actions/todo.actions';
import './App.css';

class App extends Component {
  state = {
    newTodo: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.addNewToDo(this.state.newTodo)) {
      this.setState({
        newTodo: ''
      });
    }
  };

  render() {
    let todoList = this.props.toDos.map((todo, i) => {
      return <div key={i}>{todo}</div>;
    });
    return (
      <div className="App">
        <h1 className="text">List of ToDos</h1>
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            placeholder="new todo"
            type="text"
            value={this.state.newTodo}
            onChange={event => this.setState({ newTodo: event.target.value })}
          />
          <button className="button-success pure-button" type="submit">
            Submit
          </button>
        </form>
        <ul className="todoList">{todoList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toDos: state.toDos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewToDo: bindActionCreators(addNewToDo, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
