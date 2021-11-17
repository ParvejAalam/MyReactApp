import React from 'react';
import { UserContext } from './context';

const Child = () => {
    return (
        <div>
            Child
           <UserContext.Consumer>
           {value => <h1> B :{value.class}</h1>}
           </UserContext.Consumer> 
        </div>
    );
};

export default Child;