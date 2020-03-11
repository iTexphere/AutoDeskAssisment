import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Guide from './containers/guide/Guide'
import Reference from './containers/reference/Reference'
import LandingPage from './containers/landingPage/LandingPage'
import Intro from './containers/intro/Intro'
import {SiteHelper} from './helpers/helper'

function App() {
  return (
    <div className="App">
             <Router>
            <Switch>
              <Route exact path={SiteHelper.LANDING_PAGE_URL}
              component = {LandingPage }
              >
              </Route>
                <Route path={SiteHelper.INTRO_PAGE_URL}
                component = {Intro }
                >
                </Route>
                <Route path={SiteHelper.GUIDE_PAGE_URL}
                component = {Guide }
                >
                </Route>
                <Route path={SiteHelper.REFERENCE_PAGE_URL}
                component = {Reference }
                >
                </Route>
            </Switch>

            <Link to ={SiteHelper.LANDING_PAGE_URL}>
            Landing Page Link
          </Link>

          

          </Router>
    </div>
  );
}


export default App;
