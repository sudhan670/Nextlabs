// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [apps, setApps] = useState([]);
    const [name, setName] = useState('');
    const [points, setPoints] = useState('');

    useEffect(() => {
        fetchApps();
    }, []);

    const fetchApps = async () => {
        const response = await axios.get('http://localhost:8000/api/apps/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        setApps(response.data);
    };

    const handleAddApp = async () => {
        await axios.post('http://localhost:8000/api/apps/', { name, points }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        fetchApps();
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <input type="text" placeholder="App Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Points" value={points} onChange={(e) => setPoints(e.target.value)} />
            <button onClick={handleAddApp}>Add App</button>
            <ul>
                {apps.map(app => (
                    <li key={app.id}>{app.name} - {app.points} points</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
