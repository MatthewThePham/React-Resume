import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


import TechDescrip from "./techDescrip";
import List from '@material-ui/core/List';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class AboutPage extends Component{

    render(){
        return(
            <div style={{backgroundColor: '#282c34'}}>

                <Typography variant="h3" component="h2" style={{ paddingTop:"5%", color: 'white'}}  >
                    <hr width="60%"></hr>
                    <b>About Me</b>
                    <hr width="70%"></hr>
                </Typography>

                <Grid container justify = 'space-evenly' style={{paddingTop:"3%", paddingLeft:"15%",paddingRight:"15%", textAlign:"left"}}>
                    
                    <Grid item md={5} style={{paddingLeft:"5%", paddingBottom:"10%"}}>
                        <Card elevation={20} style={{ backgroundColor: '#607d8b'}}>
                            <CardMedia
                                style = {{
                                    paddingTop:"50%",
                                    width:"100%"
                                }}

                                image={ 
                                    require("../asuEngineering.jpeg")
                                } 
                            />
                            <CardContent>
                                <Typography variant="subtitle2"  style={{ textAlign:"center", color: '#cfd8dc'}}>
                                    <i>Majoring in <b>Computer Science</b> at <b style={{color:"white"}}>Arizona State University</b>.</i>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={7} style={{paddingLeft:"2%"}}>
                        <Typography variant="subtitle1" style={{ textAlign:"left", color: '#cfd8dc',paddingBottom:"3%", paddingLeft:"5%"}}>
                            My name is <b style={{color:"white"}}>Matthew Pham</b>. I am a Software Engineer studying at ASU, who enjoys building web technologies products and loves to PC game.
                            I work with these languages and frameworks.
                        </Typography>

                        <Grid container justify="center">
                            <Grid item xs style={{paddingLeft:"3%", paddingRight:"3%"}}>
                                <List>
                                    <TechDescrip title="Node.JS"></TechDescrip>
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
                            <Grid item xs style={{paddingLeft:"3%"}}>
                                <List>
                                    <TechDescrip title="HTML/CSS"></TechDescrip>
                                    <TechDescrip title="JavaScript"></TechDescrip>
                                    <TechDescrip title="Json/API"></TechDescrip>
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
