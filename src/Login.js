import { Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [{}, dispatch] = useStateValue();

  const singIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({ type: actionTypes.SET_USER, user: result.user });
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <Twitter className="login__twitterIcon" />
        <h1 className="login__taglineText">Happening Now</h1>
        <h3 className="login__joinText">Join Twitter today.</h3>

        <Button onClick={singIn} className="login__Button">
          <img
            className="login__ButtonImg"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          Sign Up With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
