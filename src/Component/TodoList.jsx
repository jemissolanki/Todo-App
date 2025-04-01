import React, { useReducer } from "react";
import {useTodoContext} from '../Context/TodoContext'
import {List,FilterButton,FilterContainer} from '../Styles'
import TodoItem from "./TodoItem";


const TodoList=()=>{
    const {dispatch} = useTodoContext();

    return(
<div>
    <FilterContainer>
        <FilterButton onClick={()=>dispatch({type:'SET_FILTER', payload : 'all'})}>All</FilterButton>
        <FilterButton onClick={()=>dispatch({type: 'SET_FILTER' , payload:'archive'})}>Active</FilterButton>
        <FilterButton onClick={()=>dispatch({type:'SET_FILTER' , payload:'completed'})}>Completed</FilterButton>
    </FilterContainer>

    <List>
        {filterTOdos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))}
    </List>
</div>
    );
};
export default TodoList;