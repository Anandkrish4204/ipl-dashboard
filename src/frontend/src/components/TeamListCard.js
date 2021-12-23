import {React} from 'react'
import { Link } from 'react-router-dom' 

import './TeamListCard.scss'

export const TeamListCard = ({teamName})=>{

    if(!teamName) return null
    return(
        <div className='TeamListCard'>
            <Link to={`/teams/${teamName}`}><h1>{teamName}</h1></Link>
        </div>
        
    )
}