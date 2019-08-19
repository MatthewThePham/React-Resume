import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import GithubButton  from './githubButton'
import { flexbox } from '@material-ui/system';

export default function cardDescrip(props) {
    
    //because can't dynamically load values using require, must return const
    //ie cant do require({INSERT_VAR_HERE}), have to do require({"../path"})
    function imageReturned(){
        if( props.imagePath === "reactLogo.svg"){
            return require("../reactLogo.svg")
        }
        else if( props.imagePath === "alexaLogo.png"){
            return require("../alexaLogo.svg")
        }
    }

    return(
        <Card style={{ backgroundColor: '#455a64'}}>
            <CardMedia
                style = {{
                    paddingTop:"60%",
                    width:"100%"
                }}
                image={ 
                    imageReturned(props.imagePath)
                }   
                title="React"  
            />

            <CardContent style={{color: '#cfd8dc'}}>

                <Typography variant="h5" component="h2" style={{color: 'white'}} >
                    {props.title}
                </Typography>
                <Typography style={{color: '#90a4ae'}}>
                    {props.date}
                </Typography>
                <Typography variant="body" component="p">
                    {props.decription}
                    <br />
                </Typography>
            </CardContent>

            <CardContent style={{ backgroundColor: '#607d8b' }}>
                 <Typography variant="body2" style={{color: '#cfd8dc'}}>
                    {props.technologyUsed}
                </Typography>

                <GithubButton link={props.link}/>
            </CardContent>
        </Card>
    );
}