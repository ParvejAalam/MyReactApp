import React from 'react';
import { UserContext }  from "./context";

const Parent = () => {
    return (
        <div>
            Parent
            <UserContext.Consumer>
                {  value =>  
                    <div style={{height: 300, backgroundColor: value.theme.backgroundColor}}>
                            <button style={{backgroundColor: value.theme.textColor}} onClick={value.toggleButton}>Toggle</button>
                    </div>
                }
            </UserContext.Consumer>
        </div>
    );
};

{/* <div style={{height: 300, backgroundColor: theme.backgroundColor}}>

</div> */}

export default Parent;