import React from "react";
import '../component/component.scss'
  const VideoListNext = ({ videoItem, onVideoSelectItem }) => {
    return (
        <div onClick={() => onVideoSelectItem(videoItem)} className="video-item item"> 
            <div className="cardList__area">
                <div className="cardList__area--link">
                    <div className="cardList__area--img">
                        <img src={videoItem.image} />
                    </div>
                    <div className="cardList__area--Title">
                        <h4>{videoItem.title}</h4>
                        <p>{videoItem.channel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default VideoListNext