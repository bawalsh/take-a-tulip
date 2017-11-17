import React from 'react';
import TulipVisualizer from './TulipVisualizer';
import { TwitterPicker } from 'react-color';
import Prompt from "./Prompt";
import { ShareButtons, generateShareIcon } from 'react-share';
import QueryString from 'query-string';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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

const domain = "www.takeatulip.com";

const hexColorRegex = /[0-9a-fA-F]{6}/;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');

class TulipBuilder extends React.Component {

    constructor(props) {
        super(props);

        let colors = QueryString.parse(this.props.location.search);
        let isCustomColored = (hexColorRegex.test(colors.b)) && (hexColorRegex.test(colors.s)) && (hexColorRegex.test(colors.p));

        this.state = {
            builderState: BuilderStates.READY,
            tulipColors: {
                bulb: (isCustomColored ? "#"+colors.b : "#ff5555"),
                stem: (isCustomColored ? "#"+colors.s : "#009800"),
                pot: (isCustomColored ? "#"+colors.p : "#ffaa56")
            },
            navigationDirection: "right",
            isCustomColored: isCustomColored
        };

        this.handleNavigation = this.handleNavigation.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.generateShareLink = this.generateShareLink.bind(this);
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
                navigationDirection: action === "back" ? "left" : "right",
                isCustomColored: prevState.builderState === BuilderStates.READY && action === "next" ? false : prevState.isCustomColored
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
                navigationDirection: prevState.navigationDirection,
                isCustomColored: prevState.isCustomColored
            };

            newState.tulipColors[part] = color.hex;

            return newState;
        });
    }

    generateShareLink() {
        return domain+'?b='+this.state.tulipColors.bulb.substr(1)+'&s='+this.state.tulipColors.stem.substr(1)+'&p='+this.state.tulipColors.pot.substr(1);
    }

    render() {
        return (
            <div className="flex-container">
                <TulipVisualizer visualizerState={ this.state.isCustomColored ? BuilderStates.SHARE : this.state.builderState} bulbColor={this.state.tulipColors.bulb} stemColor={this.state.tulipColors.stem} potColor={this.state.tulipColors.pot} />
                {this.state.builderState === BuilderStates.READY ?
                    // TODO: Find a better way to change favicon on text changes
                    (this.state.isCustomColored ?
                            <Prompt text="Look at the beautiful tulip someone sent you!" handleNavigation={this.handleNavigation} from={this.state.navigationDirection} hasBack={false} nextText="Start creating tulip " isStationary={this.state.builderState === BuilderStates.READY}><h4 style={{color: "#999999"}}>Ready to make your own tulip?</h4></Prompt> :
                        <Prompt text="Ready to make your own tulip?" handleNavigation={this.handleNavigation} from={this.state.navigationDirection} hasBack={false} nextText="Start creating tulip " isStationary={this.state.builderState === BuilderStates.READY} />
                    ) : null
                }
                {this.state.builderState === BuilderStates.BULB_COLOR ?
                    <Prompt text="Choose a color for the bulb" handleNavigation={this.handleNavigation} from={this.state.navigationDirection} hasBack={false} >
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
                        <textarea readOnly="readOnly" className="link-box center" value={this.generateShareLink()}/>
                        <div className="flex-container share-container">
                            <FacebookShareButton quote="See the tulip I created" url={this.generateShareLink()}>
                                <FacebookIcon className="social-link" size={48} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton title="See the tulip I created" url={this.generateShareLink()}>
                                <TwitterIcon className="social-link" size={48} round={true} />
                            </TwitterShareButton>
                            <WhatsappShareButton title="See the tulip I created" url={this.generateShareLink()}>
                                <WhatsappIcon className="social-link" size={48} round={true} />
                            </WhatsappShareButton>
                        </div>
                    </Prompt> : null
                }
            </div>
        )
    }
}

TulipBuilder.propTypes = {
    location: PropTypes.object.isRequired
};

export default withRouter(TulipBuilder);