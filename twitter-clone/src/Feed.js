import React, { useEffect, useState } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';



function Feed() {
  /*const [posts, setPosts] =useState([]);

  useEffect(()=> {
    db.collection('posts').onSnapshot (snapshot=> (
      setPosts(snapshot.docs.map(doc=> doc.data()))
    ))

  },[])*/
  return (
    
        <div className='feed'>
            <div className='feed__header'>
        <h2>Home</h2>
        </div>
        <TweetBox />
        <Post 
        displayName="FlourishGold"
        username="flourishgold212"
        verified={true}
        text="this is my twitter-clone!!! Guess the tribe?"
        avatar="https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg"
        image="https://pbs.twimg.com/media/FepxIICX0AIiZwC?format=jpg&name=small"
        />
        <Post />
        <Post />
        
    </div>
  )
}

export default Feed