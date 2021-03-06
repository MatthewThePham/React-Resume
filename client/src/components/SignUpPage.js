import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import circleAvatar from '../IconOutlinedEmail.svg';

import Flip from 'react-reveal/Flip';

//used to check if user input is valid
var validator = require('validator');

function MadeWithLove() {   
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Powered by ⚡ React ⚡'}
      <Link color="inherit" href="https://gitlab.com/MatthewPh/">
        Matthew Pham
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
   palette: {
    type: 'dark',
    }
  },
  paper: {
    paddingTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: '#455a64',
    margin: theme.spacing(3, 0, 2),
  },
  inputLabel: {
    color: "#cfd8dc"
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #607d8b inset",
      WebkitTextFillColor:"white"
    },
    color: "white"
  }
}));


export default function SignUp() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message:'',
    submission:false,

    nameError:false,
    nameErrorMessage:'',
    emailError:false,
    emailErrorMessge:'',
    messageError:false,
    messageErrorMessage:''
  });

  function validateForm() {
    var error = {
      nameError:false,
      nameErrorMessage:'',

      emailError:false,
      emailErrorMessge:'',

      messageError:false,
      messageErrorMessage:''
    }

    //checks empty input
    if(!values.name.length){
      error.nameError = true;
      error.nameErrorMessage = "Requires name"
    }
    else if( !validator.isAlpha(values.name) && !values.name.includes(' ') ){
      error.nameError = true;
      error.nameErrorMessage = "Invalid name"
    }

    if(!values.email.length ){
      error.emailError = true;
      error.emailErrorMessge = "Requires email"
    }
    else if( !validator.isEmail(values.email) ){
      error.emailError = true;
      error.emailErrorMessge = "Invalid email"
    }

    if(!values.message.length){
      error.messageError = true;
      error.messageErrorMessage = "Requires message"
    }

    setValues({ ...values, ...error});
    
    //if we use instead, value.nameError, since javascript is asynchornous
    // it will submit before updating causing a false positive intitally
    // ie it sends data even tho form is invalid

    if( (!error.nameError) && (!error.emailError) && (!error.messageError)){
      return false
    }
    else{
      return true
    }

  }



  function handleSubmit (e) {
   e.preventDefault();

   var check = validateForm();

   if(!check){
   //********* sends actual call to express backend

    const response = fetch('/api/send', {
    
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message : values.message
      })

    })
    //const body = await response.text();
    console.log("data sent")
    setValues({ ...values, submission:true });    
   } 
   else{
    console.log("error")
   }

  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div style={{backgroundColor: '#607d8b'}}>
    <Container component="main" maxWidth="xs">

      <CssBaseline />
      <div className={classes.paper} >
        <Avatar
          src={circleAvatar}
        />

        { 
        ! values.submission 
        ?
        <Fragment>
          <Typography component="h1" variant="h5" className={classes.input}>
            Contact Me
          </Typography>

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    className: classes.input
                  }}

                  InputLabelProps={{
                    className: classes.inputLabel
                  }}
                  variant="outlined" 
                  required
                  fullWidth
                  id="firstName"
                  label="Contact Name"
                  name="firstName"
                  autoComplete="fname"
                  error={values.nameError}
                  helperText={values.nameErrorMessage}
                  onChange={handleChange('name')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                inputProps={{
                  className: classes.input
                }}

                InputLabelProps={{
                  className: classes.inputLabel
                }}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={values.emailError}
                  helperText={values.emailErrorMessge}
                  onChange={handleChange('email')}

                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  inputProps={{
                    className: classes.input
                  }}

                  InputLabelProps={{
                    className: classes.inputLabel
                  }}
                  variant="outlined"
                  multiline
                  rows="5"
                  required fullWidth
                  name="multiline"
                  label="Message"
                  id="Multiline"
                  error={values.messageError}
                  helperText={values.messageErrorMessage}
                  onChange={handleChange('message')}
                />
              </Grid>
            </Grid>
            
            <Flip left>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} 
            >
              Send Email
            </Button>
            </Flip>
          </form>
        </Fragment>
        :

        <Fragment>
            <Fade in={true} timeout={1000}>
              <Typography component="h3" variant="h5" className={classes.input}>
                Thanks for the response!
              </Typography>
            </Fade>
            <Fade in={true} timeout={1000}>
              <Typography variant="subtitle1" className={classes.inputLabel} gutterBottom>
                We will get back to you shortly.
              </Typography>
            </Fade>
        </Fragment>
        }
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </div>
  );
}