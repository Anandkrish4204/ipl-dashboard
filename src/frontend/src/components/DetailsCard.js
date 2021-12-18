import React from 'react'
import {Link} from 'react-router-dom'

export const DetailsCard = ({teamName, matchArg})=>{

    if(!matchArg) return null;
    const otherTeam  = matchArg.team1 === teamName ? matchArg.team2 : matchArg.team1
    const otherTeamRoute = `/teams/`+otherTeam
    return (
        <div className="DetailsCard">
            <h3><Link to={otherTeamRoute}>vs {otherTeam}</Link></h3>
            <p>{matchArg.winner} won by {matchArg.resultMargin} {matchArg.result}</p>
        </div>
    );

}