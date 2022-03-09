export const setTabsRedux = (data) => {
  return {
    type: "SET_TABS",
    payload: data,
  };
};

export const setNowChat = (data) => {
  return {
    type: "SET_CHAT",
    payload: data,
  };
};

export const setNowTabRedux = (data) => {
  return {
    type: "SET_NOW_TAB",
    payload: data,
  };
};

export const setMessRedux = (data) => {
  return {
    type: "SET_MESS",
    payload: data,
  };
};
export const setYtbRedux = (data) => {
  return {
    type: "SET_YTB",
    payload: data,
  };
};
