import {React} from 'react'
import { Link } from 'react-router-dom'

import './YearList.scss'

export const YearList = ({teamName})=>{


    let yearList = []
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;

    for(let i= startYear; i<= endYear; i++){
        yearList.push(i)
    }

    return (
       
        <ol className='YearList'>
            {yearList.map(year=>(
                <li key={year}>
                    <Link to={`/teams/${teamName}/matches/${year}`} >{year}</Link>
                </li>
            ))}
        </ol>
        
        
    )
}