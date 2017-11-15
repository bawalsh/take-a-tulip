import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

const defaultStyles = {
    left: {
        opacity: 0,
        left: -200
    },
    center: {
        opacity: 1,
        left: 0
    },
    right: {
        opacity: 0,
        left: 200
    }
};

const transitionStyles = {
    enter: {
        opacity: spring(1, {damping: 60, precision: 0.1}),
        left: spring(0, {damping: 30, precision: 0.1})
    },
    leave: {
        left: {
            opacity: spring(0, {stiffness:158, damping: 25, precision: 0.1}),
            left: spring(-200, {stiffness:158, damping: 25, precision: 0.1})
        },
        right: {
            opacity: spring(0, {stiffness:158, damping: 25, precision: 0.1}),
            left: spring(200, {stiffness:158, damping: 25, precision: 0.1})
        }
    }
};

export default class Prompt extends React.Component {

    constructor(props) {
        super(props);

        this.state = transitionStyles.enter;

        this.handleInternalNavigationBack = this.handleInternalNavigation.bind(this, "back");
        this.handleInternalNavigationNext = this.handleInternalNavigation.bind(this, "next");
        this.checkState = this.checkState.bind(this);
    }

    handleInternalNavigation(action) {
        this.setState(function () {
            return action === "back" ? transitionStyles.leave.right : transitionStyles.leave.left;
        });
    }

    checkState() {
        if (this.state.opacity.val === 0) {
            if (this.state.left.val === transitionStyles.leave.right.left.val) {
                this.props.handleNavigation("back");
            } else {
                this.props.handleNavigation("next");
            }
        }
    }

    render() {
        return (
            <Motion
                defaultStyle={this.props.isStationary ? defaultStyles.center : defaultStyles[this.props.from]}
                style={this.state}
                onRest={this.checkState}>
                    {interpolatingStyle =>
                        <div className="prompt-container" style={interpolatingStyle}>
                            <h4>{this.props.text}</h4>
                            {this.props.children}
                            <br/>
                            <div className="flex-container">
                                {this.props.hasBack ? <button className="button center muted" onClick={this.handleInternalNavigationBack}><i className="fa fa-arrow-left" /> Back</button> : null}
                                <button className="button center" onClick={this.handleInternalNavigationNext}>{this.props.nextText} {this.props.nextText === Prompt.defaultProps.nextText ? <i className="fa fa-arrow-right" /> : <i className="fa fa-undo" /> }</button>
                            </div>
                        </div>}
            </Motion>
        )
    }
}

Prompt.defaultProps = {
    hasBack: true,
    nextText: "Next",
    isStationary: false
};

Prompt.propTypes = {
    text: PropTypes.string.isRequired,
    handleNavigation: PropTypes.func.isRequired,
    from: PropTypes.string.isRequired,
    hasBack: PropTypes.bool,
    nextText: PropTypes.string,
    isStationary: PropTypes.bool
};