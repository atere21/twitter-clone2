import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@mui/material"


function TweetBox() {
  return (
    <div className='tweetBox'> 
    <form>
        <div className='tweetBox__input'>
            <Avatar src="https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg"></Avatar>
            < input placeholder='Whats happening?' type='text'></input>
            {/* <input placeholder='Enter image URL'></input>*/}

        </div>
        <Button>Tweet</Button>
    </form>

    </div>
  )
}

export default TweetBox