import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from "./firebase";

function Feed() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    
        <div className='feed'>
            <div className='feed__header'>
        <h2>Home</h2>
        </div>

        <TweetBox />
        <Post 
        displayName={posts.displayName}
        username={Post.username}
        verified={true}
        text={posts.text}
        avatar={posts.avatar}
        image={Post.image}
        />
        
        </div>
  );
}

export default Feed;