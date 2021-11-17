import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input :"",
            item : [],
            followedList : [],
        }
    };

    change = (e) => {
        this.setState({input:e.target.value})
    };

     adding = () => {
        this.setState({item: [...this.state.item, this.state.input]});
    };

     deleteItem  (id)  {
        const updateItem = this.state.item.filter((elem , ind) =>{
            return ind !== id; 
        });
        this.setState({item:updateItem});
    };

    selectedListApproach (index)  {
        const list = this.state.followedList
        console.log("inside selectedApproach : " + index);
        if (list.includes(index)) {
            console.log("inside if")
            list.splice(list.indexOf(index), 1)
        } else {
            console.log("inside else")
            list.push(index)
        }
        console.log(list)
        this.setState({followedList: list})
    };
    
     generateUnique  () {
        const length = 32;
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };

     isFollowed  (index)  {
        console.log("isFollowed : " + this.state.followedList.includes(index))
        return this.state.followedList.includes(index)
    };

    render() {
        //const [input, item] = this.state
        return (
            <div>
                <input type = "text"          
           placeholder = " type to add"
           value = {this.state.input}
           onChange = {this.change}/> &nbsp;&nbsp;
           <button onClick = {this.adding}>Add</button>
           {this.state.item.map((elem,index) =>{
               return <div key = {this.generateUnique()}> 
                       <li>
                           <span>
                                {elem} <button onClick = {() =>{this.deleteItem(index)}}>delete</button>
                                <button onClick = {() => this.selectedListApproach(index)}>
                                    {this.isFollowed(index) ? "UnFollow" : "Follow"}
                                </button>
                           </span>
                       </li>  
               </div>
           })}
            </div>
        );
    }
}
export default Hello;