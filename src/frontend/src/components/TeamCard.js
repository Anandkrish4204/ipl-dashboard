import {React} from 'react'
import {Link} from 'react-router-dom'
import './TeamCard.scss'



export const TeamCard = ({matchArg, teamName})=>{

    if(!matchArg) return null
    const otherTeam  = matchArg.team1 === teamName ? matchArg.team2 : matchArg.team1
    const otherTeamRoute = `/teams/`+otherTeam
    const isMatchWon = teamName === matchArg.winner
    return(
        <div className= {isMatchWon ? 'TeamCard won-card': 'TeamCard lost-card'} >
            <div>
                <div className='opponentName'>
                    <span className='vs'>vs</span>
                    <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                </div>
                <div className='match-date'>
                    <h2>{matchArg.date}</h2>
                </div>
                <div className='match-venue'>
                    <h3>at {matchArg.venue}</h3>
                </div>
                
                <div className='match-result'>
                    <h3>{matchArg.winner} won by {matchArg.resultMargin} {matchArg.result}</h3> 
                </div>
            </div>
            <div className='additional-detail'>
                <h3>First Innings</h3>
                <p>{matchArg.team1}</p>
                <h3>Second Innings</h3>
                <p>{matchArg.team2}</p>
                <h3>Man of the Match</h3>
                <p>{matchArg.playerOfMatch}</p>
                <h3>Umpires</h3>
                <p>{matchArg.umpire1},{matchArg.umpire2}</p>
            </div>
            
            
        </div>
    );
}
