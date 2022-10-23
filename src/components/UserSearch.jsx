import { useState, useContext } from "react";
import { ChessContext } from "../context/ChessContext";
import Chess from "../components/assets/chess.jpg";
import { Link } from "react-router-dom";

const UserSearch = () => {
  const { userName, setUserName, userData, setUserData } =
    useContext(ChessContext);
  const [error, setError] = useState("");

  const handleChange = (e) => setUserName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`https://api.chess.com/pub/player/${userName}`);
      let resJSON = await res.json();
      if (res.status === 200) {
        setUserData(resJSON);
        console.log(resJSON);
      } else {
        setError("Something went wrong, please check your username!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {userName.length > 0 && (
        <div>
          <button onClick={handleSubmit} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
