import React, { Component } from 'react';

//material UI 
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

//added each section as a component
import Homepage from './components/homePage';
import SignUp from './components/SignUpPage';
import ProjectPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';


//fancy UI hiding for navbar when sliding down
function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


class App extends Component{
  constructor(props) {
    super(props);

    //referenced used for scrolling down on navbar
    this.Home = React.createRef();
    this.About = React.createRef();
    this.Projects = React.createRef();
    this.Contact = React.createRef();

  }

  state = {
    reference : "Test1",
  };

  //navbar logic for scrolling around.
  handleChange = ( event, newValue)  => {
    if( newValue === 0){
      this.Home.current.scrollIntoView({behavior: "smooth",block: "start"});
    }
    else if(newValue === 1){
      this.About.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
    else if(newValue === 2){
      this.Projects.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
    else if(newValue === 3){
      this.Contact.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

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
                <Grow in={true} timeout={3000}>
                  <Tab label="Home" style={{ minWidth: 70}}/>
                </Grow>

                <Grow in={true} timeout={3500}>
                  <Tab label="About" style={{minWidth: 70}}/>
                </Grow>

                <Grow in={true} timeout={4000}>
                  <Tab label="Works" style={{minWidth: 70}}/>
                </Grow>

                <Grow in={true} timeout={4500}>
                  <Tab label="Contact" style={{minWidth: 70}}/>
                </Grow>

              </Tabs>
          </AppBar>
        </HideOnScroll>

        <div ref={this.Home}>
          <Homepage/>
        </div>

        <div ref={this.About}>
          <AboutPage/>
        </div>

        <div ref={this.Projects}>
          <ProjectPage/>
        </div>

        <div ref={this.Contact}>
          <SignUp/>
        </div>
      </div>
    )
  };
}

export default App;
