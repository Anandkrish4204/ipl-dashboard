import {React,useEffect,useState} from 'react';
import { DetailsCard } from '../components/DetailsCard';
import { TeamCard } from '../components/TeamCard';
import { useParams} from 'react-router-dom';


export const TeamPage = ()=> {

    const[team,setTeam] = useState({matches:[]})
    const {teamName} = useParams();
    
    useEffect(
        ()=>{
            const fetchMatches = async ()=>{
                
                const response = await fetch(`http://localhost:8080/team/${teamName}`)
                const data = await response.json()
                setTeam(data)
            }
            fetchMatches()
        },[teamName]
    )


  return (
    <div className="TeamPage">
      <h2>{team.teamName}</h2>  
      <TeamCard teamName = {teamName} matchArg = {team.matches[0]}/>
      <h2>Latest Matches -2</h2>
      {team.matches.slice(1).map(match=><DetailsCard teamName ={teamName} matchArg={match}/>)}
    </div>
  );
}


