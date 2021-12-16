package com.anand.ipldashboard.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@ToString
@Getter
@Setter
@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long noOfMatches;
    private long noOfMatchesWon;

    public Team(String teamName, long noOfMatches) {
        this.teamName = teamName;
        this.noOfMatches = noOfMatches;
    }
}
