const initialState = {
  tabs: [0],
  nowTabs: 0,
  nowChat: 0,
  chats: [
    [
      {
        from: 0,
        chat: "hôm qua",
      },
      {
        from: -1,
        chat: 17,
      },
      {
        from: 1,
        chat: 37,
      },
      {
        from: -1,
        chat: 38,
      },
      {
        from: 1,
        chat: 39,
      },
      {
        from: 1,
        chat: 40,
      },
      {
        from: -1,
        chat: 41,
      },
      {
        from: 1,
        chat: 42,
      },
      {
        from: -1,
        chat: 6,
      },
      {
        from: 0,
        chat: "2:14am",
      },
      {
        from: -1,
        chat: 21,
      },
      {
        from: -1,
        chat: 64,
      },
      {
        from: -1,
        chat: 26,
      },
      {
        from: -1,
        chat: 65,
      },
      {
        from: -1,
        chat: 22,
      },
      {
        from: -1,
        chat: 24,
      },
    ],

    [
      {
        from: -1,
        chat: 1,
      },
      {
        from: 1,
        chat: 13,
      },
      {
        from: -1,
        chat: 14,
      },
      {
        from: 1,
        chat: 4,
      },
      {
        from: 0,
        chat: "hôm qua",
      },
      {
        from: 1,
        chat: 50,
      },
      {
        from: 1,
        chat: 51,
      },
      {
        from: -1,
        chat: 52,
      },
      {
        from: 1,
        chat: 53,
      },
      {
        from: -1,
        chat: 54,
      },
      {
        from: 1,
        chat: 55,
      },
      {
        from: 1,
        chat: 56,
      },
      {
        from: -1,
        chat: 57,
      },
      {
        from: -1,
        chat: 58,
      },
    ],
    [
      {
        from: 1,
        chat: 44,
      },
      {
        from: 1,
        chat: 43,
      },
      {
        from: -1,
        chat: 45,
      },
      {
        from: 1,
        chat: 46,
      },
      {
        from: 1,
        chat: 47,
      },
      {
        from: -1,
        chat: 48,
      },
      {
        from: 1,
        chat: 10,
      },
      {
        from: -1,
        chat: 49,
      },
    ],
    [
      {
        from: -1,
        chat: 59,
      },
      {
        from: -1,
        chat: 59,
      },
      {
        from: 1,
        chat: 59,
      },
      {
        from: 1,
        chat: 59,
      },
      {
        from: -1,
        chat: 59,
      },
    ],
    [
      {
        from: 1,
        chat: 60,
      },
      {
        from: -1,
        chat: 61,
      },
      {
        from: -1,
        chat: 62,
      },
      {
        from: -1,
        chat: 63,
      },
    ],
  ],
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
    case "SET_CHAT": {
      return {
        ...state,
        nowChat: action.payload,
      };
    }
    case "SET_CHAT_CONTENT": {
      return {
        ...state,
        chats: action.payload,
      };
    }
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
