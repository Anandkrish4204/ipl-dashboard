package com.anand.ipldashboard.data;

import com.anand.ipldashboard.common.Constants;
import com.anand.ipldashboard.model.Match;
import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;

public class InputProcessor implements ItemProcessor<MatchInput, Match> {

    @Override
    public Match process(MatchInput matchInput) throws Exception {
        Match match = new Match() ;
        String firstInningsTeam;
        String secondInningsTeam;
        match.setId(Long.parseLong(matchInput.getId()));
        match.setCity(matchInput.getCity());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setPlayerOfMatch(matchInput.getPlayerOfMatch());
        match.setVenue(matchInput.getVenue());

        if(Constants.BAT.equals(matchInput.getTossDecision())){
            firstInningsTeam = matchInput.getTossWinner();
            secondInningsTeam = firstInningsTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2():matchInput.getTeam1();
        }else{
            secondInningsTeam = matchInput.getTossWinner();
            firstInningsTeam = secondInningsTeam.equals(matchInput.getTeam2()) ? matchInput.getTeam1(): matchInput.getTeam2();
        }

        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);

        match.setTossWinner(matchInput.getTossWinner());
        match.setWinner(matchInput.getWinner());
        match.setResult(matchInput.getResult());
        match.setResultMargin(matchInput.getResultMargin());
        match.setMethod(matchInput.getMethod());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());

        return match;
    }
}
