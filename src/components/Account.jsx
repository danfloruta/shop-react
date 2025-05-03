import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import FadeInMotion from "./FadeInMotion";

const Account = () => {
  const [seeSignUp, setSeeSignUp] = useState(false);
  const [seeSignIn, setSeeSignIn] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const users = useSelector((state) => state.auth.users);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userUp, setUserUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState(false);
  const [userTouched, setUserTouched] = useState(false);
  const [userUpTouched, setUserUpTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordUpTouched, setPasswordUpTouched] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      !users.some((item) => item.user === user && item.password === password) // this, why? includes doesn't check a condition like find
    ) {
      setErrorLogin(true);
      return;
    }
    dispatch(authActions.login({ user, password }));
    setPassword("");
    setUser("");
    setUserTouched(false);
    setPasswordTouched(false);
    setErrorLogin(false);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (users.some((item) => item.user === userUp)) {
      setErrorSignUp(true);
      return;
    }
    dispatch(authActions.signUp({ user: userUp, password: passwordUp }));
    setPasswordUp("");
    setUserUp("");
    setErrorSignUp(false);
    setUserUpTouched(false);
    setPasswordUpTouched(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="mx-auto font-bold m-4 text-2xl">My Account</h1>
      <FadeInMotion>
        <div className="flex flex-wrap flex-row gap-4 justify-around">
          <div className="m-2">
            <h2 className="text-xl font-bold mb-2">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
              <div>
                <input
                  type="email"
                  className="rounded border sm:min-w-md"
                  placeholder="Email"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  onBlur={() => setUserTouched(true)}
                />
              </div>
              {userTouched && !user.includes("@") && (
                <h6 className="text-red-500 text-xs font-bold">
                  Email must contain "@"
                </h6>
              )}
              <div style={{ position: "relative" }}>
                <input
                  type={seeSignIn ? "text" : "password"}
                  className="rounded border sm:min-w-md"
                  placeholder="Password"
                  value={password}
                  minLength={6}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setPasswordTouched(true)}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => setSeeSignIn((prev) => (prev = !prev))}
                >
                  {seeSignIn ? <Visibility /> : <VisibilityOff />}
                </span>
                {passwordTouched && password.length < 6 && (
                  <h6 className="text-red-500 text-xs font-bold">
                    Password must be at least 6 characters
                  </h6>
                )}
              </div>
              {errorLogin && (
                <h6 className="text-red-500 text-xs font-bold">
                  User or password non-existent
                </h6>
              )}
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#007bff",
                  maxWidth: "250px",
                  color: "white",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                    color: "#f0f0f0",
                  },
                }}
              >
                Sign In
              </Button>
            </form>
          </div>
          <div className="m-2 ">
            <h2 className="text-xl font-bold mb-2">Sign Up</h2>
            <p className="max-w-10/12">
              Your personal data will be used to support your experience on this
              website, to manage access to your account, and for other purposes
              described in the privacy policy.
            </p>
            <form
              onSubmit={handleSignUp}
              className="flex flex-col gap-2 max-w-screen"
            >
              <div>
                <input
                  type="email"
                  className="rounded border sm:min-w-md"
                  placeholder="Email"
                  onChange={(e) => setUserUp(e.target.value)}
                  value={userUp}
                  onBlur={() => setUserUpTouched(true)}
                />
                {userUpTouched && !userUp.includes("@") && (
                  <h6 className="text-red-500 font-bold text-xs">
                    Email must contain "@"
                  </h6>
                )}
              </div>
              <div>
                <div className="relative max-w-[11.5rem] sm:max-w-md">
                  <input
                    type={seeSignUp ? "text" : "password"}
                    className="rounded border sm:min-w-md"
                    placeholder="Password"
                    value={passwordUp}
                    minLength={6}
                    onChange={(e) => setPasswordUp(e.target.value)}
                    onBlur={() => setPasswordUpTouched(true)}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      cursor: "pointer",
                    }}
                    onClick={() => setSeeSignUp((prev) => (prev = !prev))}
                  >
                    {seeSignUp ? <Visibility /> : <VisibilityOff />}
                  </span>
                  {passwordUpTouched && passwordUp.length < 6 && (
                    <h6 className="text-red-500 text-xs font-bold">
                      Password must be at least 6 characters
                    </h6>
                  )}
                </div>
              </div>
              {errorSignUp && (
                <h6 className="text-red-500 text-xs font-bold">
                  User already exists
                </h6>
              )}
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#007bff",
                  maxWidth: "250px",
                  color: "white",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                    color: "#f0f0f0",
                  },
                }}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
};

export default Account;
