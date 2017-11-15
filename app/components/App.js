import React from 'react';
import TulipBuilder from './TulipBuilder';

export default class App extends React.Component {
    render() {
        return (
            <div className="container center">
                <h1 className="logo">Take a Tulip</h1>
                <TulipBuilder />
            </div>
        )
    }
}