import "./login.css";

const Login = () => {
  return (
    <form className="form">
      <button type="button" className="form-button">
        LOG IN{" "}
      </button>
      <div className="slash">&#47;&#47;</div>
      <button type="button" className="form-button">
        SIGN UP{" "}
      </button>
    </form>
  );
};

export default Login;
