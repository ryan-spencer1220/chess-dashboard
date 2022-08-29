import { useState, useContext } from "react";
import { ChessContext } from "../context/ChessContext";
import Chess from "../components/assets/chess.jpg";

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
      } else {
        setError("Something went wrong, please check your username!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Enter Username</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Enter your chess.com username to view infromation about your
            profile!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              value={userName}
              onChange={handleChange}
              type="text"
              placeholder="Enter Username"
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            />
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <button
                type="submit"
                className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
              >
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </form>

          <div className="mt-12 border-b border-b-gray-300"></div>

          <p className="py-6 text-sm font-thin text-center text-gray-400">
            Or checkout one of these other Chess applications!
          </p>

          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <span className="font-thin">Rating Converter</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <span className="font-thin">Opening Explorer</span>
            </button>
          </div>
        </div>

        <img src={Chess} alt="" className="w-[430px] hidden md:block" />

        <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;

{
  /* 
<input
  value={userName}
  onChange={handleChange}
  type="text"
  placeholder="Enter Username"
  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
/>
<button type="submit" className="btn">
  Search
</button>
</form> */
}

// {error && <p>{error}</p>}
