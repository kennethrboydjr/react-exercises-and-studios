import React from "react";

export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.chess.com/play/online",
    "https://www.gin-rummy-online.com/",
  ];
  return (
    <div>
      <h3>My Hobbies</h3>
      <a href={hobbyLinks[0]} target="_blank">
        Chess!
      </a>
      <br></br>
      <a href={hobbyLinks[1]} target="_blank">
        Gin Rummy!
      </a>
    </div>
  );
}
