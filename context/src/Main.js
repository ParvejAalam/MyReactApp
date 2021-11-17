import React, { useState } from 'react';
import Parent from "./Parent";
import Child from "./Child";
import { UserContext, themes } from './context';


const Main = () => {

    const toggleButton = () => {
        console.log("inside toggleButton : ")
        console.log(theme)
        setTheme(theme == themes.light ? themes.dark : themes.light)
        console.log(data)
    }

    const [theme, setTheme] = useState(themes.dark)

    const data = {
        theme: theme,
        toggleButton: toggleButton
    }

    return (
        <div>
            <h2>The uses of Context</h2>
            <UserContext.Provider  value = {data}>
                <Parent/>
                {/* <Child/> */}
            </UserContext.Provider>
        </div>
    );
};

export default Main;