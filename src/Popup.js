import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ row, onClose, mode }) => {
    const [originalRow] = useState(row ? [...row] : []);
    if (!row) return null;

    const handleInputChange = (e, index) => {
        row[index] = e.target.value;
    };

    const resetChanges = () => new Promise(resolve => {
        row.forEach((_, i) => (row[i] = originalRow[i]));
        resolve();
    });

    const handleClick = async () => {
        await resetChanges();
        onClose();
    };

    const renderInputs = () => {
        if (mode === 'License') {
            return (
                <>
                    <input value={row[0]} onChange={(e) => handleInputChange(e, 0)} />
                    <input value={row[1]} onChange={(e) => handleInputChange(e, 1)} />
                    <input value={row[2]} onChange={(e) => handleInputChange(e, 2)} />
                    <input value={row[7]} onChange={(e) => handleInputChange(e, 7)} />
                    <input value={row[3]} onChange={(e) => handleInputChange(e, 3)} />
                    <input value={row[4]} onChange={(e) => handleInputChange(e, 4)} />
                    <input value={row[5]} onChange={(e) => handleInputChange(e, 5)} />
                    <input value={row[6]} onChange={(e) => handleInputChange(e, 6)} />
                </>
            );
        }
        return (
            <>
                <input value={row[0]} onChange={(e) => handleInputChange(e, 0)} />
                <input value={row[1]} onChange={(e) => handleInputChange(e, 1)} />
                <input value={row[2]} onChange={(e) => handleInputChange(e, 2)} />
                <input value={row[3]} onChange={(e) => handleInputChange(e, 3)} />
                <input value={row[4]} onChange={(e) => handleInputChange(e, 4)} />
                <input value={row[5]} onChange={(e) => handleInputChange(e, 5)} />
                <input value={row[6]} onChange={(e) => handleInputChange(e, 6)} />
            </>
        );
    };

    return (
        <div id="PopupMainDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16" onClick={handleClick}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            <h2>Edit {mode === 'License' ? 'License' : 'Licensing'}</h2>
            <div id='divLicenseDetailsTitle'>
                {mode === 'License' ? (
                    <>
                        <p><strong>ID</strong></p>
                        <p><strong>Amount</strong></p>
                        <p><strong>Available</strong></p>
                        <p><strong>Start Date</strong></p>
                        <p><strong>Expiration Date</strong></p>
                        <p><strong>PO (new)</strong></p>
                        <p><strong>PO (old)</strong></p>
                        <p><strong>Subscription Pack</strong></p>
                    </>
                ) : (
                    <>
                        <p><strong>E-Mail</strong></p>
                        <p><strong>Abteilung</strong></p>
                        <p><strong>Unternehmen</strong></p>
                        <p><strong>Subscription Pack</strong></p>
                        <p><strong>Expiration Date</strong></p>
                        <p><strong>PO (new)</strong></p>
                        <p><strong>PO (old)</strong></p>
                    </>
                )}
            </div>
            <div id='divLicenseDetails'>
                {renderInputs()}
            </div>
            <div id='PopupButtons'>
                <p id='UpdateButton'>Update</p>
                <p className="DeleteButton">Delete</p>
            </div>
        </div>
    );
};

export default Popup;
