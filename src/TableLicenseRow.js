import EditButton from "./EditButton";

const TableRow = ({ row, onEdit }) => {
    return (
        <tr>
            <td>{row[0]}</td> {/**ID */}
            <td>{row[1]}</td> {/**Amount */}
            <td>{row[2]}</td> {/**Available */}
            <td>{row[7]}</td> {/**Start Date */}
            <td>{row[3]}</td> {/**Expiration Date */}
            <td>{row[4]}</td> {/**PO (new) */}
            <td>{row[5]}</td> {/**PO (old) */}
            <td>{row[6]}</td> {/**Subscription Pack */}
            <EditButton onClick={() => onEdit(row)} />
        </tr>
    );
}

export default TableRow;
