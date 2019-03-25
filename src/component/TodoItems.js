import React, { Component } from 'react';

import classNames from 'classnames';
import './TodoItems.css';
import check from '../icon/check.svg';
import checkdone from '../icon/checkdone.svg';
class TodoItem extends Component {
    render(){
        const {item,onClick}= this.props;
        let url = check;
        if(item.isComplete){
            url = checkdone;
        }
        
        return(
            <div onClick = {onClick}  className={classNames('TodoItem',{
                'TodoItem-complete':item.isComplete
            })}>
                <img   src = {url} height={32} width = {32}/>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}
export default TodoItem;