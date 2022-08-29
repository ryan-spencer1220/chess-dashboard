import React from "react";
import UserDashboard from "../components/UserDashboard";
import UserSearch from "../components/UserSearch";

const Home = () => {
  return (
    <UserSearch />
    // {userName ? <UserDashboard /> : <UserSearch />}
  );
};

export default Home;
