import React, { useState } from "react";
import {Form,Button,Input}from '../Styles'
import {useTodoContext} from '../Context/TodoContext'


const TodoForm=()=>{
    const [text,setText]=useState("");
    const {dispatch} =useTodoContext();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (text.trim()) {
            dispatch({
            type: "ADD_TODO",
            payload :{
                id:Date.now(),text, completed:false
            }
            
        });
        setText("");
    }
    }
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Input type="text" onChange={(e)=> setText(e.target.value)} value={text}/>
                <Button type="submit">Add</Button>
            </Form>

        </div>
    );
};

export default TodoForm;
