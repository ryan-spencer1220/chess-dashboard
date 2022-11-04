import { FaChess } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Navbar() {
  const themeValues = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaChess className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold">
            Chess Dashboard
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost rounded-btn">
              About
            </Link>
            <div className="dropdown dropdown-end rounded-btn">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                Theme
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                {themeValues.map((value) => (
                  <li
                    className="text-primary"
                    key={value.toLowerCase()}
                    value={value.toLowerCase()}
                  >
                    <a>{value}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
