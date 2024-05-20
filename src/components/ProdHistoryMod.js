import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProdHistoryMod() {
    const [currentOwner,setCurrentOwner] = useState('');
    const [previousOwners, setPreviousOwners] = useState([]);

    const [showForm, setShowForm] = useState(false);
    const [newUserName, setNewUserName] = useState('');

    const handleAddNewUser = () => {
        setShowForm(true);
    };

    const handleSaveUser = () => {
        if (newUserName.trim() !== '') {
            setPreviousOwners((prevOwners) => [...prevOwners, currentOwner]);
            setCurrentOwner(newUserName);
            setNewUserName('');
            setShowForm(false);
        }
    };

    const handleCancel = () => {
        setNewUserName('');
        setShowForm(false);
    };

    return(
        <div>
            <h2>Product History</h2>

            <h3>Current Owner:</h3>
            <p>{currentOwner}</p>

            <h3>Previous Owners</h3>
            <ul>
                {previousOwners.map((owner, index) => (
                   <li key={index}>{owner}</li> 
                ))}
            </ul>

            {!showForm && (
                <button onClick={handleAddNewUser}>Add New User</button>
            )}

            {showForm && (
                <div>
                    <h3>Add New User</h3>
                    <label>
                        Name:
                        <input 
                            type="text"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </label>
                    <button onClick={handleSaveUser}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
}