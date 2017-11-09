import React from 'react';
import TulipVisual from '../images/tulip.svg';

export default class TulipVisualizer extends React.Component {
    render() {
        return (
            <div>
                <TulipVisual className="tulip-container" />
            </div>
        )
    }
}

module.exports = TulipVisualizer;