import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';

function Post({
    displayName, username, verified, text, image, avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar} />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {displayName}{""}
                        <span className='post__headerSpecial'>
                        {verified && <VerifiedIcon className='post__badge' />} @{username} 
                        </span>
                     </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src= {image} alt="img" />
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