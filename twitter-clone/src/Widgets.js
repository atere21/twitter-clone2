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
          <input placeholder='search Twitter' type='text'/>
        </div>

        <div className='widgets__widgetcontainer'>
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1564307731875520512"}></TwitterTweetEmbed>

        </div>
    </div>
  )
}

export default Widgets