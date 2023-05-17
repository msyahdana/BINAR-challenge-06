import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../../redux/actions/authActions";
import GoogleButton from "react-google-button";

function GoogleRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <div className="d-flex justify-content-center">
      <GoogleButton label="Register with Google" className="w-40" onClick={() => loginWithGoogle()}></GoogleButton>
    </div>
  );
}

export default GoogleRegister;
