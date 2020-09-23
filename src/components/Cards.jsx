import React from "react";

const Cards = ({ count, name }) => {
  return (
    <div className="five wide column centered">
      <div className="ui card">
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">Covid stats</div>
          <div className="ui divider"></div>
          <p className="description">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
