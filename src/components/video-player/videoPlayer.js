import React from 'react'
import Spinner from '../component/Spinner'


const VideoPlayer = ({ videoItem }) => {
  if (!videoItem) {
    return (
      <div style={{ marginTop: '300px' }}>
        <Spinner />
      </div>
    )
  }
  
  return (
    <div>
      <div className="video__container">
        <video class="video__container--poster" controls poster={videoItem.image}></video>
      </div>
    </div>
  )
}

export default VideoPlayer
