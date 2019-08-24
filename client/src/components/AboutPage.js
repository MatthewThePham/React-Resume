import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


import TechDescrip from "./techDescrip";
import List from '@material-ui/core/List';


class AboutPage extends Component{
   
    render(){
        return(
            <div style={{backgroundColor: '#282c34'}}>
                <Typography variant="h2" component="h2" style={{ paddingTop:"12%", color: 'white'}}  >
                    <b>About Me</b>
                </Typography>

                <Grid container style={{paddingTop:"5%",paddingBottom:"5%", paddingLeft:"10%",paddingRight:"10%", textAlign:"left"}}>
                    <Grid item md>
                        <Typography variant="h6"  style={{ color: '#cfd8dc',paddingBottom:"3%", paddingLeft:"5%"}}>
                            Hello, my name is Matthew Pham. I am a Software Engineer, majoring in Computer Science at <b>Arizona State</b>.
                            My hobbies include tinkering with web based technologies and gaming.

                            I am knowledgeable in the following languages and frameworks.
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs style={{paddingLeft:"3%", paddingRight:"3%"}}>
                            <List>
                                <TechDescrip title="NodeJS"></TechDescrip>
                                <TechDescrip title="Java"></TechDescrip>
                                <TechDescrip title="C/C++"></TechDescrip>
                            </List>
                        </Grid> 
                        <Grid item xs style={{paddingLeft:"3%"}}>
                            <List>
                                <TechDescrip title="React"></TechDescrip>
                                <TechDescrip title="Express"></TechDescrip>
                                <TechDescrip title="Lambda AWS"></TechDescrip>
                            </List>
                        </Grid> 
                    </Grid> 
                    </Grid> 

                </Grid>
            </div>
        )
    }
}

export default AboutPage;
