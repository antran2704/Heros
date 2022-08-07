const initstate = {
  search: "",
  selectItem: {},
  listHeros: [],
};

const rootReducer = (state = initstate, action) => {
  switch (action.type) {
    case "listHeros":
      return {
        ...state,
        listHeros: action.payload,
      };
    case "searchText":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
