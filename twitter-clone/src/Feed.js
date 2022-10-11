import React, { useEffect, useState } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from "./firebase"

function Feed() {
  /*const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);*/

  return (
    
        <div className='feed'>
            <div className='feed__header'>
        <h2>Home</h2>
        </div>

        <TweetBox />
        <Post/>
        
        </div>
  );
}

export default Feed