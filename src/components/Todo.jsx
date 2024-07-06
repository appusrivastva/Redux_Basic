import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddForm from './AddForm';
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Todo App</h2>
      <AddForm />
      <ul style={styles.list}>
        {todos.map((t) => (
          <li key={t.id} style={styles.listItem}>
            <span>{t.task}</span>
            <div style={styles.buttonGroup}>
              <button style={styles.deleteButton} onClick={() => handleDelete(t.id)}>Delete</button>
              {t.isDone ? (
                <button style={{ ...styles.doneButton, ...styles.disabledButton }} disabled>Done</button>
              ) : (
                <button style={styles.markButton} onClick={() => handleMarkAsDone(t.id)}>Mark as done</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: 'black',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: 'black',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  markButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  doneButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
  },
  disabledButton: {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
};
