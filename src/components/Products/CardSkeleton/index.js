import React, { Component } from "react";
// import Skeleton from "react-loading-skeleton";
import "./index.css";

export class CardSkeleton extends Component {
  render() {
    return Array(20)
      .fill(0)
      .map((_, i) => (
        <div className="card-skeleton bg-light rounded border" key={i}>
          {/* <Skeleton /> */}
        </div>
      ));
  }
}

export default CardSkeleton;
