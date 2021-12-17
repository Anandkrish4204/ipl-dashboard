package com.anand.ipldashboard.data;

import com.anand.ipldashboard.model.Team;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.HashMap;
import java.util.Map;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private final EntityManager entityManager;

    @Autowired
    public JobCompletionNotificationListener(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        Map<String, Team> teamData = new HashMap<>();
        if(jobExecution.getStatus() == BatchStatus.COMPLETED){
            entityManager.createQuery("SELECT m.team1, count(*) from Match m group by m.team1",Object[].class)
                    .getResultList()
                    .stream()
                    .map(e -> new Team((String)e[0],(long)e[1]))
                    .forEach(team -> teamData.put(team.getTeamName(),team));

            entityManager.createQuery("SELECT m.team2, count(*) from Match m group by m.team2",Object[].class)
                    .getResultList()
                    .forEach(e ->{
                        Team team = teamData.get((String) e[0]);
                        team.setNoOfMatches(team.getNoOfMatches()+(long)e[1]);
                    });

            entityManager.createQuery("SELECT m.winner, count(*) from Match m group by m.winner",Object[].class)
                    .getResultList()
                    .forEach(e->{
                        Team team  = teamData.get((String) e[0]);
                        if(team != null)
                            team.setNoOfMatchesWon((long)e[1]);
                    });

            teamData.values().forEach(entityManager::persist);
            teamData.values().forEach(System.out::println);


        }

    }
}
