import React, {  useState } from 'react';

const InputAddDelete = () => {
    const [input , setInput] = useState("")
    const [item , setItem] = useState([]);
    const [followedList, setFollowedList] = useState([])
    const [followAll, setFollowAll] = useState(false)
    
    const change = (e) => {
        setInput(e.target.value)
    };
    const add = () => {
        setItem((prevState) => {
            const data = {label: input, isFollow: false} //key approach
            //return [...prevState , input] //normal approach
            return [...prevState , data]
        });
    };
    const deleteItem = (id) => {
        const updateItem = item.filter((elem , ind) =>{
            return ind !== id; 
        });
        setItem(updateItem);
    };


    //Element by id approach
    // const getElementByIdApporach = (index) =>{
    //     //setData(false);
    //     console.log("The index is : " + index)
    //     let element = document.getElementById("button-" + index)
    //     const text = element.innerText;
    //     console.log("Button Text : " + text)
    //     element.innerText = text == "Follow" ? "Unflollow" : "Follow";
    // }


    // SelectedListApproach
    const selectedListApproach = (index) => {
        console.log("inside selectedApproach");
        if (followedList.includes(index)) {
            followedList.splice(followedList.indexOf(index), 1)
        } else {
            followedList.push(index)
        }
        console.log(followedList)
        setFollowedList([...followedList])
    }

    //Key Appraoch
    // const keyApproach = (index) => {
    //     let data = item[index]
    //     data.isFollow = !data.isFollow
    //     item[index] = data
    //     setItem([...item])
    // }

    const followAllApporach = () => {
        item.map (data => {
         return   data.isFollow = !followAll;
        })
        setItem([...item])
        setFollowAll(!followAll)
    }

    const generateUnique = () => {
        const length = 32;
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    const isFollowed = (index) => {
        console.log("isFollowed : " + followedList.includes(index))
        return followedList.includes(index)
    }
    
    return (
        <div>
           <input type = "text"          
           placeholder = " type to add"
           value = {input}
           onChange = {change}/> &nbsp;&nbsp;
           <button onClick = {add}>Add</button>
           <button onClick={followAllApporach}>
               {followAll ? "UnFollow" : "Follow"}
           </button>
           {item.map((elem,index) =>{
               return <div key = {generateUnique()}> 
                       <li>
                           <span>
                                {elem.label} <button onClick = {() =>{deleteItem(index)}}>delete</button>
                                <button onClick = {() => selectedListApproach(index)}>
                                    {isFollowed(index) ? "UnFollow" : "Follow"}
                                    {/* {elem.isFollow ? "UnFollow" : "Follow"} */}
                                </button>
                           </span>
                       </li>  
               </div>
           })}
        </div>
    );
};
export default InputAddDelete;

//Approaches
//1. Document By Id Approach
//2. Selected List Approach
//3. key Approach