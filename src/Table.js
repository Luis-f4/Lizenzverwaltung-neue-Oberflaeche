import TableLicense from "./TableLicense";
const Table = ({mode}) => {

    
    if(mode === 'License'){
        return(
            <TableLicense />
        );
    }else{
        return(
            <p>Andere tabelle</p>
        )
    } 

}
 
export default Table;