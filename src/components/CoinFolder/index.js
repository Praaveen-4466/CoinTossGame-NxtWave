import React, { Component } from "react";

import "./index.css";

const Head_Img = "https://assets.ccbp.in/frontend/react-js/heads-img.png";

const Tails_Img = "https://assets.ccbp.in/frontend/react-js/tails-img.png";

class TosstheCoin extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    toss_result: Head_Img,
  };

  onTossCoin = () => {
    const { headsCount, tailsCount } = this.state;
    const toss = Math.floor(Math.random() * 2);

    let tossImg = "";
    let latestHeadCount = headsCount;
    let latestTailsCount = tailsCount;

    if (toss === 0) {
      tossImg = Head_Img;
      latestHeadCount += 1;
    } else {
      tossImg = Tails_Img;
      latestTailsCount += 1;
    }
    this.setState({
      headsCount: latestHeadCount,
      tailsCount: latestTailsCount,
      toss_result: tossImg,
    });
  };

  render() {
    const { toss_result, headsCount, tailsCount } = this.state;
    const totalCount = headsCount + tailsCount;

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="paragraph"> Heads (or) Toss</p>
          <img src={toss_result} className="img" alt="heads or tails" />
          <button className="button" onClick={this.onTossCoin}>
            Tosss Coin
          </button>
          <div className="result-container">
            <p className="para">Total: {totalCount}</p>
            <p className="para">Heads: {headsCount}</p>
            <p className="para">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TosstheCoin;
