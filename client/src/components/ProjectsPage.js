import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import CardProj from './cardDescrip';

class ProjectsPage extends Component{
   
    render(){
        return(
            <div style={{ paddingTop:"5%", paddingBottom: "1%", backgroundColor: '#282c34'}}>
                <Typography variant="h3" component="h2" style={{ color: 'white'}}  >
                    <hr width="70%"></hr>
                    <b>Projects</b>
                    <hr width="85%"></hr>
                </Typography>

                <Grid container justify = 'space-evenly'style={{ paddingTop:"1%" ,paddingLeft:"2%", paddingRight:"2%",}}>     
                    <Grid item xs={7} md={3} style={{paddingBottom:"4%"}}>
                        <CardProj 
                            imagePath="alexaLogo.png"
                            
                            title="Tech For Good Hackathon"
                            date="Fall 2018"
                            decription="Alexa voice navigation skill using OpenStreetMap REST API."
                            technologyUsed="NodeJS, Lambda AWS"
                            link="https://gitlab.com/MatthewPh/ProjectNearMe"
                        />
                    </Grid>

                    <Grid item xs={7} md={3} style={{paddingBottom:"4%"}} >
                        <CardProj 
                            imagePath="reactLogo.svg"
                            
                            title="Messaging Web App"
                            date="Fall 2019"
                            decription="Fullstack application using React framework with Express backend."
                            technologyUsed="Javascript, React, Express, SocketIO, NodeJS"
                            link="https://gitlab.com/MatthewPh/react-socketio"
                        />
                    </Grid>

                    <Grid item xs={7} md={3} style={{paddingBottom:"4%"}}>
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

                <Grid container justify = 'space-evenly'style={{ paddingTop:"1%" ,paddingLeft:"2%", paddingRight:"2%",}}>     
                    <Grid item xs={7} md={3} style={{paddingBottom:"4%"}} >
                        <CardProj 
                            imagePath="reactLogo.svg"
                            
                            title="Resume Website"
                            date="Summer/Fall 2019"
                            decription="Code used to create this fullstack website."
                            technologyUsed="Javascript, React, Express, NodeJS"
                            link="https://gitlab.com/MatthewPh/react-resume"
                        />
                    </Grid>
                </Grid>

            </div>
        )
    };
}

export default ProjectsPage;