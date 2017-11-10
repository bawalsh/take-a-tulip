import React from 'react';
import { TwitterPicker } from 'react-color';

export default class ColorPrompt extends React.Component {
    render() {
        return (
            <div>
                <h4>Choose a color for the bulb</h4>
                <TwitterPicker triangle="hide" />
                <br/>
                <button className="button center">Next</button>
            </div>
        )
    }
}

module.exports = ColorPrompt;