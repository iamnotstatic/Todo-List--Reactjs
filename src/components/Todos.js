import React, { Component } from 'react';
import Todoitem  from './Todoitem';
import PropsTypes from 'prop-types';


class Todos extends Component{
  markComplete = () => {
    console.log("hello")
  }
 render (){
  return this.props.todos.map((todo) => (
    <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
  ));
 }
}

//PropTypes
Todos.propTypes = {
  todos: PropsTypes.array.isRequired,
  markComplete: PropsTypes.func.isRequired,
  delTodo: PropsTypes.func.isRequired,
}

export default Todos;

