import React, { Component } from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.deleteItemClick = this.deleteItemClick.bind(this)
    }
    deleteItemClick() {
        this.props.delete(this.props.index)
    }
    render() {
        const {content} = this.props
        return (
            <div onClick={this.deleteItemClick}>{content}</div>
        )
    }
}

export default TodoItem