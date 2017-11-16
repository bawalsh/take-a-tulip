import React from 'react';
import TulipBuilder from './TulipBuilder';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' render={function() {
                        return (
                            <div className="container center">
                                <h1 className="logo">Take a Tulip</h1>
                                <TulipBuilder />
                            </div>
                        )
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;