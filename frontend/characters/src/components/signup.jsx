import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import "../style/signup.scss";
import { useState } from "react";
import { postSignup } from "../utils/path.js";
import axios from "axios";

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
    <div className="signup_wrapper">
      <div className="form_container">
        <form className="form_wrapper" onSubmit={(e) => send(e)}>
          <FormControl>
            <FormLabel htmlFor="username" className="form_label">
              Username
            </FormLabel>
            <Input
              id="username"
              type="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <FormHelperText>Please enter a valid email address</FormHelperText>
            <FormLabel htmlFor="password" className="form_label">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>
              Your password must contain at least 8 characters
            </FormHelperText>

            <button type="submit" id="create">
              Create account{" "}
            </button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default Signup;
