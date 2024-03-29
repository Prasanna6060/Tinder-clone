import React from 'react'
import './SwipeButtons.css';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ReplyIcon from '@mui/icons-material/Reply';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
     <IconButton className='swipeButtons_repeat'>
     < ReplyIcon fontSize='large'/>
     </IconButton>
     <IconButton  className='swipeButtons_left'>
     < CloseIcon fontSize='large'/>
     </IconButton>
     <IconButton  className='swipeButtons_star'>
     < StarRateIcon fontSize='large'/>
     </IconButton>
     <IconButton className='swipeButtons_right'>
     < FavoriteIcon fontSize='large'/>
     </IconButton>
     <IconButton className='swipeButtons_lightning'>
     < FlashOnIcon fontSize='large'/>
     </IconButton>
    </div>
  )
}

export default SwipeButtons
