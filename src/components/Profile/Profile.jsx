import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
  <div>
      <div>
        <img src="https://i.imgur.com/WDJoaGo.jpg" alt="profile_photo"/>
      </div>
      <MyPosts />
  </div>


  );
};

export default Profile;
