import React from 'react';
import { Motion, spring } from 'react-motion';
import 'prop-types';

const defaultStyle = {
    opacity: 0,
    left: 200
};

const enterStyle = {
    opacity: spring(1, {damping: 60, precision: 0.1}),
    left: spring(0, {damping: 30, precision: 0.1})
};

const leaveStyle = {
    opacity: spring(0, {damping: 20, precision: 0.1}),
    left: spring(-200, {damping: 20, precision: 0.1})
};

export default class Prompt extends React.Component {

    constructor(props) {
        super(props);

        this.state = enterStyle;

        this.handleInternalNext = this.handleInternalNext.bind(this);
        this.checkState = this.checkState.bind(this);
    }

    handleInternalNext() {
        this.setState(function () {
            return leaveStyle;
        });
    }

    checkState() {
        if (this.state.opacity.val === 0) {
            this.props.handleNext();
        }
    }

    render() {
        return (
            <Motion
                defaultStyle={defaultStyle}
                style={this.state}
                onRest={this.checkState}>
                    {interpolatingStyle =>
                        <div className="prompt-container" style={interpolatingStyle}>
                            <h4>{this.props.text}</h4>
                            {this.props.children}
                            <br/>
                            <button className="button center" onClick={this.handleInternalNext}>Next</button>
                        </div>}
            </Motion>
        )
    }
}