import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

const defaultStyle = {
  flower: { y: 0 },
  stem: { y: 0 },
  pot: { y: 0 },
  scale: { s: 0.85 },
  sun: { x: -200, y: -200 },
};

const flowerStyle = {
  flower: { y: spring(350, { damping: 40, precision: 0.1 }) },
  stem: { y: spring(1000, { damping: 80, precision: 0.1 }) },
  pot: { y: spring(1000, { damping: 80, precision: 0.1 }) },
  scale: { s: spring(0.85, { damping: 40, precision: 0.01 }) },
  sun: { x: spring(-200, { damping: 40, precision: 0.1 }), y: spring(-200, { damping: 40, precision: 0.1 }) },

};

const stemStyle = {
  flower: { y: spring(200, { damping: 40, precision: 0.1 }) },
  stem: { y: spring(200, { damping: 40, precision: 0.1 }) },
  pot: { y: spring(1000, { damping: 80, precision: 0.1 }) },
  scale: { s: spring(0.85, { damping: 40, precision: 0.01 }) },
  sun: { x: spring(-200, { damping: 40, precision: 0.1 }), y: spring(-200, { damping: 40, precision: 0.1 }) },

};

const potStyle = {
  flower: { y: spring(0, { damping: 40, precision: 0.1 }) },
  stem: { y: spring(0, { damping: 40, precision: 0.1 }) },
  pot: { y: spring(0, { damping: 40, precision: 0.1 }) },
  scale: { s: spring(0.85, { damping: 40, precision: 0.01 }) },
  sun: { x: spring(-200, { damping: 40, precision: 0.1 }), y: spring(-200, { damping: 40, precision: 0.1 }) },
};

const shareStyle = {
  flower: { y: spring(0, { damping: 40, precision: 0.1 }) },
  stem: { y: spring(0, { damping: 40, precision: 0.1 }) },
  pot: { y: spring(0, { damping: 40, precision: 0.1 }) },
  scale: { s: spring(0.6, { damping: 40, precision: 0.01 }) },
  sun: { x: spring(0, { damping: 40, precision: 0.1 }), y: spring(0, { damping: 40, precision: 0.1 }) },
};

