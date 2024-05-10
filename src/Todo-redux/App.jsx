import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { handleSubmit, handleChange, handleDelete, handleEdit } from '../Todo-redux/slice';
import { useDispatch, useSelector } from 'react-redux';

function Todo() {
    const dispatch = useDispatch();
    const initState = useSelector((state) => {
        return state.reduce;
    });

    const [editIndex, setEditIndex] = useState(null); // State to track edit mode
    const [editValue, setEditValue] = useState(""); // State to hold edited task value

    const handleEditClick = (index) => {
        setEditIndex(index); // Set edit mode for this task
        setEditValue(initState.tasks[index]); // Pre-fill input field with current task text
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(handleEdit({ index: editIndex, value: editValue })); // Dispatch action to update task text
        setEditIndex(null); // Exit edit mode
        setEditValue(""); // Clear edit value
    };

    return (
        <>
            <h1>Todo</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(handleSubmit());
            }}>
                <input type="text" value={initState.value} onChange={(e) => dispatch(handleChange(e.target.value))} />
                <button>Add Tasks</button>
            </form>
            <ul>
                {initState.tasks.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? ( // Render input field if in edit mode
                            <form onSubmit={handleEditSubmit}>
                                <input 
                                    type="text" 
                                    value={editValue} 
                                    onChange={(e) => setEditValue(e.target.value)} 
                                />
                                <button type="submit">Save</button>
                            </form>
                        ) : (
                            <>
                                {task}
                                <i className="fas fa-trash" onClick={() => dispatch(handleDelete(index))}></i>
                                <i className="fas fa-pencil" onClick={() => handleEditClick(index)}></i>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
