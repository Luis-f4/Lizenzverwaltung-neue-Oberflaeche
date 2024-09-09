import './Table.css';
import TableLicenseRow from './TableLicenseRow';
import { useEffect, useState } from 'react';

const TableLicense = () => {
    const [data, setData] = useState([]);

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

    return (
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
                    <TableLicenseRow key={index} row={row} />
                ))}
            </tbody>
        </table>
    );
}

export default TableLicense;