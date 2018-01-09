import React from "react";

const Result = ({ message, user, found }) => {
  if (!found) {
    return (
      <div className="not-found">
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div className="found">
      <p>BotId:</p>
      <p>{user.id}</p>
    </div>
  );
};

export default Result;
