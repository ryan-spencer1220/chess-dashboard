import UserItem from "../users/UserItem";

function UserResults({ user }) {
  <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
    <UserItem key={user.id} user={user} />
  </div>;
}

export default UserResults;
