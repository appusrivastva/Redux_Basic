import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

export default function AddForm() {
  //  state chnage ko trigger krne ke liye 
  // 1. which reducer fuc call and on which action
    const [task,setTask]=useState("")
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(task)
        dispatch(
          addTodo(task)
        )
        setTask("")
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button>Add Todo</button>
        
        
        
        </form></>
      

  )
}
