import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ChessContext } from "./context/ChessContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "../src/pages/About";
import User from "./pages/User";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Alert from "./components/Alert";

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

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Alert />
                    <Home />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ChessContext.Provider>
  );
}

export default App;
