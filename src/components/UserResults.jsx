import { useContext } from "react";
import { ChessContext } from "../context/ChessContext";
import UserItem from "./UserItem";

function UserResults() {
  const { userData } = useContext(ChessContext);

  if (userData) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <UserItem user={userData} />
        {console.log("Hello1", userData)}
      </div>
    );
  } else {
    return <p>Dogs</p>;
  }
}

export default UserResults;
