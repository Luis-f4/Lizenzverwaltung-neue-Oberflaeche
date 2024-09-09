import React from 'react';
import './Popup.css';

const Popup = ({ row, onClose }) => {
    if (!row) return null;

    return (
        <div id="PopupMainDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16" onClick={onClose}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            <h2>Edit License</h2>
            <div>
                <p><strong>ID:</strong> {row[0]}</p>
                <p><strong>Amount:</strong> {row[1]}</p>
                <p><strong>Available:</strong> {row[2]}</p>
                <p><strong>Start Date:</strong> {row[7]}</p>
                <p><strong>Expiration Date:</strong> {row[3]}</p>
                <p><strong>PO (new):</strong> {row[4]}</p>
                <p><strong>PO (old):</strong> {row[5]}</p>
                <p><strong>Subscription Pack:</strong> {row[6]}</p>
            </div>
        </div>
    );
}

export default Popup;
