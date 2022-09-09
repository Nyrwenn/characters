import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { postLogin } from "../utils/path.js";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/login.scss";
import Header from "./header";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const send = (e) => {
    e.preventDefault();
    const profile = {
      email: email,
      password: password,
    };

    axios
      .post(postLogin, profile)
      .then(function (res) {
        props.setConnected(res.data);
        localStorage.setItem("JWT", res.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="big_wrapper">
      <Header />
      <div className="login_wrapper">
        <div className="form_container">
          <form className="form_login_wrapper" onSubmit={(e) => send(e)}>
            <FormControl>
              <div className="lil_wrap">
                <FormLabel htmlFor="email" className="form_log_label">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  className="input_log_label"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="lil_wrap">
                <FormLabel htmlFor="password" className="form_log_label">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  type="password"
                  className="input_log_label"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </FormControl>
            <button type="submit" id="create">
              Login{" "}
            </button>
          </form>
        </div>
        <div>
          <Link to="/signup">
            <p className="clic_on">Créez votre compte</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
