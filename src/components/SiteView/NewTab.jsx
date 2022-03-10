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
          src="https://img.icons8.com/external-prettycons-flat-prettycons/32/000000/external-messenger-social-media-prettycons-flat-prettycons.png"
          width={80}
          alt="something"
          className="border border-2 m-2 p-1"
          onClick={() => {
            let cp = [...reduxTabs];
            cp[reduxSelectedTab] = 1;
            dispatch(setTabsRedux(cp));
          }}
        />
        <img
          src="https://img.icons8.com/color/80/000000/youtube-play.png"
          width={80}
          className="border border-2 m-2"
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
          className="border border-2 m-2 p-2"
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
