import React, { Component , Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            inputValue: ''
        }
        this.inputChangeValue = this.inputChangeValue.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.deleteHandleClick = this.deleteHandleClick.bind(this)
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    inputChangeValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    deleteHandleClick(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({list})
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem 
                        delete={this.deleteHandleClick} 
                        key={index} 
                        content={item} 
                        index={index}/>
                )
            })
        )
    }
    handleKeydown(e) {
        if(e.keyCode === 13){
            this.handleBtnClick()
        }
    }

    // 父组件通过属性的方式向子组件传值
    // 子组件使用this.props接收

    render(){
        return (
            <Fragment> 
                <div>
                    <input className="input-style" value={this.state.inputValue}  onChange={this.inputChangeValue} onKeyDown={(e)=>{this.handleKeydown(e)}} />
                    <button className="btn-color" onClick={this.handleBtnClick}>add</button>
                </div>
                <div className="oul">{this.getTodoItems()}</div>
            </Fragment>
        );
    }
}

export default TodoList;
