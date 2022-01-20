import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import {
  ChatBubbleOutline,
  Favorite,
  Publish,
  Repeat,
} from "@material-ui/icons";

function Post({
  displayname,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar alt={displayname} src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayname}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}@
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img
          src={image}
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="samll" />
          <Repeat fontSize="small" />
          <Favorite fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
