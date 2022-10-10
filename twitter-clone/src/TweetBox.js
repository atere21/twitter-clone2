import React from 'react'
import './TweetBox.css'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg"></Avatar>
                <input placeholder='Whats happening?' type='text'></input>
                <StarBorderPurple500Icon className='star__Icon' />
            </div>
            <input className='tweetBox__imageInput' placeholder='Option: Enter Image URL' type='text'>
            </input>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>

    </div>
  )
}

export default TweetBox