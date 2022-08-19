import { useReducer } from "react";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import reducer from "../Reducers/reducer";

let Api = "https://hn.algolia.com/api/v1/search?";

const initState = {
  isLoading: false,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const FetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log("Error...");
    }
  };

  //Delete Post

  const removePost = (post_Id) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_Id,
    });
  };

  // search function =>

  const searchPost = (userInput) => {
    dispatch({ type: "SEARCH_QUERY", payload: userInput });
  };

  //call api
  useEffect(() => {
    FetchApiData(`${Api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  //Pagination

  const getNextPage = () => {
    dispatch({
      type: "GET_NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "GET_PREV_PAGE",
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//GlobalContext
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, useGlobalContext };
