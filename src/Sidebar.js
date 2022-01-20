import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from "./SidebarOption";
import { Avatar, Button, Modal, Box } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  // ***********************************
  const style = {
    position: "absolute",
    top: "80%",
    left: "15%",
    transform: "translate(-50%, -50%)",

    borderRadius: 8,
    height: 15,
    width:100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 30,

    p: 4,
  };
  // ***********************************
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
    console.log("Loging Out");
    // auth.signOut(provider).then(() => {
    //   dispatch({ type: actionTypes.REMOVE_USER });
    // });

    dispatch({ type: actionTypes.REMOVE_USER, user: null });
    setOpen(false);
  };
  return (
    <div className="sidebar">
      {/* Logout Modal */}
      {/*************************/}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        // BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Button onClick={logout}>Logout</Button>
        </Box>
      </Modal>
      {/*************************/}
      {/* Twitter Icon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/* Sidebar Option */}
      <SidebarOption text="Home" active={true} Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className="sidebar__userDetails"
        fullWidth
      >
        <Avatar src={user.photoURL} className="sidebar__userDetailsAvatar" />
        <div className="">
          <p className="sidebar__userDetailsDisplayName">{user.displayName}</p>
          <p>@{user.email.split("@")[0]}</p>
        </div>
      </Button>
    </div>
  );
}

export default Sidebar;
