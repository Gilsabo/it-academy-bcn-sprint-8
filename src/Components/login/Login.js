import "./login.css";
import { useEffect } from "react";
import { useRef } from "react";
import {NavLink} from "react-router-dom"

const Login = ({ userData, setUserData }) => {
  const userRef = useRef();
  const passwordRef = useRef();
  console.log(userData);

  useEffect(() => {
    if (userData !== null) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }, [userData]);

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setUserData(user);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value, passwordRef.current.value);
    setUserData([
      { user: userRef.current.value, password: passwordRef.current.value },
    ]);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmit}>
          <div className="user">
            <label htmlFor="user-name">User</label>
            <input ref={userRef} type="text" required />
          </div>
          <div className="password">
            <label htmlFor="passowrd">Password</label>
            <input ref={passwordRef} type="password" required />
          </div>
          <div className="sign-up-buttons">
            {userData ? (
              <NavLink to="/starships">
                <div className="log-in-button">Log in</div>
              </NavLink>
            ) : (
              <button className="log-in-button">Log in</button>
            )}
            <button className="sign-up-button">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
