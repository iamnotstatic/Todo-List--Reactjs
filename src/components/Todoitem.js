import React, { Component } from 'react';
import PropsTypes from 'prop-types';


class Todoitem extends Component{
getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
}

 render (){
const { id, title } = this.props.todo;
  return (
      <div style={this.getStyle()}>
          <p>
              <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>×</button>
          </p>
      </div>
  )
 }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropsTypes.object.isRequired,
    markComplete: PropsTypes.func.isRequired,
    delTodo: PropsTypes.func.isRequired,
  }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default Todoitem;

