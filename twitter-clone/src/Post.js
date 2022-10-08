import React from 'react'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';

import './Post.css'



function Post({
    displayName, username, verified, text, image, avatars
}) {
  return (
    <div className='Post'>
        <div className='post__avatar'>
            <Avatar src='https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg'></Avatar>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>Flourish Gold <span>
                        <VerifiedIcon className='post__badge' /> @flourishgold212
                        </span> </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>I challenge you to build a Twitter-clone withn ReactJs</p>
                </div>
            </div>
            <img src='https://pbs.twimg.com/media/Fei572kWYAEiEsi?format=jpg&name=small' alt='img' />
            <div className='post__footer'>
                <MapsUgcRoundedIcon fontsize='small' />
                <RepeatIcon fontsize='small' />
                <FavoriteBorderIcon fontsize='small' />
                <LogoutIcon fontsize='small' />

            </div>
        </div>
    </div>
  )
}

export default Post