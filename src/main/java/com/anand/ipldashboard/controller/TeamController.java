package com.anand.ipldashboard.controller;

import com.anand.ipldashboard.model.Match;
import com.anand.ipldashboard.model.Team;
import com.anand.ipldashboard.repository.MatchRepository;
import com.anand.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {


    private final TeamRepository teamRepository;
    private final MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.getLastFewMatches(teamName,4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesByYear(@PathVariable String teamName, @RequestParam int year){
        LocalDate startDate = LocalDate.of(year,1,1);
        LocalDate endDate = LocalDate.of(year+1,1,1);
        return matchRepository.getMatchesByYear(teamName,startDate,endDate);
    }

}
