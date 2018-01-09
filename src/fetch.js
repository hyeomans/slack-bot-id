import axios from "axios";

export default fetch;

const userListUrl = "https://slack.com/api/users.list";
const errorMessage =
  "There was an error trying to fetch user list. Error from Slack: ";

const searchBot = (members, desiredUserName) =>
  members.find(user => user.name === desiredUserName);

function fetch(token, userName, cursor) {
  let encodedCursor;
  if (cursor) {
    encodedCursor = encodeURI(cursor);
  }

  const url = encodedCursor
    ? `${userListUrl}?token=${token}&cursor=${encodedCursor}`
    : `${userListUrl}?token=${token}`;
  console.log(url, "URL");
  return axios
    .get(url)
    .then(({ data }) => {
      const { ok } = data;
      if (!ok) {
        const { error } = data;
        return {
          found: false,
          message: `${errorMessage} ${error}`
        };
      }
      const { members } = data;
      const user = searchBot(members, userName);
      if (!user) {
        const { response_metadata } = data;

        if (!response_metadata) {
          return {
            found: false,
            message: "Bot user not found. Please check Bot username."
          };
        }

        const { next_cursor } = response_metadata;
        if (next_cursor === "") {
          return {
            found: false,
            message: "Bot user not found. Please check Bot username."
          };
        }

        return fetch(token, userName, next_cursor);
      }

      return {
        found: true,
        message: "User found",
        user
      };
    })
    .catch(err => {
      return {
        found: false,
        message: `${errorMessage} ${JSON.stringify(err)}`
      };
    });
}
