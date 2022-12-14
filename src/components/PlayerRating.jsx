import React from "react";
import { GiBulletBill } from "react-icons/gi";
import { ChessContext } from "../context/ChessContext";
import { useContext } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { BsLightningFill, BsFillStopwatchFill } from "react-icons/bs";

const PlayerRating = () => {
  const { userStats } = useContext(ChessContext);

  console.log(userStats);

  return (
    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {userStats.chess_blitz.last.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsLightningFill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Blitz (current)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_blitz.last.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
        {userStats.chess_rapid.last.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsFillStopwatchFill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Rapid (current)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_rapid.last.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
        {userStats.chess_bullet.last.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <GiBulletBill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Bullet (current)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_bullet.last.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
        {userStats.chess_daily.last.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <TiWeatherSunny className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Daily (current)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_daily.last.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
      </div>
    </div>
  );
};

export default PlayerRating;
