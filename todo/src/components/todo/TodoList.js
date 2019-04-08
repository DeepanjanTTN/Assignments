import React, { Component } from 'react'
import TodoItems from './TodoItems'
export default class TodoList extends Component {
  render() {
    return (
      <div>
        Hello from todo list
        <TodoItems />        
      </div>
    )
  }
}
