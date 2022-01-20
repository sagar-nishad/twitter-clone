import React, { useState ,useEffect} from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import {db} from "./firebase"
import { useStateValue } from "./StateProvider";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  // ----------------------------------
  
  console.log("user->>>",user);
  console.log("user.display name->>>",user.displayName);
  console.log("user.photourl->>>",user.photoURL);
  console.log("user.Email->>>",user.email.split("@")[0]);
  // ----------------------------------
useEffect(() => {
  // ...code
  db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot =>(
    setPosts(snapshot.docs.map(doc => ({post:doc.data(),id:doc.id})))
  ))
}, [])

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h1>Home</h1>
      </div>
      {/* Tweetbox */}
      <TweetBox  username={user?.username}/>
      {posts.map(({id,post})=>(
        <Post
        id={id}
        key={id}
        displayname={post.displayName}
        username={post.username}
        avatar={post.avatar}
        image={post.image}
        text={post.text}
        verified={post.verified}
      />
      ))}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default Feed;
