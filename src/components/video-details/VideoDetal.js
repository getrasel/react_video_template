import React from 'react'
import '../component/component.scss'
import Spinner from '../component/Spinner'
import views from '../../assets/images/views.png'
import like from '../../assets/images/like.png'
import profilecomment from '../../assets/images/mohan-muruge.jpg';

const VideoDetal = ({ videoItem }) => {
  if (!videoItem) {
    return (
      <div style={{ marginTop: '300px' }}>
        <Spinner />
      </div>
    )
  }

  const date = new Date(videoItem.timestamp);

  const TimeStamp = (date.getMonth() + 1) +
  '/' + date.getDate() +
  '/' + date.getFullYear();

  return (
    <div>
      <div className='item__container--body_detail'>
        <div className='item__container--top_detail'>
          <h4 className='item__container--title'>{videoItem.title}</h4>
          <div className='item__container--title_des'>
            <div className='item__container--leftdes'>
              <p className='item__container--channel'>{videoItem.channel}</p>
              <span className='item__container--date'>{TimeStamp}</span>
            </div>
            <div className='item__container--rightdes'>
              <div className='item__container--viewdiv'>
                <img src={views} alt='views' />
                <span className='item__container--views'>{videoItem.views}</span>
              </div>
              <div className='item__container--likediv'>
                <img src={like} alt='views'/>
                <span className='item__container--like'>{videoItem.likes}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='item__container--content'>
          <p>{videoItem.description}</p>
        </div>
        <div className='usercomment__main'>
        <p className='usercomment__main--titlecomment'>3 comments</p>
        <div className='usercomment__main--form_inner'>
          <div className='usercomment__main--profile_comment'>
            <img src={profilecomment} alt='profile' className='usercomment__main--img' />
          </div>
          <div className='usercomment__main--main_form'>
            <div className='usercomment__main--form_group'>
              <label className='usercomment__main--form_group--label'>JOIN THE CONVERSATION</label>
              <input type='text' className='usercomment__main--form_group--form_control' placeholder='Add a new comment' id='name' name='name' />
            </div>
          </div>
          <div className='usercomment__main--submit_buttn'>
            <input type='submit' className='usercomment__main--submit' id='submit' value='Comment' />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default VideoDetal
