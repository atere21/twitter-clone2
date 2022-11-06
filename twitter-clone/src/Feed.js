import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';


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
        displayName="Flourish Gold"
        username="flourishgold212"
        verified={true}
        text="This is my twitter clone and it's working!!"
        avatar="https://twitter.com/flourishgold212/photo"
        image="https://pbs.twimg.com/media/FgSzL--WQAAWjpD?format=jpg&name=360x360"
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