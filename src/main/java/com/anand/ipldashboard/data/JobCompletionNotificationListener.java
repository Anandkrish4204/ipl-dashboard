package com.anand.ipldashboard.data;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        if(jobExecution.getStatus()== BatchStatus.COMPLETED){
            jdbcTemplate.query("SELECT date,team1,team2,winner FROM match",
                    (rs,row)-> "Date: "+rs.getString(1)+" First Batting "+rs.getString(2)
                            +" Second Batting "+rs.getString(3)+ " Winner is "+ rs.getString(4))
                    .forEach(System.out::println);
        }

    }
}
