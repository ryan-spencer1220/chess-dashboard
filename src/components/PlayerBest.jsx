import React from "react";
import { ChessContext } from "../context/ChessContext";
import { useContext } from "react";

const PlayerRating = () => {
  const { userStats } = useContext(ChessContext);
  return (
    <div className="flex flex-col rounded-lg shadow-md bg-base-100 stats p-10 w-auto stat-value">
      Blitz
      <progress
        className="progress progress-primary w-full h-5 m-2"
        value={userStats.chess_blitz.last.rating}
        max={userStats.chess_blitz.best.rating}
      ></progress>
      Rapid
      <progress
        className="progress progress-primary w-full h-5 m-2"
        value={userStats.chess_blitz.last.rating}
        max={userStats.chess_rapid.best.rating}
      ></progress>
      Bullet
      <progress
        className="progress progress-primary w-full h-5 m-2"
        value={userStats.chess_blitz.last.rating}
        max={userStats.chess_bullet.best.rating}
      ></progress>
      Daily
      <progress
        className="progress progress-primary w-full h-5 m-2"
        value={userStats.chess_blitz.last.rating}
        max={userStats.chess_daily.best.rating}
      ></progress>
    </div>
  );
};

export default PlayerRating;
