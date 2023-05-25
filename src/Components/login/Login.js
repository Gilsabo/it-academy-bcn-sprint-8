import "./login.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState([]);

  const toggleForm = () => {
    if (showForm===false) {
      setShowForm(true);
    }
  };

  const closeModal = () => {
    if (showForm) {
      setShowForm(false);
    }
  };

  const preventClosingModal = (e) => {
    e.stopPropagation();
  };


  const userRef = useRef();
  const passwordRef = useRef();
  console.log(userData);

  useEffect(() => {
    if (userData.length > 0) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }, [userData]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
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
      <div className="register-buttons">
        <button onClick={toggleForm}  className="register-button">
          LOG IN{" "}
        </button>
        <div className="slash">&#47;&#47;</div>
        <button onClick={toggleForm}  className="register-button">
          SIGN UP{" "}
        </button>
      </div>
      <div
        className={showForm ? "toggled" : "untoggled"}
        onClick={closeModal}
      >
        <form action="" onSubmit={onSubmit} onClick={preventClosingModal}>
          <div className="user">
            <label htmlFor="user-name">User</label>
            <input ref={userRef} type="text" required/>
          </div>
          <div className="password">
            <label htmlFor="passowrd">Password</label>
            <input ref={passwordRef} type="password" required/>
          </div>
          <div className="sign-up-buttons">
            <button onClick={closeModal} className="log-in-button">Log in</button>
            <button onClick={closeModal} className="sign-up-button">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
