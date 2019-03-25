import React, { Component } from 'react';
import './App.css';
import './component/TodoItems';
import TodoItem from './component/TodoItems';
import tick from './icon/tick.svg'
class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem:'',
      todoItems: [
      { title:'mua bim bim', isComplete: true},
      { title:'mua banh' , isComplete: true},
      {title:'mua keo'}
    ]};
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item){
    return (event) => {
      
      const isComplete = item.isComplete;
      const { todoItems }= this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    };
  }
  onKeyUp(event){
    
    if(event.keyCode === 13){
      let text = event.target.value  ;
    if(!text ){
      return;
    }
    text = text.trim();
    if(!text){ return;}
    this.setState({
      newItem : "",
      todoItems: [
        {title: text, isComplete: false},
        ...this.state.todoItems
      ]
    });
    } 
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }  
  render() {
    const{ todoItems, newItem}= this.state;
    
    if(todoItems.length){
      return(
        <div className="App"> 
          <div className = "Header">
            <img className ="a5"  src={tick} width= {32} height= {32} />
            <input className ="a4" placeholder="What need to be done ?" 
            type ="text" onKeyUp ={this.onKeyUp}
            onChange = {this.onChange}
            value ={newItem}/>
           
          </div>
          
          {
            todoItems.length >0 && todoItems.map((item,index) => 
            <TodoItem
            key = {index} 
            item ={item} 
            onClick = {this.onItemClicked(item)} /> )
          }       
        </div>
        );
      }
      
  }
}
export default App;
