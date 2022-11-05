import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { MdOutlineCardMembership } from "react-icons/md";
import { AiFillCrown } from "react-icons/ai";
import { ChessContext } from "../context/ChessContext";
import { useContext } from "react";

const PlayerRating = () => {
  const { userStats } = useContext(ChessContext);

  console.log(userStats);

  return (
    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {userStats.chess_blitz.last.rating ? (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Blitz</div>
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
              <MdOutlineCardMembership className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Rapid</div>
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
              <AiFillCrown className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Bullet</div>
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
              <AiFillCrown className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Daily</div>
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
