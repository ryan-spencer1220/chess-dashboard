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
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral">
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
              home
            </Link>
            <Link to="/about" className="btn btn-ghost rounded-btn">
              about
            </Link>
            <select
              tabIndex={0}
              className="select select-primary max-w-xs border-none active:none"
              data-choose-theme
            >
              {themeValues.map((value) => (
                <option
                  className="text-primary"
                  key={value.toLowerCase()}
                  value={value.toLowerCase()}
                >
                  <a>{value}</a>
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
