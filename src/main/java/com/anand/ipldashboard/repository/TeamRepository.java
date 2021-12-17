package com.anand.ipldashboard.repository;

import com.anand.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long> {

    public Team findByTeamName(String teamName);
}
