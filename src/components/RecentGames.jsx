import React from "react";
import { useContext } from "react";
import { a } from "react-router-dom";
import { ChessContext } from "../context/ChessContext";

const RecentGames = () => {
  const { userGames } = useContext(ChessContext);

  return (
    <div className="overflow-x-auto p-10">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>White</th>
            <th>Rating</th>
            <th>Black</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {userGames.games
            .slice(0)
            .reverse()
            .map((game, id) => (
              <tr className="hover">
                <th>{id + 1}</th>
                <td>{game.white.username}</td>
                <td>{game.white.rating}</td>
                <td>{game.black.username}</td>
                <td>{game.black.rating}</td>
                <td>{game.time_class}</td>
                <td>
                  {game.pgn[52]}
                  {game.pgn[53]}/{game.pgn[55]}
                  {game.pgn[56]}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentGames;
