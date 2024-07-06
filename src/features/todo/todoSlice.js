// todo list related features

import { createSlice,nanoid } from "@reduxjs/toolkit";


// state starting me kaisa hoga
// sample todo
const initialState={
    todos:[{id:"abc",task:"demo",isDone:false},],
}


// create slice ke function se hum slice ko create krenge
// reducer and action ka bundle

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false,
            }
        //    normal react  me hota h esa   [...todos,newTodo]
            // direct mutation of the array
            state.todos.push(newTodo);      


        },
        deleteTodo:(state,action)=>{  
             state.todos=state.todos.filter((todo)=> todo.id!=action.payload)

        },
        markAsDone:(state,action)=>{
            // id-.action.payload
         const todo= state.todos.find((todo)=> todo.id===action.payload)

         if(todo){
            todo.isDone=true
         }

        }
    }
})
export const {addTodo,deleteTodo,markAsDone}=todoSlice.actions;
export default todoSlice.reducer;