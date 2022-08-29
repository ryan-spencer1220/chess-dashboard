import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ChessContext } from "./context/ChessContext";
import UserSearch from "./components/UserSearch";
import UserDashboard from "./components/UserDashboard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "../src/pages/About";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  return (
    <ChessContext.Provider
      value={{ userName, setUserName, userData, setUserData }}
    >
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ChessContext.Provider>
  );
}

export default App;
