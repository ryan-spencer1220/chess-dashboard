import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ChessContext } from "./context/ChessContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "../src/pages/About";
import User from "./pages/User";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  return (
    <ChessContext.Provider
      value={{ userName, setUserName, userData, setUserData }}
    >
      <Router>
        <div className="flex flex-col justify-between">
          <Navbar />
          <main className="mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ChessContext.Provider>
  );
}

export default App;
