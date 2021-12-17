package com.anand.ipldashboard.repository;

import com.anand.ipldashboard.model.Match;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MatchRepository extends CrudRepository<Match,Long> {


    List<Match> findByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);


    default List<Match> getLastFewMatches(String teamName, int count){
        Pageable pageable = Pageable.ofSize(count);
        return findByTeam1OrTeam2OrderByDateDesc(teamName,teamName,pageable);
    }
}
