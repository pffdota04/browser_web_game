const initialState = {
  tabs: [0],
  nowTabs: 0,
  nowChat: 0,
  chats: [
    [
      {
        from: 0,
        chat: "tuần trước",
      },
      {
        from: 1,
        chat: 58,
      },
      {
        from: -1,
        chat: 59,
      },
      {
        from: 1,
        chat: 60,
      },
      {
        from: 1,
        chat: 61,
      },
      {
        from: 1,
        chat: 62,
      },
      {
        from: -1,
        chat: 63,
      },
      {
        from: 0,
        chat: "2 ngày trước",
      },
      {
        from: 1,
        chat: 64,
      },
      {
        from: -1,
        chat: 65,
      },
      {
        from: 1,
        chat: 66,
      },
      {
        from: -1,
        chat: 67,
      },
      {
        from: 1,
        chat: 68,
      },
      {
        from: 0,
        chat: "15:30",
      },
      {
        from: 1,
        chat: 69,
      },
      {
        from: -1,
        chat: 70,
      },
      {
        from: 1,
        chat: 71,
      },
      {
        from: -1,
        chat: 72,
      },
      {
        from: 1,
        chat: 73,
      },
    ],
    [
      {
        from: -1,
        chat: 42,
      },
      {
        from: 1,
        chat: 43,
      },
      {
        from: 1,
        chat: 44,
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
        from: 0,
        chat: "hôm qua",
      },

      {
        from: -1,
        chat: 47,
      },
      {
        from: -1,
        chat: 48,
      },
      {
        from: -1,
        chat: 49,
      },
      {
        from: 1,
        chat: 50,
      },
    ],
    [
      {
        from: 1,
        chat: 51,
      },
      {
        from: 1,
        chat: 52,
      },
      {
        from: -1,
        chat: 53,
      },
      {
        from: 1,
        chat: 54,
      },
      {
        from: -1,
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
    ],
    [
      {
        from: -1,
        chat: 74,
      },
      {
        from: -1,
        chat: 74,
      },
      {
        from: 1,
        chat: 74,
      },
      {
        from: 1,
        chat: 74,
      },
      {
        from: -1,
        chat: 74,
      },
    ],
    [
      {
        from: 1,
        chat: 69,
      },
      {
        from: -1,
        chat: 75,
      },
    ],
  ],
  messMove0: 0,
  messMove1: 81,
  messMove2: 79,
  messMove3: 0,
  messMove4: 69,
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
    case "SET_MESS_0":
      return {
        ...state,
        messMove0: action.payload,
      };
    case "SET_MESS_1":
      return {
        ...state,
        messMove1: action.payload,
      };
    case "SET_MESS_2":
      return {
        ...state,
        messMove2: action.payload,
      };
    case "SET_MESS_3":
      return {
        ...state,
        messMove3: action.payload,
      };
    case "SET_MESS_4":
      return {
        ...state,
        messMove4: action.payload,
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
