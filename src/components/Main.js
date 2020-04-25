import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav"> dummy text</div>
      <div className="mainContent">
        <div className="cardWrap">
          <h1>Uniquely yours</h1>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className="cardWrap">
          <h2>Focus</h2>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1584000295066-094a23567d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
