import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  console.log(props.massage);
  return (
      <div className={s.posts}>
      <div className={s.item}>
        <img src="https://cs13.pikabu.ru/avatars/3317/x3317059-674399878.png" alt="avatar" />
        post 1
        </div>
       

    
  </div>

  );
};

export default Post;
