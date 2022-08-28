import Chess from "../src/components/assets/chess.jpg";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`https://api.chess.com/pub/player/${text}`);
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

  console.log(error);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={Chess}
            alt=""
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />

          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Search Username
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Enter your Chess.com username to see a breakdown of your recent
              games!
            </p>

            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <form onSubmit={handleSubmit}>
                <input
                  value={text}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Username"
                  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                />
                <button type="submit" className="btn">
                  Search
                </button>
              </form>
            </div>
            {error && <p>{error}</p>}
            {userData && <p>{userData.name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
