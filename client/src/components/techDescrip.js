import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRight from '@material-ui/icons/ArrowRight';

export default function techDescrip(props) {

    return (
        <ListItem style={{ color: 'white'}}>
            <ArrowRight style={{color: '#607d8b'}} />
            <ListItemText primary={props.title}/>
        </ListItem>
    )
}