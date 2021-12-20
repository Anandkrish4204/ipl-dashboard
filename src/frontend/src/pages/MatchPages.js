import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { TeamCard } from '../components/TeamCard';

export const MatchPage = ()=>{

    const [matches,setMatches] = useState();
    const {teamName,year} = useParams();
    useEffect(
        ()=>{

            const fetchMatchesByYear = async ()=>{
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
                const data = await response.json()
                setMatches(data)
            }
            fetchMatchesByYear()

        },[teamName,year]
    )

    if(!matches) return null;
    return(
        <div className="MatchPage">
            <h1>Match Page</h1>
            {matches.map(match=> <TeamCard teamName={teamName} matchArg={match}/>)}
        </div>
    )
}