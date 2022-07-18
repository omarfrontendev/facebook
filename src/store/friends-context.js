import React from "react";

const FriendsContext = React.createContext({
  auth: null,
  login: () => {},
  logout: () => {},
  user: {},
  editUser: () => {},
  friends: [],
  addFriend: () => {},
  deleteFriend: () => {},
  seenMessage: () => {},
  numOfMessagesm: 0,
  deletePost: () => {},
  addPost: () => {},
  ShowLeftbar: false,
  setShowLeftbar: () => {},
  ShowRightbar: false,
  setShowRightbar: () => {},
  search: () => {}
});


export default FriendsContext;