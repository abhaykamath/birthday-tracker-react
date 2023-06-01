import React from "react";
import "../styles/Card.css";

function Card({ data }) {
  const { name, date, src } = data;
  return (
    <div class="friend-card">
      <div className="profile-img-div">
        <img src={src} />
      </div>
      <div className="info-container">
        <div>{name}</div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default Card;
