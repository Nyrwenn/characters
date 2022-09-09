import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { getMe } from "./utils/path";
import { useEffect, useState } from "react";
import "./style/login.scss";

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
    <div className="app_wrapper">
      {!connected ? (
        <Routes>
          <Route
            exact
            path="/"
            element={<Login setConnected={setConnected} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <Home auth={connected} />
      )}
    </div>
  );
}

export default App;
