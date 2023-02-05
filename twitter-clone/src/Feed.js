import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';

import { getDatabase, useDatabaseEmulator } from "firebase/database";

function Feed() {
  const [posts, setPosts] = useState ([]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot((snapshot) => 
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);
  return (
    
        <div className='feed'>
            <div className='feed__header'>
        <h2>Home</h2>
        </div>

        <TweetBox />
        {posts.map(post =>(
        <Post 
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text= {post.text}
        avatar={post.avatar}
        image={post.image}
        />
           ))}
        <Post 
        displayName="Nicki Minaj"
        username="Nickiminaj"
        verified={true}
        text="This is my twitter clone and it's working!!"
        avatar="https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg"
        image="https://pbs.twimg.com/media/FgSzL-8XkAACzoe?format=jpg&name=360x360"
        />
         <Post 
        displayName="Nicki Minaj"
        username="Nickiminaj"
        verified={true}
        text="This is my twitter clone and it's working!!"
        avatar="https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg"
        image="https://pbs.twimg.com/media/FgSzL-8XkAACzoe?format=jpg&name=360x360"
        />
        </div>
        
  );
}

export default Feed;