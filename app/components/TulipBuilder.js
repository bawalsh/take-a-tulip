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
            builderState: BuilderStates.BULB_COLOR,
            tulipColors: {
                bulb: "rgb(255,85,85)",
                stem: "rgb(0,152,0)",
                pot: "rgb(255,170,86)"
            }
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleNext() {
        this.setState(function (prevState) {
            return {
                builderState: prevState.builderState + 1,
                tulipColors: {
                    bulb: prevState.tulipColors.bulb,
                    stem: prevState.tulipColors.stem,
                    pot: prevState.tulipColors.pot
                }
            }
        });
    }

    handleColorChange(part, color) {
        this.setState(function (prevState) {
            let newState =  {
                builderState: prevState.builderState,
                tulipColors: {
                    bulb: prevState.tulipColors.bulb,
                    stem: prevState.tulipColors.stem,
                    pot: prevState.tulipColors.pot
                }
            };

            newState.tulipColors[part] = "rgb("+color.rgb.r+","+color.rgb.g+","+color.rgb.b+")";

            return newState;
        });
    }

    render() {
        return (
            <div className="builder-container">
                <TulipVisualizer visualizerState={this.state.builderState} bulbColor={this.state.tulipColors.bulb} stemColor={this.state.tulipColors.stem} potColor={this.state.tulipColors.pot} />
                {this.state.builderState === BuilderStates.BULB_COLOR ?
                    <Prompt text="Choose a color for the bulb" handleNext={this.handleNext} >
                        <TwitterPicker triangle="hide" onChangeComplete={(color) => this.handleColorChange("bulb", color)} />
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.STEM_COLOR ?
                    <Prompt text="Choose a color for the stem" handleNext={this.handleNext} >
                        <TwitterPicker triangle="hide" onChangeComplete={(color) => this.handleColorChange("stem", color)} />
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.POT_COLOR ?
                    <Prompt text="Choose a color for the pot" handleNext={this.handleNext} >
                        <TwitterPicker triangle="hide" onChangeComplete={(color) => this.handleColorChange("pot", color)} />
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