import { createContext, useReducer } from "react";
import chessReducer from "./ChessReducer";

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(chessReducer, initialState);

  return (
    <ChessContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export default ChessContext;
