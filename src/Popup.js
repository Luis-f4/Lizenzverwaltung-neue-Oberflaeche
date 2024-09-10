import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ row, onClose }) => {
    // Initialisiere den Hook mit einem leeren Array als Fallback, falls row null ist
    const [originalRow] = useState(row ? [...row] : []);

    // Früher return nach dem Hook-Aufruf
    if (!row) return null;

    const handleInputChange = (e, index) => {
        console.log(`Value at index ${index} changed to ${e.target.value}`);
        row[index] = e.target.value;
    };

    // Asynchrone Funktion, die die geänderten Werte zurücksetzt
    const resetChanges = () => {
        return new Promise((resolve) => {
            // Geänderte Werte auf die Originalwerte zurücksetzen
            for (let i = 0; i < row.length; i++) {
                row[i] = originalRow[i];
            }
            console.log('Changes reset');
            resolve();  // Promise wird erfüllt, wenn reset abgeschlossen ist
        });
    };

    const handleClick = async () => {
        await resetChanges();  // Warten bis die Änderungen zurückgesetzt sind
        onClose();  // Schließen der Popup
    };

    return (
        <div id="PopupMainDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16" onClick={handleClick}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            <h2>Edit License</h2>

            <div id='divLicenseDetailsTitle'>
                <p><strong>ID</strong></p>
                <p><strong>Amount</strong></p>
                <p><strong>Available</strong></p>
                <p><strong>Start Date</strong></p>
                <p><strong>Expiration Date</strong></p>
                <p><strong>PO (new)</strong></p>
                <p><strong>PO (old)</strong></p>
                <p><strong>Subscription Pack</strong></p>
            </div>

            <div id='divLicenseDetails'>
                <input value={row[0]} onChange={(e) => handleInputChange(e, 0)} />
                <input defaultValue={row[1]} onChange={(e) => handleInputChange(e, 1)} />
                <input value={row[2]} onChange={(e) => handleInputChange(e, 2)} />
                <input defaultValue={row[7]} onChange={(e) => handleInputChange(e, 7)} />
                <input defaultValue={row[3]} onChange={(e) => handleInputChange(e, 3)} />
                <input defaultValue={row[4]} onChange={(e) => handleInputChange(e, 4)} />
                <input value={row[5]} onChange={(e) => handleInputChange(e, 5)} />
                <input defaultValue={row[6]} onChange={(e) => handleInputChange(e, 6)} />
            </div>
            <div id='PopupButtons'>
                <p id='UpdateButton'>Update</p>
                <p className="DeleteButton">Delete</p>
            </div>
        </div>
    );
}

export default Popup;