class TulipVisualizer extends React.Component {
  constructor(props) {
    super(props);

    switch (this.props.visualizerState) {
      case 0:
        this.state = {
          visualizerStyle: defaultStyle,
        };
        break;
      case 1:
        this.state = {
          visualizerStyle: flowerStyle,
        };
        break;
      case 2:
        this.state = {
          visualizerStyle: stemStyle,
        };
        break;
      case 3:
        this.state = {
          visualizerStyle: potStyle,
        };
        break;
      case 4:
        this.state = {
          visualizerStyle: shareStyle,
        };
        break;
      default:
        this.state = {
          visualizerStyle: defaultStyle,
        };
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    switch (nextProps.visualizerState) {
      case 0:
        this.setState(() => ({
          visualizerStyle: defaultStyle,
        }));
        break;
      case 1:
        this.setState(() => ({
          visualizerStyle: flowerStyle,
        }));
        break;
      case 2:
        this.setState(() => ({
          visualizerStyle: stemStyle,
        }));
        break;
      case 3:
        this.setState(() => ({
          visualizerStyle: potStyle,
        }));
        break;
      case 4:
        this.setState(() => ({
          visualizerStyle: shareStyle,
        }));
        break;
      default:
        this.setState(() => ({
          visualizerStyle: defaultStyle,
        }));
        break;
    }
  }

  render() {
    return (
      <Motion
        defaultStyle={defaultStyle.scale}
        style={this.state.visualizerStyle.scale}
      >
        {scalingStyle =>
          (
            <svg
              className="tulip-container"
              xmlns="http://www.w3.org/2000/svg"
              style={{ isolation: 'isolate' }}
              viewBox={`0 0 492.957 ${(scalingStyle.s * 985.334) + ((985.334 - (scalingStyle.s * 985.334)) / 2)}`}
              width="492.957"
              height="985.334"
            >
              <Motion
                defaultStyle={defaultStyle.sun}
                style={this.state.visualizerStyle.sun}
              >
                {interpolatingStyle =>
                  (
                    <g transform={interpolatingStyle.x !== 0 || interpolatingStyle.y !== 0 ? `translate(${interpolatingStyle.x ? interpolatingStyle.x : -200} ${interpolatingStyle.y ? interpolatingStyle.y : -200})` : ''}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ isolation: 'isolate' }}
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                      >
                        <defs>
                          <clipPath id="_clipPath_M8WeGDOiI0KurXJ1xrrCZNqhcRxk22Wc">
                            <rect width="200" height="200" />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#_clipPath_M8WeGDOiI0KurXJ1xrrCZNqhcRxk22Wc)">
                          <clipPath id="_clipPath_8MaRr4dF2kkHM0lvyRJkbrTC3lUPFi67">
                            <rect x="0" y="0" width="200" height="200" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)" />
                          </clipPath>
                          <g clipPath="url(#_clipPath_8MaRr4dF2kkHM0lvyRJkbrTC3lUPFi67)">
                            <g id="Group">
                              <path
                                d=" M 51.875 100 C 51.875 73.439 73.439 51.875 100 51.875 C 126.561 51.875 148.125 73.439 148.125 100 C 148.125 126.561 126.561 148.125 100 148.125 C 73.439 148.125 51.875 126.561 51.875 100 Z "
                                fill="rgb(255,191,0)"
                              />
                              <line
                                x1="148.125"
                                y1="51.875"
                                x2="167.125"
                                y2="32.875"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="148.125"
                                y1="148.125"
                                x2="167.125"
                                y2="167.125"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="100"
                                y1="167.125"
                                x2="100"
                                y2="193.995"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="100"
                                y1="5"
                                x2="100"
                                y2="31.87"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="167.627"
                                y1="99.498"
                                x2="194.498"
                                y2="99.498"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="5.502"
                                y1="99.498"
                                x2="32.373"
                                y2="99.498"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="32.875"
                                y1="32.875"
                                x2="51.875"
                                y2="51.875"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                              <line
                                x1="32.875"
                                y1="167.125"
                                x2="51.875"
                                y2="148.125"
                                vectorEffect="non-scaling-stroke"
                                strokeWidth="5"
                                stroke="rgb(255,191,0)"
                                strokeOpacity="100"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                strokeMiterlimit="3"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </g>
                  )
                }
              </Motion>
              <defs>
                <clipPath id="_clipPath_MxOODunVfUYrmmTLHwdu5t5iOJkc2Oeb">
                  <rect width="492.957" height="985.334" />
                </clipPath>
              </defs>
              <g transform={`translate(${scalingStyle.s ? (1 - scalingStyle.s) * 246.4785 : 0} ${scalingStyle.s ? (1 - scalingStyle.s) * 492.667 : 0}) scale(${scalingStyle.s ? scalingStyle.s : 1})`} clipPath="url(#_clipPath_MxOODunVfUYrmmTLHwdu5t5iOJkc2Oeb)">
                <clipPath id="_clipPath_AQgF0izLNsiYP4gxBY5AMvHQxiiRPfpV">
                  <rect x="0" y="0" width="492.957" height="985.334" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)" />
                </clipPath>
                <g clipPath="url(#_clipPath_AQgF0izLNsiYP4gxBY5AMvHQxiiRPfpV)">
                  <g id="Group">
                    <Motion
                      defaultStyle={defaultStyle.stem}
                      style={this.state.visualizerStyle.stem}
                    >
                      {interpolatingStyle =>
                        (
                          <g transform={`translate(${interpolatingStyle.x ? interpolatingStyle.x : 0} ${interpolatingStyle.y ? interpolatingStyle.y : 0}) rotate(${interpolatingStyle.r ? interpolatingStyle.r : 0} 246 424)`}>
                            <defs>
                              <filter id="RMYWUCKsEgCP9RjJuuLfJsz71c5RUsKe" x="-200%" y="-200%" width="400%" height="400%">
                                <feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0" />
                                <feGaussianBlur
                                  xmlns="http://www.w3.org/2000/svg"
                                  in="offOut"
                                  result="blurOut"
                                  stdDeviation="2.5"
                                />
                                <feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut">
                                  <feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5" />
                                </feComponentTransfer>
                                <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal" />
                              </filter>
                            </defs>
                            <g filter="url(#RMYWUCKsEgCP9RjJuuLfJsz71c5RUsKe)">
                              <rect
                                id="stem"
                                x="242.636"
                                y="239.968"
                                width="12.865"
                                height="370.467"
                                transform="matrix(1,0,0,1,0,0)"
                                fill={this.props.stemColor}
                              />
                            </g>
                            <defs>
                              <filter id="stO4TKmmFCPTK9vA9xxNY7qhMT7JtcQ5" x="-200%" y="-200%" width="400%" height="400%">
                                <feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0" />
                                <feGaussianBlur
                                  xmlns="http://www.w3.org/2000/svg"
                                  in="offOut"
                                  result="blurOut"
                                  stdDeviation="2.5"
                                />
                                <feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut">
                                  <feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5" />
                                </feComponentTransfer>
                                <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal" />
                              </filter>
                            </defs>
                            <g filter="url(#stO4TKmmFCPTK9vA9xxNY7qhMT7JtcQ5)">
                              <path
                                id="leaf_right"
                                d=" M 465.97 309.544 L 411.319 384.508 C 371.478 420.901 306.279 426.039 253.919 446.808 L 298.932 364.376 C 337.102 322.885 408.792 322.308 465.972 309.544 L 465.97 309.544 L 465.97 309.544 Z "
                                fill={this.props.stemColor}
                              />
                            </g>
                            <defs>
                              <filter id="SP0GH4H7NBMviMLp7Ro2uVMd0lRZIyFS" x="-200%" y="-200%" width="400%" height="400%">
                                <feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0" />
                                <feGaussianBlur
                                  xmlns="http://www.w3.org/2000/svg"
                                  in="offOut"
                                  result="blurOut"
                                  stdDeviation="2.5"
                                />
                                <feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut">
                                  <feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5" />
                                </feComponentTransfer>
                                <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal" />
                              </filter>
                            </defs>
                            <g filter="url(#SP0GH4H7NBMviMLp7Ro2uVMd0lRZIyFS)">
                              <path
                                id="leaf_left"
                                d=" M 37.75 371.094 L 91.078 444.244 C 129.954 479.756 193.578 484.77 244.668 505.035 L 200.745 424.599 C 163.499 384.113 93.545 383.55 37.745 371.094 L 37.75 371.094 L 37.75 371.094 Z "
                                fill={this.props.stemColor}
                              />
                            </g>
                          </g>
                        )
                      }
                    </Motion>

                    <Motion
                      defaultStyle={defaultStyle.pot}
                      style={this.state.visualizerStyle.pot}
                    >
                      {interpolatingStyle =>
                        (
                          <g transform={`translate(${interpolatingStyle.x ? interpolatingStyle.x : 0} ${interpolatingStyle.y ? interpolatingStyle.y : 0}) rotate(${interpolatingStyle.r ? interpolatingStyle.r : 0} 246 774)`}>
                            <defs>
                              <filter id="1VfvNzbygR4xueA4yxCgVYnhqPWsAm7C" x="-200%" y="-200%" width="400%" height="400%">
                                <feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0" />
                                <feGaussianBlur
                                  xmlns="http://www.w3.org/2000/svg"
                                  in="offOut"
                                  result="blurOut"
                                  stdDeviation="2.5"
                                />
                                <feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut">
                                  <feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5" />
                                </feComponentTransfer>
                                <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal" />
                              </filter>
                            </defs>
                            <g filter="url(#1VfvNzbygR4xueA4yxCgVYnhqPWsAm7C)">
                              <path
                                id="pot_bottom"
                                d=" M 42.42 666.124 C 137.374 979.274 137.374 983.314 137.374 983.314 L 373.754 985.334 L 450.526 668.144 L 42.426 666.124 L 42.42 666.124 L 42.42 666.124 Z "
                                fill={this.props.potColor}
                              />
                            </g>
                            <defs>
                              <filter id="cxOR1mxhV8L3kAbOfHvRWgLVwrcG4e0e" x="-200%" y="-200%" width="400%" height="400%">
                                <feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0" />
                                <feGaussianBlur
                                  xmlns="http://www.w3.org/2000/svg"
                                  in="offOut"
                                  result="blurOut"
                                  stdDeviation="2.5"
                                />
                                <feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut">
                                  <feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5" />
                                </feComponentTransfer>
                                <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal" />
                              </filter>
                            </defs>
                            <g filter="url(#cxOR1mxhV8L3kAbOfHvRWgLVwrcG4e0e)">
                              <path
                                id="pot_top"
                                d=" M 0 559.054 L 22.223 666.134 L 468.713 670.175 L 492.957 559.055 L 0.007 559.055 L 0 559.054 L 0 559.054 Z "
                                fill={this.props.potColor}
                              />
                            </g>
                          </g>
                        )
                      }
                    </Motion>

                    <defs>
                      <filter id="UZPv8ZKknQDEYr0IGD2goyuo9BRntzV9" x="-200%" y="-200%" width="400%" height="400%">
                        <feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0" />
                        <feGaussianBlur
                          xmlns="http://www.w3.org/2000/svg"
                          in="offOut"
                          result="blurOut"
                          stdDeviation="2.5"
                        />
                        <feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut">
                          <feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5" />
                        </feComponentTransfer>
                        <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal" />
                      </filter>
                    </defs>
                    <Motion
                      defaultStyle={defaultStyle.flower}
                      style={this.state.visualizerStyle.flower}
                    >
                      {interpolatingStyle =>
                        (
                          <g transform={`translate(${interpolatingStyle.x ? interpolatingStyle.x : 0} ${interpolatingStyle.y ? interpolatingStyle.y : 0}) rotate(${interpolatingStyle.r ? interpolatingStyle.r : 0} 246 135)`} filter="url(#UZPv8ZKknQDEYr0IGD2goyuo9BRntzV9)">
                            <path
                              id="flower"
                              d=" M 221.85 0 C 246.525 20.529 227.966 53.244 207.036 86.141 C 169.37 60.717 127.621 38.815 104.096 32.652 C 165.207 55.891 146.137 158.832 169.619 218.612 C 171.937 228.195 177.016 236.2 183.939 242.736 C 201.197 262.839 216.091 271.187 238.447 267.76 C 265.818 273.27 283.02 263.734 303.59 239.14 C 350.688 182.833 312.928 40.8 388.979 11.88 C 362.184 18.9 313.716 44.616 271.269 73.896 C 256.76 42.423 238.506 11.213 221.851 0.004 L 221.85 0 L 221.85 0 Z "
                              fillRule="evenodd"
                              fill={this.props.flowerColor}
                            />
                          </g>
                        )
                      }
                    </Motion>
                  </g>
                </g>
              </g>
            </svg>
          )
        }
      </Motion>
    );
  }
}

TulipVisualizer.propTypes = {
  visualizerState: PropTypes.number.isRequired,
  flowerColor: PropTypes.string.isRequired,
  stemColor: PropTypes.string.isRequired,
  potColor: PropTypes.string.isRequired,
};

export default TulipVisualizer;
