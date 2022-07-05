import React from 'react';
import '../component/component.scss'
import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.png';
import upload from '../../assets/images/upload.png';
import profile from '../../assets/images/mohan-muruge.jpg';

const Header = () => {
  return (
    <div className="Header">
        <div className="navbar__header">
            <a href="/" className="navbar__header--logo_area">
              <img src={logo} alt="logo" />
            </a>
            <div className='header__right'>
              <div className='header__right--search_bar header__right--flexright'>
                <span className='header__right--search'>
                  <img src={search} alt="search" />
                </span>
                <input type="search" placeholder='Search' className='header__right--inputfield' />
              </div>
              <a href='#' className='header__right--Uploadbtn header__right--flexright'>
                <span className='header__right--upload_img'>
                  <img src={upload} alt="upload" />
                </span>
                <span className='header__right--upladtext'>upload</span>
              </a>
              <a href='#' className='header__right--profileimg header__right--flexright'>
                <img src={profile} alt="profile" />
              </a>
            </div>
        </div>
      </div>
  )
}

export default Header