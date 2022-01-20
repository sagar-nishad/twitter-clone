import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" className="widgets__inputText" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1459563497403170824"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="LockOnSN"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/101_sagarnishad/"}
          options={{
            text: "#ReactJS Is Awesome. @LockOnSN Follow Me On Instagram",
            via: "LockOnSN",
          }} 
        />
      </div>
    </div>
  );
}

export default Widgets;
