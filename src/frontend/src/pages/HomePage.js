import {React,useEffect, useState} from 'react'
import { TeamListCard } from '../components/TeamListCard';

import './HomePage.scss'



export const HomePage = ()=>{

    const [teams, setTeams] = useState()

    useEffect(
        ()=>{

            const fetchTeams = async ()=>{

                const response = await fetch("http://localhost:8080/teams");
                const data = await response.json()
                setTeams(data)
            };

            fetchTeams();

        },[]
    )

    if(!teams) return null
    return(
        
        <div >
            <h1 className='appName'>IPL Dashboard</h1>
            <div className='HomePage'>
                {teams.map(team=><TeamListCard teamName = {team.teamName}/>)}
            </div>
        </div>
        
    )

}