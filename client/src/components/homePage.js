//TODO fix the scaling of text of image of photo

import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import logo from '../circle-cropped.png';
import './HomePage.css';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import GithubButton  from './githubButton'
import Button from '@material-ui/core/Button';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import Grow from '@material-ui/core/Grow';

class Homepage extends Component{

    render() {
        return (
          <header className="App-header">
            <Grid container justify = 'center' style={{paddingTop:"10%",paddingBottom:"7%", paddingLeft:"24%",paddingRight:"17%", textAlign:"left"}}>
                <Grid item md>

                  <Fade in={true} timeout={2000}>
                    <Typography variant="h1" style={{fontSize:75, fontWeight:"bold" }}>
                      Matthew 
                      <br/>
                      Pham
                    </Typography>
                  </Fade>

                  <Fade in={true} timeout={4500}>
                    <Typography variant="h3"  style={{color: '#cfd8dc', paddingBottom:"3%"}}>
                        Software Developer
                    </Typography>
                  </Fade>
                  
                  <Fade in={true} timeout={5500}>
                    <Typography variant="h3" style={{color: '#607d8b', paddingBottom:"3%"}}>
                      In Phoenix, AZ
                    </Typography>
                  </Fade>

                  <hr width="225px" align="left"></hr>

                  <GithubButton link="https://gitlab.com/users/MatthewPh/projects" />  

                  &nbsp;

                  <Grow in={true} timeout={3500}>
                    <Button
                      size='small'
                      color="primary"
                      variant="contained"
                      href={'https://drive.google.com/file/d/1VlsMCqk9Q4rO6KLlNGOFVmUuDGfEkKss/view?usp=sharing'}
                      >
                      Resume  &nbsp;
                      <DescriptionOutlinedIcon style={{ height:"20", width:"30"}}/>
                    </Button>
                  </Grow>
                  <hr width="225px" align="left"></hr>


                </Grid>  

              <Fade in={true} timeout={2000}>
                <Grid item md={6} style={{ paddingTop:"5%", paddingRight:"20%"}}>
                  <img src={logo} style={{align:"left"}} className="App-logo" alt="logo"/>
                </Grid>  
              </Fade>

            </Grid>
          </header>
        )
    }
}

export default Homepage;
