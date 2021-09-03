import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="http://t0.gstatic.com/images?q=tbn:ANd9GcRMCA3j2A8hfLl9p5UAU5nd9lvqLlNZvqoU4xOsZ192uH4IYS6X"
          alt="Linkedin Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" name="" id="" />
        </div>
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title= "Jobs" />
          <HeaderOption Icon={ChatIcon} title= "Chat" />
          <HeaderOption Icon={NotificationsIcon} title= "Notifications" />
          <HeaderOption  avatar={true} title='me'
            onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header;
