import {
  FETCH_USER_LIST,
  GETDATA,
  SEARCH_USER,
  SET_SEARCH,
  SIGNUP,
  DETAIL_USER,
  UPDATE_USER,
} from "../Containts";

const initialState = {
  dataSignUp: null,
  data: [],
  fetchUserList: {},
  isSearch: false,
  isUpdateUser: false,
  isDetailUser: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      state.dataSignUp = action.payload;
      return { ...state };
    case GETDATA:
      state.data = action.payload;
      return { ...state };
    case FETCH_USER_LIST:
      state.fetchUserList = action.payload;
      console.log("state.fetchUserList", state.fetchUserList);
      return { ...state };
    case SET_SEARCH:
      state.isSearch = action.payload;
      return { ...state };
    case SEARCH_USER:
      state.fetchUserList = action.payload;
      console.log("search.fetchUserList", state.fetchUserList);
      return { ...state };
    case UPDATE_USER:
      state.isUpdateUser = action.payload;
      return { ...state };
    case DETAIL_USER:
      state.isDetailUser = action.payload;
      return { ...state };
    default:
      return state;
  }
};
