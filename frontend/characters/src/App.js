import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { getMe } from "./utils/path";
import { useEffect, useState } from "react";

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const persistAuth = localStorage.getItem("JWT");

    if (!connected && persistAuth) {
      axios
        .get(getMe, {
          headers: {
            Authorization: `Bearer ${persistAuth}`,
          },
        })
        .then(function (res) {
          setConnected(res.data);
        })
        .catch(function (error) {
          localStorage.removeItem("JWT");
        });
    }
  }, [connected]);

  return (
    <div>
      {connected ? (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <div>prout</div>
      )}
    </div>
  );
}

export default App;
