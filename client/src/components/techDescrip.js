import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';

export default function techDescrip(props) {

    return (
        <ListItem style={{ color: 'white'}}>
            <ArrowRight style={{color: '#607d8b'}} />

            <ListItemText 
                primary={<Typography variant="subtitle2" >{props.title}</Typography>}
            />
        </ListItem>
    )
}