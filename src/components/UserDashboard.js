// src/components/UserDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:8000/api/my-tasks/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        setTasks(response.data);
    };

    const handleFileUpload = (taskId, file) => {
        const formData = new FormData();
        formData.append('screenshot', file);
        axios.patch(`http://localhost:8000/api/tasks/${taskId}/`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            fetchTasks();
        });
    };

    return (
        <div>
            <h1>User Dashboard</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.app.name} - {task.completed ? 'Completed' : 'Not Completed'}
                        {task.completed ? null : (
                            <input type="file" onChange={(e) => handleFileUpload(task.id, e.target.files[0])} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
