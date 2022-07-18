import React, { useEffect, useState } from 'react'
import FriendsContext from './friends-context';
import { Friends } from '../Sources/Data';

const FriendsProvider = props => {
 
  const [openLeftSidebar, setOpenLeftSidebar] = useState(false);
  const [openRightbar, setOpenRightbar] = useState(false);
  const [friends, setFriends] = useState([]);
  const [numOfMessagesm, setNumOfMessages] = useState(0);
  const [user, setUser] = useState({id: 'asdasdsa', posts: []});
  const [filterFriends, setfilterFriends] = useState([])
  
  // useEffect(() => {
  //   setUser({

  //       id: user.userName || 'user_id',
  //       userName: user.userName || 'unKnown Name',
  //       url: user.userImage,
  //       password: user.password,
  //       state: 'online',
  //       cover: '',
  //       bio: 'Enjoying life’s party',
  //       city: 'Cairo',
  //       country: 'Egypt',
  //       relationship: 'Single',
  //       friensOfriend: friends,
  //       posts: [
  //         {
  //           id: 'u_p_1',
  //           date: '32m ago',
  //           postImage: 'data:image/jpeg;base64,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',
  //           numOfLiks: 32,
  //           caption: 'Life is like a box of chocolates; sometimes you just dig out the good center parts and leave all the undesirable rest to waste.',
  //           comments: [
  //             {
  //               id: 'f_2',
  //               comment: 'Very Nice!',
  //               liks: 2
  //             },
  //             {
  //               id: 'f_6',
  //               comment: 'awesome',
  //               liks: 7
  //             },
  //           ]
  //         }
  //       ],
  //     } 
  //   );
  // }, [friends]);

  // =========== Friends :===========
  

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }, [[user]]);

  useEffect(() => {
    const userInLocal = JSON.parse(localStorage.getItem('user'));
    if(userInLocal) {
      setUser(userInLocal);
    }
  }, [])

  useEffect(() => {
    setFriends(Friends);
    setfilterFriends(Friends);
  }, []);

  const editUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  

  // =========== Add Friend:==========

  const addFriend = (friend) => {
    const newFriend = [friend];
    setFriends(newFriend.concat(friends));
  };

  // =========== DeleteFriend: ===========
  
  const deleteFriend = (id) => {
    setFriends(prevSt => prevSt.filter(f => f.id !== id));
  };
  
  
  // =========== number Of Messages: ===========
  
  useEffect(() => {
    setNumOfMessages(friends.filter(f => f?.messages?.state === 'pending').length);
  }, [friends]);
  
  
  // =========== seen Message: ===========


  const seenMessage = (friend, id) => {
    const friendIndex = friends.findIndex(friend => friend.id === id)
    const updatedFriendState = {
      ...friend,
      messages: {
        ...friend.messages,
        state: 'seen'
      }
    };

    const updateList = friends;
    updateList.splice(friendIndex, 1, updatedFriendState);
    setFriends(updateList);
    setNumOfMessages(friends.filter(f => f?.messages?.state === 'pending').length);
  }


  // ================ add post ===============

  const addPostHandler = post => {

    const updatePosts = [post].concat(user.posts);
    setUser({
      ...user,
      posts: updatePosts
    });

  };

  // ================ Delete post ===============

  const deletePost = (id, friend) => {
    const friendPosts = friend.posts.filter(post => post.id !== id);

    if(friend.id === user.id) {
      setUser({
        ...user,
        posts: friendPosts
      })
    }else {
      const updatedFriend = {
        ...friend,
        posts: friendPosts
      };

      const friendIndex = friends.findIndex(f => f.id === friend.id);

      const updatedFriends = friends;
      updatedFriends.splice(friendIndex, 1, updatedFriend);

      const newFriends = [];

      updatedFriends.map(f => newFriends.push(f));

      setFriends(newFriends)

    }
  }

  //  ============== Search & Filtering ================

  const searchHandler = (value) => {

    setFriends(filterFriends);

    const filtering = filterFriends.filter(friend => (
      friend.userName.trim().toLowerCase().includes(value.trim().toLowerCase())
    ));

    setFriends(filtering);
  } 

  const friendsContext = {
    user: user,
    editUser,
    friends: friends,
    addFriend: addFriend,
    deleteFriend: deleteFriend,
    updateFriend: setFriends,
    seenMessage: seenMessage,
    numOfMessagesm: numOfMessagesm,
    deletePost: deletePost,
    addPost: addPostHandler,
    ShowLeftbar: openLeftSidebar,
    setShowLeftbar: setOpenLeftSidebar,
    ShowRightbar: openRightbar,
    setShowRightbar: setOpenRightbar,
    search: searchHandler
  }

  return (
    <FriendsContext.Provider value={friendsContext}>
      {props.children}
    </FriendsContext.Provider>
  )
}

export default FriendsProvider