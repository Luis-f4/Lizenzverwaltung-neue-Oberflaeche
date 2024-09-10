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

<h1 className='Headline'>Lizenzen</h1>

<button className='SwitchTable'>Alle Lizenzen anzeigen</button>
</body> 
<TableLicense />
</>
    )
}

