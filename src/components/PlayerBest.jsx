import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { MdOutlineCardMembership } from "react-icons/md";
import { AiFillCrown } from "react-icons/ai";
import { ChessContext } from "../context/ChessContext";
import { useContext } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { BsLightningFill, BsFillStopwatchFill } from "react-icons/bs";
import { GiBulletBill } from "react-icons/gi";

const PlayerRating = () => {
  const { userStats, userData } = useContext(ChessContext);

  console.log(userStats);

  return (
    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {userStats.chess_blitz.best.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsLightningFill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Blitz (best)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_blitz.best.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
        {userStats.chess_rapid.best.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsFillStopwatchFill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Rapid (best)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_rapid.best.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
        {userStats.chess_bullet.best.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <GiBulletBill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Bullet (best)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_bullet.best.rating}
            </div>
          </div>
        ) : (
          <>N/A</>
        )}
        {userStats.chess_daily.best.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <TiWeatherSunny className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Daily (best)</div>
            <div className="stat-value text-3xl md:text-4xl">
              {userStats.chess_daily.best.rating}
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
