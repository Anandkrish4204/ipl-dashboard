import React from 'react'
import {Link} from 'react-router-dom'

import './DetailsCard.scss'

export const DetailsCard = ({teamName, matchArg})=>{

    if(!matchArg) return null;
    const otherTeam  = matchArg.team1 === teamName ? matchArg.team2 : matchArg.team1
    const otherTeamRoute = `/teams/`+otherTeam
    const isMatchWon = teamName === matchArg.winner
    return (
        <div className={isMatchWon ? "DetailsCard won-card":"DetailsCard lost-card"}>
            <span className='vs'>vs</span>
            <h3><Link to={otherTeamRoute}>{otherTeam}</Link></h3>
            <p className='match-result'>{matchArg.winner} won by {matchArg.resultMargin} {matchArg.result}</p>
        </div>
    );

}