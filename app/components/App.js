import React from 'react';
import TulipBuilder from './TulipBuilder';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TulipStory from './TulipStory';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' render={function() {
                        return (
                            <div>
                                <div className="container center padded">
                                    <h1 className="logo">Take a Tulip</h1>
                                    <TulipBuilder />
                                </div>
                                <div style={{backgroundColor: "#f4f4f4"}}>
                                    <div className="container center padded">
                                        <TulipStory />
                                        <br />
                                        <h6 className="footer">Attribution: Wikipedia (<a className="muted-link" href="https://en.wikipedia.org/wiki/Tulip_mania">Tulip Mania</a>)</h6>
                                        <h6 className="footer">Made with <i className="fa fa-heart"/> by Brent Walsh</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;