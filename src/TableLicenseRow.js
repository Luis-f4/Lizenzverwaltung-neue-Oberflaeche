import EditButton from "./EditButton";

const TableRow = ({ row, onEdit, mode }) => {
    const commonCells = [
        <td key={0}>{row[0]}</td>,
        <td key={1}>{row[1]}</td>,
        <td key={2}>{row[2]}</td>,
        mode === 'License' && <td key={7}>{row[7]}</td>,
        <td key={3}>{row[3]}</td>,
        <td key={4}>{row[4]}</td>,
        <td key={5}>{row[5]}</td>,
        <td key={6}>{row[6]}</td>
    ].filter(Boolean); // filter(Boolean) entfernt null-Werte

    return (
        <tr>
            {commonCells}
            <EditButton onClick={() => onEdit(row)} />
        </tr>
    );
}

export default TableRow;
