import React from "react";
import { Header } from "./Styles";
import TodoForm from "./Component/TodoForm";
import { TodoProvider } from "./Context/TodoContext";

const App=()=>{
  return(
    <div>
      <Header>Todo App</Header>
      <TodoForm/>
      
    </div>
  );
};
const WrapApp=()=>{
  return(
    <TodoProvider>
      <App/>
    </TodoProvider>
  )
}

export default WrapApp;