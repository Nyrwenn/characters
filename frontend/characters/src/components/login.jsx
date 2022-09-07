import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { postLogin } from "../utils/path.js";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
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
        localStorage.setItem("JWT", res.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login_wrapper">
      <div className="form_container">
        <form className="form_wrapper" onSubmit={(e) => send(e)}>
          <FormControl>
            <FormLabel htmlFor="email" className="form_label">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="password" className="form_label">
              Password
            </FormLabel>
            <Input
              id="password"
              className="form_label"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" id="create">
              Login{" "}
            </button>
          </FormControl>
        </form>
      </div>
      <div>
        <Link to="/signup">
          <p className="clic_on">Créez votre compte</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
