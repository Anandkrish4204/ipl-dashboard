import {React} from 'react'
import {Link} from 'react-router-dom'



export const TeamCard = ({matchArg, teamName})=>{

    if(!matchArg) return null
    const otherTeam  = matchArg.team1 === teamName ? matchArg.team2 : matchArg.team1
    const otherTeamRoute = `/teams/`+otherTeam
    return(
        <div className="TeamCard">
            <h3>Latest Matches</h3>
            <h1><Link to={otherTeamRoute}>vs {otherTeam}</Link></h1>
            <h2>{matchArg.date}</h2>
            <h3>at {matchArg.venue}</h3>
            <h3>{matchArg.winner} won by {matchArg.resultMargin} {matchArg.result}</h3>
        </div>
    );
}
