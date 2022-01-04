import React, { useState } from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <h2>Hello World</h2>
      {/* <pre>{JSON.stringify(update, null, 2)}</pre> */}
      <div
        className="button"
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default Home;
