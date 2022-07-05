import React from "react";
import Header from '../header/Header'
import VideoPlayer from '../video-player/videoPlayer'
import VideoDetal from '../video-details/VideoDetal'
import NextVideorender from '../next-video/Video-next-render'
import VideoComment from '../video-comments/VideoComment'
import '../../App.scss'

const IndexApp = ({ videoItem, onVideoSelectItem, itemvideos }) => {
    return (
        <div className='main'>
        <div className="ui container">
          <Header/>
        </div>

        <VideoPlayer videoItem={videoItem}/>
        <div className="ui container item__container">
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetal videoItem={videoItem}/>
                <VideoComment videoItem={videoItem}/>
              </div>
              <div className="five wide column">
                <p className="nextvideo">Next Video</p>
                <NextVideorender 
                  onVideoSelectItem={onVideoSelectItem}
                  itemvideos={itemvideos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
  
  export default IndexApp
