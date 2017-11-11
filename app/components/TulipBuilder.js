import React from 'react';
import TulipVisualizer from './TulipVisualizer';
import { TwitterPicker } from 'react-color';
import Prompt from "./Prompt";

const BuilderStates = {
    READY: 0,
    BULB_COLOR : 1,
    STEM_COLOR : 2,
    POT_COLOR : 3,
    SHARE : 4
};

export default class TulipBuilder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            builderState: BuilderStates.BULB_COLOR
        };

        this.handleNext = this.handleNext.bind(this);
    }

    handleNext() {
        this.setState(function (prevState) {
            return {
                builderState: prevState.builderState + 1
            }
        });
    }

    render() {
        return (
            <div className="builder-container">
                <TulipVisualizer visualizerState={this.state.builderState} />
                {this.state.builderState === BuilderStates.BULB_COLOR ?
                    <Prompt text="Choose a color for the bulb" handleNext={this.handleNext}>
                        <TwitterPicker triangle="hide"/>
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.STEM_COLOR ?
                    <Prompt text="Choose a color for the stem" handleNext={this.handleNext}>
                        <TwitterPicker triangle="hide"/>
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.POT_COLOR ?
                    <Prompt text="Choose a color for the pot" handleNext={this.handleNext}>
                        <TwitterPicker triangle="hide"/>
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.SHARE ?
                    <Prompt text="Looking good! Now share your creation with your friends:" handleNext={this.handleNext}>
                        <textarea>http://link.to.share.tulip</textarea>
                    </Prompt> : null
                }
            </div>
        )
    }
}