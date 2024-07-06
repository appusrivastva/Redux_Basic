import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import AddForm from './AddForm';
import { deleteTodo } from '../features/todo/todoSlice';
import { markAsDone } from '../features/todo/todoSlice';
export default function Todo() {
    const todos=useSelector((state)=>(
        state.todos
    ));
    const dispatch=useDispatch();
    console.log(todos)

    const handleclick=(id)=>{
      console.log(id)
      dispatch(
        deleteTodo(id)
      )
    
    }
    const handlebtn=(id)=>{
      dispatch(
        markAsDone(id)
       )
    }
    
  
  return (
    <>
    <h3>Todo App</h3>
    <AddForm/>
    <ul>
        {todos.map((t)=>(
            <li key={t.id}>{t.task}
            <button onClick={()=>handleclick(t.id)}>Delete</button>
            {
              t.isDone?(<button style={{backgroundColor:"green"}} disabled>mark as done</button>):(
              <button style={{backgroundColor:"red"}} onClick={()=>handlebtn(t.id)}>mark as done</button>)
            }
            
            
            
            
            </li>
        ))}
    </ul>
  
      
    </>
  )
}
