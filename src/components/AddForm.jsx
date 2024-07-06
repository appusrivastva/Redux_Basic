import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
        placeholder="Enter a new task"
      />
      <button style={styles.addButton}>Add Todo</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: '1',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
