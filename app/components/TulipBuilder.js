import React from 'react';
import TulipVisualizer from './TulipVisualizer';
import ColorPrompt from "./ColorPrompt";

export default class TulipBuilder extends React.Component {
    render() {
        return (
            <div className="builder-container">
                <TulipVisualizer />
                <ColorPrompt />
            </div>
        )
    }
}

module.exports = TulipBuilder;