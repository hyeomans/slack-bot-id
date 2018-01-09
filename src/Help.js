import React from "react";
import gif from "./bot-token.gif";

const Help = () => {
  return (
    <div className="help">
      <p>How to get Bot Token:</p>
      <ul>
        <li>Go to https://api.slack.com</li>
        <li>Click on "Your Apps"</li>
        <li>Click on "Create New App"</li>
        <li>Fill required information about app</li>
        <li>Click on "Bots" on main page or "Bot Users" on left menu</li>
        <li>
          Click on "Add Bot User" and fill out the desired name and click "Save"
        </li>
        <li>Click on "OAuth & Permissions" on the left menu</li>
        <li>Click on "Install App to Workspace"</li>
        <li>
          Copy "Bot User OAuth Access Token". That's the token required for this
          page.
        </li>
      </ul>

      <div className="helper-video">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Help;
