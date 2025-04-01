import React, { useReducer } from "react";


initialvalue=1;
const UseReducerHook=()=>{
    const[state,dispatch]=useReducer(UseReducerHook,initialvalue);
    return(
        <div>
            <h1>{state}</h1>
        <button onClick={()=>dispatch({type : 'increment'})}>+</button>
        <button onClick={()=>dispatch({type : 'decerement'})}>-</button>
        </div>
    
    )
}

function reducer (state,action){
    if(action.type==='increment')return state+1;
    else if (action.type==='decrement')return state-1;
    else throw new Error ('invalid');
    
}


export default UseReducerHook;