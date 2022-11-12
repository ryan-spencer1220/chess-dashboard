import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChessContext } from "../context/ChessContext";
import RecentGames from "../components/RecentGames";
import PlayerRating from "../components/PlayerRating";
import PlayerBest from "../components/PlayerBest";

function User() {
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

  console.log(userData);

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
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">
                  {last_online}
                </div>
                {is_streamer && (
                  <div className="mx-1 badge badge-info">Streamer</div>
                )}
                <div className="ml-2 mr-1 badge badge-success">{title}</div>
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
        <PlayerRating />
        <PlayerBest />
        <RecentGames />
      </div>
    </>
  );
}

export default User;
