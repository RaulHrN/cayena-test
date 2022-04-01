import { Button } from "@mui/material";
import "./Login.css";
import RouteChange from "../../RouteChange/RouteChange";

const Login = () => {

  return (
    <form name="login" className="Login-box">
      <h1>LOGIN</h1>
      <section className="Login-box_input-field">
        <input type="text" placeholder="Username" id="username"/>
        <input type="password" placeholder="Password" id="password"/>
        <a href="https://www.figma.com/file/tavhp0kHzE9o1At8mosVG9/cayena-test?node-id=0%3A1">
          Forgot your password?
        </a>
      </section>
      <div>
        <Button
          variant="contained"
          className="Login-box_button"
          onClick={RouteChange("/list_suppliers")}
        >
          SIGN IN
        </Button>
      </div>
    </form>
  );
};

export default Login;
