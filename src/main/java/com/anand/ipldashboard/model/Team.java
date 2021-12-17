package com.anand.ipldashboard.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@ToString
@Getter
@Setter
@Entity
@NoArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long noOfMatches;
    private long noOfMatchesWon;
    @Transient
    private List<Match> matches;

    public Team(String teamName, long noOfMatches) {
        this.teamName = teamName;
        this.noOfMatches = noOfMatches;
    }
}
