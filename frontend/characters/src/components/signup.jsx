import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import "../style/signup.scss";
import { useState } from "react";
import { postSignup } from "../utils/path.js";
import axios from "axios";
import Header from "./header";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const send = (e) => {
    e.preventDefault();
    const profile = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post(postSignup, profile)
      .then(function (res) {
        console.log("Connected.");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="big_wrapper">
      <Header />
      <div className="signup_wrapper">
        <div className="form_signup_container">
          <form className="form_wrapper" onSubmit={(e) => send(e)}>
            <FormControl>
              <div className="mini_wrap">
                <FormLabel htmlFor="username" className="form_label">
                  Username
                </FormLabel>
                <Input
                  id="username"
                  type="username"
                  className="input_signup"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mini_wrap">
                <FormLabel htmlFor="email" className="form_label">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  className="input_signup"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mini_wrap">
                <FormLabel htmlFor="password" className="form_label">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  type="password"
                  className="input_signup"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </FormControl>
            <button type="submit" id="create">
              Create account{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
