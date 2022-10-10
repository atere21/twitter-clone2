import React from 'react'
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div  className='Widgets'>
        
        <div className='widgets__inputs'>
          <SearchIcon className='widgets__searchIcon' />
          <input placeholder='Search Twitter' type='text'/>
        </div>

        <div className='widgets__widgetcontainer'>
          <h2>Trends for you</h2>
          <TwitterTweetEmbed tweetId={"1576167686551179264"}/>
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TiwaSavage"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/flourishgold212"}
          options={{ text: "#reactjs is awesome", via: "flourishgold212" }}
        />

        </div>
    </div>
  )
}

export default Widgets