import React, { useReducer } from "react";
import {useTodoContext} from '../Context/TodoContext'
import {Text,DeleteButton,ListItem,CheckBox} from '../Styles'

const TodoItem=()=>{
    const {dispatch} = useTodoContext();
    return(
        <ListItem>
            <CheckBox type="checkbox" onChange={toggleTodo} checked={todo.completed}/>
            <Text completed={todo.completed}>{todo.Text}</Text>
            <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
        </ListItem>


        
    );
};

export default TodoItem;