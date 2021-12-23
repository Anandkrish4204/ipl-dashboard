import {React,useEffect,useState} from 'react';
import { DetailsCard } from '../components/DetailsCard';
import { TeamCard } from '../components/TeamCard';
import { useParams} from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart'

import './TeamPage.scss'


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
      <div className='team-name-section'>
        <h1 className='team-name'>{team.teamName}</h1>
      </div>
      <div className='win-loss-section'>
        Win/Loss
        <PieChart
          data={[
            { title: 'Losses', value: team.noOfMatches - team.noOfMatchesWon, color: 'rgb(177, 55, 55)' },
            { title: 'Wins', value: team.noOfMatchesWon, color: 'rgb(41, 124, 41)' }
          ]}
        />
      </div>
      <div className='match-detail-section'>
        <h3>Latest Matches</h3>
        <TeamCard teamName = {teamName} matchArg = {team.matches[0]}/>
        </div>
      {team.matches.slice(1).map(match=><DetailsCard teamName ={teamName} matchArg={match}/>)}
      <div className='more-link'>
        <a href='#'>More {'>'} </a>
      </div>
    </div>
  );
}


