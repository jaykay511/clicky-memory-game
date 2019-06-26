import React from "react";
import "./style.css";

class Message extends React.Component {

    state = {
      message: "Click an image to begin!",
      score: 0,
      topscore: 0
    };
  
    render() {
      return (
        <div>
            {/* placeholder */}
        </div>
      );
    }
  }

export default Message;