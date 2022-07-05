import React from 'react'
import '../component/component.scss'


const VideoComment = ({ videoItem }) => {
  return (
    <div>
      <div className="text">
          {videoItem?.comments?.map((videoItemcomment, id) => {
              const date = new Date(videoItemcomment.timestamp);

              const commentTimeStamp = (date.getMonth() + 1) +
              '/' + date.getDate() +
              '/' + date.getFullYear();
            return(
              <div key={id}>
                <div className='comment__section'>
                  <div className='comment__section--profile_comments'></div>
                  <div className='comment__section--main_comments'>
                    <div className='comment__section--top_comments'>
                      <h4 className='comment__section--name'>{videoItemcomment.name}</h4>
                      <p className='comment__section--date'>{commentTimeStamp}</p>
                    </div>
                    <div className='comment__section--commentarea'>
                      <p>{videoItemcomment.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
            }
          )}
      </div>
    </div>
  )
}


export default VideoComment
