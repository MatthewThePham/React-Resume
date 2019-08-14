//TODO fix the scaling of text of image of photo

import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import logo from '../circle-cropped.png';
import './App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import GithubButton  from './githubButton'


class Homepage extends Component{

    render() {
        return (
          <header className="App-header">
            <Grid container justify = 'space-evenly' flexShrink={1} style={{paddingTop:"10%",paddingBottom:"5%", paddingLeft:"20%",paddingRight:"5%", textAlign:"left"}}>
              <Fade in={true} timeout={2000}>
                <Grid item md>
                  <Typography variant="h1" style={{fontWeight:"bold" ,flexShrink: 1 }}>
                    Matthew 
                    <br/>
                    Pham
                  </Typography>
                  
                  <Typography variant="h2">
                      Software Developer in Phoenix, AZ
                  </Typography>

                  <Typography variant="h6"  style={{paddingBottom:"3%"}}>
                      Computer Science Major at Arizona State
                  </Typography>
                  
                  <GithubButton link="https://gitlab.com/users/MatthewPh/projects" />  
                </Grid>  
              </Fade>

              <Fade in={true} timeout={2000}>
                <Grid item md style={{ paddingTop:"5%"}}>
                  <img src={logo} align="left" className="App-logo" alt="logo"/>
                </Grid>  
              </Fade>

            </Grid>
          </header>
        )
    }
}

export default Homepage;
