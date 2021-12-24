import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { TeamCard } from '../components/TeamCard';
import { YearList } from '../components/YearList';

import './MatchPage.scss'

export const MatchPage = ()=>{

    const [matches,setMatches] = useState();
    const {teamName,year} = useParams();
    useEffect(
        ()=>{

            const fetchMatchesByYear = async ()=>{
                const response = await fetch(`${process.env.REACT_APP_HOST}/team/${teamName}/matches?year=${year}`)
                const data = await response.json()
                setMatches(data)
            }
            fetchMatchesByYear()

        },[teamName,year]
    )

    if(!matches) return null;
    return(
        <div className="MatchPage">
            <div className='year-selector-section' > 
                <h3>Select Year</h3>
                <YearList teamName={teamName}/>
            </div>
            <div>
                <h1 className='match-header-section'>{teamName} matches in {year}</h1>
                {matches.map(match=> <TeamCard key={match.id} teamName={teamName} matchArg={match}/>)}
            </div>
            
        </div>
    )
}