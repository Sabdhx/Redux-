import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adding , editing, deleting } from '../redux/todolist';
 // Ensure correct import path

function TodoList() {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoListData);

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditValue(item.value);
  };

  const handleSaveClick = () => {
    if (editId) {
      dispatch(editing({ id: editId, newValue: editValue }));
      setEditId(null);
      setEditValue('');
    }
  };

  const handleCancelClick = () => {
    setEditId(null);
    setEditValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(adding(input))}>Add</button>

      {data.map((item) => (
        <div key={item.id}>
          {editId === item.id ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEditClick(item)}>Edit</button>
              <h1>{item.value}</h1>
              <button onClick={() => dispatch(deleting(item.id))}>X</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
