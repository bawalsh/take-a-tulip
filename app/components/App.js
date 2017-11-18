import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TulipBuilder from './TulipBuilder';
import TulipStory from './TulipStory';
import GithubLogo from '../images/GitHub-Mark-120px-plus.png';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={function () {
                    return (
                      <div>
                        <div className="container center padded">
                          <h1 className="annie logo">Take a Tulip</h1>
                          <TulipBuilder />
                        </div>
                        <div style={{ backgroundColor: '#f4f4f4' }}>
                          <div className="container center padded">
                            <TulipStory />
                            <br />
                            <h6 className="footer">Attribution: Wikipedia (<a className="muted muted-link" href="https://en.wikipedia.org/wiki/Tulip_mania">Tulip Mania</a>)<br />Made with <i className="fa fa-heart muted" /> by <a href="mailto:contact@brentwalsh.net" className="muted muted-link">Brent Walsh</a></h6>
                            <br />
                            <a href="https://github.com/bawalsh/take-a-tulip"><img className="center github-logo" src={GithubLogo} width="32" height="32" /></a>
                          </div>
                        </div>
                      </div>
                    );
                }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
