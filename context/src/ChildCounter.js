import React from 'react';
import { UserCounter } from './Counter';

const ChildCounter = () => {
    return (
        <div>
           <UserCounter.Consumer>
               {value =>
                <div>
                  <button onClick = {value.counter}>Click</button>
                  <p>Child {value.lable}</p>
                  <button onClick = {value.minusCount}> minus</button>
                  <p>{value.fname}</p>
               </div>}
           </UserCounter.Consumer>
        </div>
    );
};

export default ChildCounter;