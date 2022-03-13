import "./newTab.css";
import { useDispatch, useSelector } from "react-redux";
import { setTabsRedux } from "./../../store/actions/myAction";
import { useEffect } from "react";

const NewTab = () => {
  const reduxSelectedTab = useSelector((state) => state.listTatCa.nowTabs);
  const reduxTabs = useSelector((state) => state.listTatCa.tabs);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(reduxTabs);
  }, [reduxTabs]);
  return (
    <div className="newTab">
      <div className="newTab-icon ">
        <img
          src="https://seeklogo.com/images/F/facebook-messenger-new-2020-logo-30E9B0E51B-seeklogo.com.png"
          width={80}
          alt="something"
          className="border border-2 m-2 p-3   hover-point"
          onClick={() => {
            let cp = [...reduxTabs];
            cp[reduxSelectedTab] = 1;
            dispatch(setTabsRedux(cp));
          }}
        />
        <img
          src="https://img.icons8.com/color/80/000000/youtube-play.png"
          width={80}
          className="border border-2 m-2 hover-point"
          alt="something"
          onClick={() => {
            let cp = [...reduxTabs];
            cp[reduxSelectedTab] = 2;
            dispatch(setTabsRedux(cp));
          }}
        />
        <img
          src="https://en.apkshki.com/storage/4369/icon_5f0f28769f545_4369_w256.png"
          width={80}
          className="border border-2 m-2 p-2 hover-point"
          alt="something"
          onClick={() => {
            let cp = [...reduxTabs];
            cp[reduxSelectedTab] = 9;
            dispatch(setTabsRedux(cp));
          }}
        />{" "}
        <img
          src="https://brandlogos.net/wp-content/uploads/2016/11/twitter-icon-circle-blue-logo-preview-400x400.png"
          width={80}
          className="border border-2 m-2 p-2 hover-point"
          alt="something"
          onClick={() => {
            let cp = [...reduxTabs];
            cp[reduxSelectedTab] = 9;
            dispatch(setTabsRedux(cp));
          }}
        />{" "}
      </div>
    </div>
  );
};

export default NewTab;
