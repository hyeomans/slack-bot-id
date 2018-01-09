import React from "react";

function Form({
  onSubmit,
  token,
  userName,
  handleTokenChange,
  handleUserNameChange
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="Token">
        Token:
        <input type="text" value={token} onChange={handleTokenChange} />
      </label>

      <label htmlFor="userName">
        UserName:
        <input type="text" value={userName} onChange={handleUserNameChange} />
      </label>

      <input type="submit" value="Search" />
    </form>
  );
}

export default Form;
