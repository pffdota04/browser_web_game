const initialState = {
  tabs: [0],
  nowTabs: 0,
  messMove: {},
  ytbMove: {},
};

const listTatCa = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABS": {
      return {
        ...state,
        tabs: action.payload,
      };
    }
    case "SET_NOW_TAB":
      return {
        ...state,
        nowTabs: action.payload,
      };
    case "SET_MESS":
      return {
        ...state,
        messMove: action.payload,
      };
    case "SET_YTB":
      return {
        ...state,
        ytbMove: action.payload,
      };
    default:
      return state;
  }
};

export default listTatCa;
