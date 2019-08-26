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

                <Typography variant="h2" component="h2" style={{ paddingTop:"5%", color: 'white'}}  >
                    <hr width="20%"></hr>
                    <b>About Me</b>
                    <hr width="30%"></hr>
                </Typography>

                <Grid container style={{paddingTop:"3%", paddingLeft:"15%",paddingRight:"15%", textAlign:"left"}}>
                    
                    <Grid item md={5} style={{paddingLeft:"5%", paddingBottom:"10%"}}>
                        <Card elevation='20' style={{ backgroundColor: '#455a64'}}>
                            <CardMedia
                                style = {{
                                    paddingTop:"50%",
                                    width:"100%"
                                }}

                                image={ 
                                    require("../asuEngineering.jpeg")
                                } 
                            />
                            <CardContent style={{color: '#cfd8dc'}}>
                                <Typography variant="h6"  style={{ textAlign:"center", color: '#cfd8dc'}}>
                                    Majoring in Computer Science at <b>Arizona State</b>.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={7} style={{paddingLeft:"2%"}}>

                        <Typography variant="h6" style={{ textAlign:"left", color: '#cfd8dc',paddingBottom:"3%", paddingLeft:"5%"}}>
                            My name is <b>Matthew Pham</b>. I am a Software Engineer at ASU, who enjoys to build products with web technologies and PC gaming.
                            I work with the following languages and frameworks.
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
