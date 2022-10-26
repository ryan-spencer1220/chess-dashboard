import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { MdOutlineCardMembership } from "react-icons/md";
import { AiFillCrown } from "react-icons/ai";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChessContext } from "../context/ChessContext";
import { useEffect } from "react";
import { useState } from "react";

function User() {
  const [userStats, setUserStats] = useState({});
  const { userData } = useContext(ChessContext);

  const {
    avatar,
    is_streamer,
    url,
    name,
    username,
    following,
    followers,
    country,
    location,
    last_online,
    joined,
    status,
    twitch_url,
    title,
  } = userData;

  const fetchUserStats = async (username) => {
    try {
      let res = await fetch(
        `https://api.chess.com/pub/player/${username}/stats`
      );
      let resJSON = await res.json();
      if (res.status === 200) {
        setUserStats(resJSON);
        console.log("API Call", resJSON);
      } else {
        // setError("Something went wrong, please check your username!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log();
    fetchUserStats(userData.username);
  }, []);

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">{username}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{title}</div>
                {is_streamer && (
                  <div className="mx-1 badge badge-info">Streamer</div>
                )}
              </h1>
              <p>{username}</p>
              <div className="mt-4 card-actions">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Chess Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {twitch_url && (
                <div className="stat">
                  <div className="stat-title text-md">Twitch</div>
                  <div className="text-lg stat-value">
                    <a href={twitch_url} target="_blank" rel="noreferrer">
                      {twitch_url}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <MdOutlineCardMembership className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Status</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {status}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <AiFillCrown className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Title</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
