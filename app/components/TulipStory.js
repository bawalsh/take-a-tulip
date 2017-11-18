import React from 'react';
import graphSVG from '../images/graph.svg';
import bubbleSVG from '../images/bubble.svg';
import valueSVG from '../images/value.svg';
import compareSVG from '../images/compare.svg';

function TulipStory() {
        return (
            <div>
                <h1 className="annie heading">About Tulip Mania</h1>
                <div className="flex-container no-wrap">
                    <img src={graphSVG} width="50" height="50" style={{margin: "20px 20px 20px 0px", minWidth: "50px", minHeight: "50px"}} />
                    <p style={{maxWidth: "480px"}}>Tulip Mania was a period during which prices for some tulips reached extraordinarily high levels and then dramatically collapsed.</p>
                </div>
                <div className="flex-container no-wrap">
                    <img src={bubbleSVG} width="50" height="50" style={{margin: "20px 20px 20px 0px", minWidth: "50px", minHeight: "50px"}} />
                    <p style={{maxWidth: "480px"}}>It is generally considered the first recorded speculative bubble.</p>
                </div>
                <div className="flex-container no-wrap">
                    <img src={valueSVG} width="50" height="50" style={{margin: "20px 20px 20px 0px", minWidth: "50px", minHeight: "50px"}} />
                    <p style={{maxWidth: "480px"}}>It was unimaginable to most people that something as common as a flower could be worth so much more money than most people earned in a year, and threw into chaos the very understanding of "value".</p>
                </div>
                <div className="flex-container no-wrap">
                    <img src={compareSVG} width="50" height="50" style={{margin: "20px 20px 20px 0px", minWidth: "50px", minHeight: "50px"}} />
                    <p style={{maxWidth: "480px"}}>Tulip mania has been compared to the failure of the dot-com bubble and the subprime mortgage crisis. Bitcoin has been described as "worse than the tulip mania," and, "At least then you got a tulip, now you get nothing."</p>
                </div>
            </div>
        )
}

export default TulipStory;