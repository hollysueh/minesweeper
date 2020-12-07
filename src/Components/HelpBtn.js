/* below code referenced from: https://stackoverflow.com/questions/54824734/how-to-hide-and-show-a-router-component-on-an-onclick-event-in-react-js */

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import '../App.css';
import HelpContent from './HelpContent';

class HelpBtn extends Component {
  state = {
    current: ""
  };

  //Toggle current state between "HelpShown" (where help content is showing) and "" (where help content is hidden)
  toggle = () => {
    this.setState({ current: this.state.current==''?"HelpShown":"" })
  };
  
  /* When state is "HelpShown" redirect page to '/HelpContent' */
  /* When state is "" redirect page to Home, or '/' */
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.current == "HelpShown" ? (
            <Redirect to="/HelpContent" />
            ) : (
            <Redirect to="/" />
          )}
          <button onClick={this.toggle}><Link to="/HelpContent" className="button">Help</Link></button>
          <Switch>
            <Route exact path="/HelpContent" component={HelpContent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default HelpBtn