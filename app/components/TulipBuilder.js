import React from 'react';
import TulipVisualizer from './TulipVisualizer';
import { TwitterPicker } from 'react-color';
import Prompt from "./Prompt";
import { ShareButtons, generateShareIcon } from 'react-share';

const BuilderStates = {
    READY: 0,
    BULB_COLOR : 1,
    STEM_COLOR : 2,
    POT_COLOR : 3,
    SHARE : 4
};

const {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');

export default class TulipBuilder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            builderState: BuilderStates.READY,
            tulipColors: {
                bulb: "rgb(255,85,85)",
                stem: "rgb(0,152,0)",
                pot: "rgb(255,170,86)"
            },
            navigationDirection: "right"
        };

        this.handleNavigation = this.handleNavigation.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleNavigation(action) {
        this.setState(function (prevState) {
            return {
                builderState: action === "back" ? prevState.builderState - 1 : (prevState.builderState === BuilderStates.SHARE ? BuilderStates.BULB_COLOR : prevState.builderState + 1),
                tulipColors: {
                    bulb: prevState.tulipColors.bulb,
                    stem: prevState.tulipColors.stem,
                    pot: prevState.tulipColors.pot
                },
                navigationDirection: action === "back" ? "left" : "right"
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
                },
                navigationDirection: prevState.navigationDirection
            };

            newState.tulipColors[part] = "rgb("+color.rgb.r+","+color.rgb.g+","+color.rgb.b+")";

            return newState;
        });
    }

    render() {
        return (
            <div className="flex-container">
                <TulipVisualizer visualizerState={this.state.builderState} bulbColor={this.state.tulipColors.bulb} stemColor={this.state.tulipColors.stem} potColor={this.state.tulipColors.pot} />
                {this.state.builderState === BuilderStates.READY || this.state.builderState === BuilderStates.BULB_COLOR ?
                    <Prompt text="Choose a color for the bulb" handleNavigation={this.handleNavigation} from={this.state.navigationDirection} hasBack={false} isStationary={this.state.builderState === BuilderStates.READY} >
                        <TwitterPicker triangle="hide" color={this.state.tulipColors.bulb} onChangeComplete={(color) => this.handleColorChange("bulb", color)} />
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.STEM_COLOR ?
                    <Prompt text="Choose a color for the stem" handleNavigation={this.handleNavigation} from={this.state.navigationDirection}>
                        <TwitterPicker triangle="hide" color={this.state.tulipColors.stem} onChangeComplete={(color) => this.handleColorChange("stem", color)} />
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.POT_COLOR ?
                    <Prompt text="Choose a color for the pot" handleNavigation={this.handleNavigation} from={this.state.navigationDirection} >
                        <TwitterPicker triangle="hide" color={this.state.tulipColors.pot} onChangeComplete={(color) => this.handleColorChange("pot", color)} />
                    </Prompt> : null
                }
                {this.state.builderState === BuilderStates.SHARE ?
                    <Prompt text="Looking good! Now share your creation with your friends:" handleNavigation={this.handleNavigation} from={this.state.navigationDirection} nextText="Start Over">
                        <div className="flex-container share-container">
                            <FacebookShareButton url="www.takeatulipwebsitelink.here">
                                <FacebookIcon className="social-link" size={48} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url="www.takeatulipwebsitelink.here">
                                <TwitterIcon className="social-link" size={48} round={true} />
                            </TwitterShareButton>
                            <WhatsappShareButton url="www.takeatulipwebsitelink.here">
                                <WhatsappIcon className="social-link" size={48} round={true} />
                            </WhatsappShareButton>
                        </div>
                    </Prompt> : null
                }
            </div>
        )
    }
}