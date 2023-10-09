'use client'
import React, { useState } from 'react';

export const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    
    const handleSubmit = () => {
        if (username && email.includes('@')) {
            console.log('User input', { username, email});
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };
    
    return (
        <div>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
            <button onClick={handleSubmit}>Create User</button>
            {!isValid && <p>Invalid Input! Email needs to contain @</p>}
        </div>
    );
}