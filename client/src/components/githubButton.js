import React from 'react';
import logoImage from '../GitHub-Mark-Light-32px.svg'
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

export default function githubButton(props){
    return(
        <Grow in={true} timeout={3500}>
            <Button
                size='small'
                color="primary"
                variant="contained"
                href={props.link}
                >
                GitHub  &nbsp;
                < img src={logoImage} height="20" width="30" />
            </Button>
        </Grow>

    );
}