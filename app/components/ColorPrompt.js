import React from 'react';
import { TwitterPicker } from 'react-color';

export default class ColorPrompt extends React.Component {
    render() {
        return (
            <div>
                <h4>Choose a color for the bulb</h4>
                <TwitterPicker triangle="hide" />
            </div>
        )
    }
}

module.exports = ColorPrompt;