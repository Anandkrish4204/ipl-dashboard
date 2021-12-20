package com.anand.ipldashboard.repository;

import com.anand.ipldashboard.model.Match;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match,Long> {


    List<Match> findByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    @Query("SELECT m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date between :startDate and :endDate order by date desc")
    List<Match> getMatchesByYear(@Param("teamName") String teamName, @Param("startDate") LocalDate startYear, @Param("endDate") LocalDate endYear);


    default List<Match> getLastFewMatches(String teamName, int count){
        Pageable pageable = Pageable.ofSize(count);
        return findByTeam1OrTeam2OrderByDateDesc(teamName,teamName,pageable);
    }
}
