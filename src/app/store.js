// redux store

// kya kya information store hogi


// state ki form me save 

// creating an empty redux store 
import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../features/todo/todoSlice'


export const store = configureStore({
  reducer:todoReducers,
})