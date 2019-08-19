import React, { Component } from 'react';

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

//example from material-ui
import Homepage from './components/homePage';
import SignUp from './components/SignUpPage';
import ProjectPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';


//fancy UI elevation for navbar
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
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
      this.refs.Home.scrollIntoView({behavior: "smooth"});
    }
    else if(newValue === 1){
      this.refs.About.scrollIntoView({behavior: "smooth", block: "center"});
    }
    else if(newValue === 2){
      this.refs.Projects.scrollIntoView({behavior: "smooth", block: "center"});
    }
    else if(newValue === 3){
      this.refs.Contact.scrollIntoView({behavior: "smooth"});
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

        <ElevationScroll>
          <AppBar style={{ backgroundColor: '#607d8b' }} >
              <Tabs
                onChange={this.handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Home"  />
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Contact" />
              </Tabs>
          </AppBar>
        </ElevationScroll>

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
