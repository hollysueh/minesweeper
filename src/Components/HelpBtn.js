import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import '../App.css';
import HelpContent from './HelpContent';

class HelpBtn extends Component {
  state = {
    helpInfo: ""
  };

  //Toggle current state between "HelpShown" (where help content is showing) and "" (where help content is hidden)
  toggle = () => {
    this.setState({ helpInfo: this.state.helpInfo==''?"HelpShown":"" })
  };
  
  /* When state is "HelpShown" redirect page to '/HelpContent' */
  /* When state is "" redirect page to Home, or '/' */
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.helpInfo == "HelpShown" ? (
            <Redirect to="/HelpContent" />
            ) : (
            <Redirect to="/" />
          )}
          <button className="helpButton" onClick={this.toggle}><Link to="/HelpContent" className="helpButton">Help</Link></button>
          <Switch>
            <Route exact path="/HelpContent" component={HelpContent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default HelpBtn

/*
REFERENCES:
  https://stackoverflow.com/questions/54824734/how-to-hide-and-show-a-router-component-on-an-onclick-event-in-react-js
*/