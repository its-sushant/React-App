import { Search,Notifications, ArrowDropDown } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (Window.onscroll = null);
    }
    return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
              <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt=''/>
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
          </div>
          <div className="right">
              <Search className='icon'/>
              <span>KID</span>
              <Notifications className='icon'/>
              <img src='https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png' alt=''/>
              <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
