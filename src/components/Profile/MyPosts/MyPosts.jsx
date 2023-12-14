import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
  <div>
    My Posts
    <div>
      <textarea></textarea>
      <button>Send</button>
    </div>
    <div className={s.posts}>
      <Post massage='Hi, how are you?' />
      <Post massage='My first post' />
      
    </div>
  </div>

  );
};

export default MyPosts;
