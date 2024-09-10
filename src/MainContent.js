import './MainContent.css'
import TableLicense from './TableLicense'

export default function MainContent() {
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

<button className='SwitchTable'>Show all Licenses</button>

<input className='Searchbar'></input>
<button className='Search'>Search</button>

<div>
<button className='CreateButton'>Add New License</button>
</div>
</body> 
<TableLicense />
</>
    )
}

