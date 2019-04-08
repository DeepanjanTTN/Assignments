import React, { Component } from 'react'
// import TodoInput from './TodoInput';
// import TodoList from './TodoList';
export default class TodoMain extends Component {

  constructor(){
    super();
    this.state ={
      value: "",
      todoArr :[]
    }
  }

  onHandle = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onAdd = () => {
    const arr = [...this.state.todoArr];
        arr.push(this.state.value);
       
        this.setState({
            todoArr: arr
        })


        
  }


  onDel = (index) => {
    let newarr = [...this.state.todoArr];
    newarr.splice(index, 1);
    this.setState({
      todoArr: newarr
    })
  }

  handleSubmit =(e) => {
    e.preventDefault();
}



  render() {
    return (
      <div className="todoMain">

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="value" value={this.state.value} onChange={this.onHandle} autocomplete="off" />
          <button onClick={this.onAdd} className="add-btn">Add item</button>    
        </form>

        {this.state.todoArr.map((item,index) => 
        <ul>
          <li key={index}>{item} <br/>
          <button onClick={() => {this.onDel(index)}}> Delete</button></li>
        </ul>)}
        
      </div>
    )
  }
}
