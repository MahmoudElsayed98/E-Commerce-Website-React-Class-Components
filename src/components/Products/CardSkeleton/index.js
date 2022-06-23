import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "./index.css";

export class CardSkeleton extends Component {
  render() {
    const { skeletonCardsNo } = this.props;
    return Array(skeletonCardsNo)
      .fill(0)
      .map((_, i) => (
        <div className="card-skeleton bg-light rounded border" key={i}>
          <div className="image d-flex justify-content-center align-items-center">
            <Skeleton circle width={170} height={170} />
          </div>
          <div className="text px-2">
            <div className="heading d-flex justify-content-center align-items-center">
              <Skeleton width={220} height={48} />
            </div>
            <p className="mb-0 d-flex flex-column justify-content-center align-items-center">
              <Skeleton width={57} />
              <Skeleton width={100.55} />
              <Skeleton width={41} />
            </p>
          </div>
          <Skeleton height={32} />
        </div>
      ));
  }
}

export default CardSkeleton;
