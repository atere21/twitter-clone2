import React from 'react'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';

import './Post.css'



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
                    <h3>Tiwa Savage<span className='post__headerSpecial'>
                        <VerifiedIcon className='post__badge' /> @TiwaSavage </span>
                     </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Can't get over the stunning pictures 🥰🥰🥰
                    #TECNOxTiwaSavage </p>

                </div>
            </div>
            <img src='https://pbs.twimg.com/media/Fc2rUjIXoAcH45J?format=jpg&name=small' alt='img' />
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