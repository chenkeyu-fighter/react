import React, { Component, Fragment } from 'react';
import TodoItem from './Todoitem';
import './style.css'
/* react-响应式框架===数据层的操作 */
// Fragment ==占位符
// 绑定事件的方法:首字母大写
// bind 绑定this指向
// this.setState改变state里的值
//  循环map
// /* 解析标签：  dangerouslySetInnerHTML={{__html: item}} */
// 给label加for标签  htmlFor
class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    render () {
        return (
            <Fragment>
                <div>
                     {/* 绑定事件以及绑定this的指向 */}
                     {/* class类名 className */}
                     <label htmlFor="insertArea">创建任务</label>
                    <input id="insertArea" className="input" value={this.state.inputValue} placeholder="请输入任务名字" type="text" onChange={this.handleInputChange} />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {/* 循环map */}
                    
                        {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return(
                <div>
                 <TodoItem content={item} index={index} deleteItem = {this.handleDelete} />
                </div>
               
                
                /*  <li
            dangerouslySetInnerHTML={{__html: item}}
            onClick={this.handleDelete.bind(this, index)} 
            key={index}
            >
            </li> */)
        })
    }

    // input动态绑定数据
    handleInputChange(e) {
        console.log('tag', this)
        console.log('tag', e.target.value)
        const value = e.target.value;
        this.setState(() => ({
                inputValue: value
            }))
    }
    // 给list赋值
    handleButtonClick() {
        this.setState({
            // es6中的展开运算符
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }

    handleDelete(index) {
        // immutable
        // state 不允许做任何的改变  所以采用给变量赋值在进行相关操作
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

}
export default Todolist