import './MainContent.css'
import Table from './Table';
import TableLicense from './TableLicense'
import React, {useEffect, useState} from "react";
import CreatePopup from './CreatePopup'
export default function MainContent() {

    const [mode, setMode] = useState('License');
    const [modeButton, setModeButton] = useState('Show Employee');
    const [title, setTitle] = useState('Licenses');
    const [createPopupOn, setCreatePopupOn] = useState(false);
    const [addButtonTitle, setAddButtonTitle] = useState('Add new license');

    
    const changeMode = () => {

        if(mode === 'License'){
            setMode('Employee');
            setModeButton('Show Licenses'); 
            setTitle('Licensing');
            setAddButtonTitle('Add new licensing');
            
        }else{
            setMode('License');
            
            setModeButton('Show Employee');
            setTitle('Licenses');
            setAddButtonTitle('Add new license');
            
        }

}

    const closePopup = () => {
        setCreatePopupOn(false); 
    };

    const handleClick = () => {
        setCreatePopupOn(true)
    }
    return (
<>
<body className='MainContent'>



<div className="LizenzenStat">
Available licenses:
<br/>
Allocated licenses:
<br/>
Total licenses:


</div>

<h1 className='Headline'>{title}</h1>

<br/>
<br/>
<br/>
<br/>

<button className='SwitchTable' onClick={changeMode}>{modeButton}</button>

<input type='text' className='Searchbar' placeholder="Einträge durchsuchen" /> {/* onChange={handleChange}
     onKeyDown={handleSearchEnter} */}


<button type="button" className='Search' >Search</button> {/* onClick={handleSearch} */}

<div>
<button className='CreateButton' onClick={handleClick}>{addButtonTitle}</button>
</div>
</body> 
<Table mode={mode}/>

{createPopupOn && <CreatePopup onClose={closePopup} mode={mode} />}
</>
    )
}


