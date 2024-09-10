import './MainContent.css'
import Table from './Table';
import TableLicense from './TableLicense'
import React, {useEffect, useState} from "react";
export default function MainContent() {

    const [mode, setMode] = useState('License');
    const [modeButton, setModeButton] = useState('Show Employee');


    const changeMode = () => {

        if(mode === 'License'){
            setMode('Employee');
            setModeButton('Show Licenses');
        }else{
            setMode('License');
            setModeButton('Show Employee');
        }

}

    return (
<>
<body className='MainContent'>



<div className="LizenzenStat">
Freie Lizenzen: 
<br/>
Vergebene Lizenzen: 
<br/>
Lizenzen insgesamt: 


</div>

<h1 className='Headline'>Licenses</h1>

<button className='SwitchTable' onClick={changeMode}>{modeButton}</button>

<input className='Searchbar'></input>
<button className='Search'>Search</button>

<div>
<button className='CreateButton'>Add New License</button>
</div>
</body> 
<Table mode={mode}/>
</>
    )
}

//<TableLicense />
