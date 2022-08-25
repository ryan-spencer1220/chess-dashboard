import axios from "axios";
const CHESS_URL = "https://api.chess.com/pub/player/rspencer1220";

const chess = axios.create({
  baseURL: CHESS_URL,
});

// Get Search Results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await chess.get(`/search/users?${params}`);
  return response.data.items;
};

// Get User
export const getUserAndRepos = async (login) => {
  const [user] = await Promise.all([chess.get(`/users/${login}`)]);

  return { user: user.data };
};
