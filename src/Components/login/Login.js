import "./login.css";

const Login = () => {
  return (
    <>
      <div className="register-buttons">
        <button type="button" className="register-button">
          LOG IN{" "}
        </button>
        <div className="slash">&#47;&#47;</div>
        <button type="button" className="register-button">
          SIGN UP{" "}
        </button>
      </div>
      <form action="">
        <div className="user">
          <label htmlFor="user-name">User</label>
          <input type="text" />
        </div>
        <div className="password">
          <label htmlFor="passowrd">Password</label>
          <input type="text" />
        </div>
        <div className="sign-up-buttons">
          <button className="log-in-button">Log in</button>
          <button className="sign-up-button">Sign up</button>
        </div>
      </form>
    </>
  );
};

export default Login;
