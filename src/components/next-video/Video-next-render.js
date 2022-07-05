import React from 'react'
import VideoListNext from '../next-video/Video-next'

const NextVideorender = ({ itemvideos, onVideoSelectItem }) => {
    const renderedList = itemvideos.map((videoItem) => {
      return (
        <div>
          <VideoListNext
            key={videoItem.id}
            onVideoSelectItem={onVideoSelectItem}
            videoItem={videoItem}
          />
        </div>
      )
})


  return <div className="list_video">{renderedList}</div>
}

export default NextVideorender
