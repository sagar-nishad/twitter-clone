import { Button, Avatar, Modal,Box } from "@material-ui/core";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import "./TweetBox.css";
import { storage, db } from "./firebase";
import firebase from "firebase";
// import ModalUnstyled from '@material-ui/base/ModalUnstyled';
import InsertPhotoOutlined from "@material-ui/icons/InsertPhotoOutlined";
import { useStateValue } from "./StateProvider";

function TweetBox({ username }) {
  // ************************************************
  const [modalOpen, setModalOpen] = useState(false)
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState();
  const [text, setText] = useState("");
  const [{ user }, dispatch] = useStateValue();
  // ************************************************

  const handleOpen =()=>{
    setModalOpen(true)
  }
  const handleClose =()=>{
    setModalOpen(false)
  }
  const style ={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    
    borderRadius: 8,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 30,
  
    p: 4,
  }

  const handleChange = (e) => {
    // e.preventDefault();
    if (e.target.files[0]) {
      // this is done so that the user can upload only one file at a time
      setImage(e.target.files[0]);
    }
  };

  const handleTweetWithoutImage = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: text,
      image: "",
      displayName: user.displayName,
      username: user.email.split("@")[0],
      verified: user.emailVerified,
      avatar: user.photoURL,
    });
    // console.alert("done");
    setProgress(0);
    setText("");
    setImage(null);
  };

  const handleTweetWithImage = (e) => {
    e.preventDefault();
    setModalOpen(true)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    setProgress(0);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        // complate function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post image in db
            console.log("Download URL --->>>", url);
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              text: text,
              image: url,
              displayName: user.displayName,
              username: user.email.split("@")[0],
              verified: false,
              avatar: user.photoURL,
            });
            // console.alert("done");
            setProgress(0);
            setModalOpen(false)
            setText("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="tweetBox">
      {/*************************************/}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modalOpen}
        onClose={handleClose}
        // BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          

        <CircularProgressbar initial={0} strokeWidth={10} value={progress} text={`${progress}%`} />
        
        {/* <progress
          className="imageUpload__progress"
          value={progress}
          max="100"
        /> */}
        </Box>
      </Modal>
      {/*************************************/}

      <form>
        <div className="tweetBox__input">
          <Avatar className="tweetBox__inputAvatar" src={user.photoURL} alt="Sagar" />
          <input
            className="tweetBox__inputText"
            type="text"
            name=""
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="What's Happening"
            id=""
          />
        </div>
        {/* a simple method to hide the ugly file picker is to wrap it around a label and set its display to none */}
        <label className="tweetBox__inputLabel">
          <input
            type="file"
            placeholder=""
            className="tweetBox__imageInput"
            name=""
            onChange={handleChange}
            id=""
          />
          <InsertPhotoOutlined className="tweetBox_insertPhotoIcon" />
        </label>
        

        <Button
          type="submit"
          className="tweetBox__tweetButton"
          onClick={image ?handleTweetWithImage : handleTweetWithoutImage}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
