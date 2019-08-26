import React, { Component } from 'react';

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';


//example from material-ui
import Homepage from './components/homePage';
import SignUp from './components/SignUpPage';
import ProjectPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';


//fancy UI hiding for navbar
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


class App extends Component{

  componentDidMount(){
    //test to see if server connects
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  state = {
    response: '',
    reference : "Test1",
  };

  handleChange = ( event, newValue)  => {
    //this.setState( {value : newValue});
    //const temp = this.state.refs;
    console.log(newValue);
    if( newValue === 0){
      this.refs.Home.scrollIntoView({behavior: "smooth",block: "center"});
    }
    else if(newValue === 1){
      this.refs.About.scrollIntoView({behavior: "smooth", block: "center"});
    }
    else if(newValue === 2){
      this.refs.Projects.scrollIntoView({behavior: "smooth", block: "center"});
    }
    else if(newValue === 3){
      this.refs.Contact.scrollIntoView({behavior: "smooth", block: "center"});
    }
  }

  callApi = async () => {
    const response = await fetch(`/get`);
    const body = await response.json();

    //if (response.status !== 200) throw Error(response.message);
      return body;
  };


  //what is seen by the user
  render() {
    return (
      <div className="App">

        <HideOnScroll>
          <AppBar style={{ backgroundColor: '#282c34' }} >
              <Tabs
                value={false}
                onChange={this.handleChange}
                aria-label="simple tabs example"
                centered
              >
                <Grow in={true} timeout={1500}>
                  <Tab label="Home" style={{ minWidth: 100}}/>
                </Grow>

                <Grow in={true} timeout={2000}>
                  <Tab label="About" style={{minWidth: 100}}/>
                </Grow>

                <Grow in={true} timeout={3000}>
                  <Tab label="Works" style={{minWidth: 100}}/>
                </Grow>

                <Grow in={true} timeout={3500}>
                  <Tab label="Contact" style={{minWidth: 100}}/>
                </Grow>

              </Tabs>
          </AppBar>
        </HideOnScroll>

        <div>{this.state.response}</div>

          <div ref="Home">
            <Homepage/>
          </div>

        <div ref="About">
          <AboutPage/>
        </div>

        <div ref="Projects">
          <ProjectPage/>
        </div>

        <div ref="Contact">
          <SignUp/>
        </div>
        
      </div>
    )
  };
}

export default App;
