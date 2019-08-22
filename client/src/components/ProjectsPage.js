import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import { makeStyles } from '@material-ui/core/styles';
import CardProj from './cardDescrip';

class ProjectsPage extends Component{
   
    render(){
        return(
            <div style={{ paddingTop:"15%", paddingBottom: 120, backgroundColor: '#282c34'}}>
                <Typography variant="h2" component="h2" style={{ color: 'white', paddingBottom: "2%"}}  >
                    <b>Projects</b>
                </Typography>

                <Grid container justify = 'space-evenly' alignItems="stretch" style={{ paddingTop:"5%"}}>     
                    <Grid item xs={8} sm={3}>
                        <CardProj 
                            imagePath="alexaLogo.png"
                            
                            title="Tech For Good Hackathon"
                            date="Fall 2018"
                            decription="Alexa voice navigation skill using OpenStreetMap REST API."
                            technologyUsed="NodeJS, Lambda AWS"
                            link="https://gitlab.com/MatthewPh/ProjectNearMe"
                        />
                    </Grid>

                    <Grid item xs={8} sm={3}>
                        <CardProj 
                            imagePath="reactLogo.svg"
                            
                            title="React Resume Website"
                            date="Summer/Fall 2019"
                            decription="Fullstack application using React framework with Express backend."
                            technologyUsed="Javascript, React, Express, NodeJS"
                            link="https://gitlab.com/MatthewPh/"
                        />
                    </Grid>

                    <Grid item xs={8} sm={3}>
                        <CardProj 
                            imagePath="alexaLogo.png"
                            
                            title="Counter Club"
                            date="Summer 2018"
                            decription="Alexa Skill interfacing dynamic speech input with DynamoDB."
                            technologyUsed="NodeJS, NoSQL DynamoDB, Lambda AWS"
                            link="https://gitlab.com/MatthewPh/CounterClub"
                        />
                    </Grid>

                </Grid>

                <Grid container justify = 'space-evenly' style={{ paddingTop:40}}>    
                </Grid>

            </div>
        )
    };
}

export default ProjectsPage;