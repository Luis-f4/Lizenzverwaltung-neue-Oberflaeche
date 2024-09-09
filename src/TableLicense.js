import './Table.css';
import TableLicenseRow from './TableLicenseRow';
import { useEffect, useState } from 'react';
import Popup from './Popup';

const TableLicense = () => {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null); // Zustand für die ausgewählte Zeile

    useEffect(() => {
        fetch('http://localhost:8080/getAllLicenses', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('Bart:123')
            }
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleEditClick = (row) => {
        setSelectedRow(row); // Zeile speichern und Popup öffnen
    };

    const closePopup = () => {
        setSelectedRow(null); // Popup schließen
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Available</th>
                        <th>Start Date</th>
                        <th>Expiration Date</th>
                        <th>PO (new)</th>
                        <th>PO (old)</th>
                        <th>Subscription Pack</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <TableLicenseRow key={index} row={row} onEdit={handleEditClick} />
                    ))}
                </tbody>
            </table>

            {selectedRow && <Popup row={selectedRow} onClose={closePopup} />}
        </>
    );
}

export default TableLicense;
