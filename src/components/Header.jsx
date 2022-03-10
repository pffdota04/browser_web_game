// import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabsRedux, setNowTabRedux } from "./../store/actions/myAction";
import "./header.css";
const Header = (props) => {
  // const [tabs, setTabs] = useState([0]);
  // const [selectedTab, setSelectedTab] = useState(0);
  const dispatch = useDispatch();
  const reduxTabs = useSelector((state) => state.listTatCa.tabs);
  const reduxSelectedTab = useSelector((state) => state.listTatCa.nowTabs);

  useEffect(() => {
    // console.log(reduxTabs);
    let optab = localStorage.getItem("openTab");
    if (!optab && optab !== undefined) {
      localStorage.setItem("openTab", JSON.stringify(reduxTabs));
    } else {
      // setTabs(optab);
      dispatch(setTabsRedux(JSON.parse(optab)));
      dispatch(setNowTabRedux(0));
    }
  }, []);

  useEffect(() => {
    const optab = JSON.parse(localStorage.getItem("openTab"));
    if (optab !== reduxTabs && optab !== undefined)
      // console.log("CHANGEEEEEEEE");
      localStorage.setItem("openTab", JSON.stringify(reduxTabs));

    if (optab !== null && optab.length < reduxTabs.length) {
      //new tab
      document.getElementById("nav-" + (reduxTabs.length - 1)).click();
    } else if (optab !== null && optab.length > reduxTabs.length) {
      // xoa tab nhay ve tab cuoi
      document.getElementById("nav-" + (reduxTabs.length - 1)).click();
    }
    props.setTabsApp(reduxTabs);
  }, [reduxTabs]);

  useEffect(() => {
    localStorage.setItem("selectedTab", JSON.stringify(reduxSelectedTab));
    props.setSelectedTabApp(reduxSelectedTab);
  }, [reduxSelectedTab]);

  const rmTab = (pos) => {
    if (reduxTabs.length !== 1) {
      let cp = [...reduxTabs];
      cp.splice(pos, 1);
      dispatch(setTabsRedux(cp));
    }
  };

  const rederTabs = (tab, pos) => {
    switch (tab) {
      case 0:
        return (
          <button
            class={"nav-link  " + (pos === 0 ? "active" : "")}
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home "
            aria-selected="true"
            onClick={() => dispatch(setNowTabRedux(pos))}
            // onClick={() => setSelectedTab(pos)}
            id={"nav-" + pos}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/chrome--v1.png"
              alt="something"
              width={30}
            />{" "}
            <span className="d-sm-inline-block align-middle d-none ps-1">
              New tab{" "}
            </span>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
              alt="something"
              className="ms-3 header-tab__close close-tab-button"
              width={15}
              onClick={() => rmTab(pos)}
            />
          </button>
        );
      case 1:
        return (
          <button
            class={"nav-link  " + (pos === 0 ? "active" : "")}
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => dispatch(setNowTabRedux(pos))}
            // onClick={() => setSelectedTab(pos)}
            id={"nav-" + pos}
          >
            <img
              src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-messenger-social-media-prettycons-flat-prettycons.png"
              width={30}
              alt="something"
            />{" "}
            <span className="d-sm-inline-block align-middle d-none ps-1">
              Messenger{" "}
            </span>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
              alt="something"
              className="ms-3 close-tab-button"
              width={15}
              onClick={() => rmTab(pos)}
            />
          </button>
        );
      case 2:
        return (
          <button
            class={"nav-link  " + (pos === 0 ? "active" : "")}
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => dispatch(setNowTabRedux(pos))}
            id={"nav-" + pos}
          >
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="something"
              width={30}
            />
            <span className="d-sm-inline-block align-middle d-none ps-1">
              Youtube{" "}
            </span>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
              className="ms-3 close-tab-button"
              alt="something"
              width={15}
              onClick={() => rmTab(pos)}
            />
          </button>
        );
      default:
        return (
          <button
            class={"nav-link  " + (pos === 0 ? "active" : "")}
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => dispatch(setNowTabRedux(pos))}
            id={"nav-" + pos}
          >
            <img
              alt="something"
              src="https://www.svgrepo.com/show/265090/error.svg"
              width={30}
            />
            <span className="d-sm-inline-block align-middle d-none ps-1">
              404
            </span>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
              alt="something"
              className="ms-3 close-tab-button"
              width={15}
              onClick={() => rmTab(pos)}
            />
          </button>
        );
    }
  };

  return (
    <div className="header bg-secondary--fade">
      <nav className="h-100">
        <div
          class="all-tab nav nav-tabs h-100 text-dark"
          id="nav-tab"
          role="tablist"
        >
          {reduxTabs.map((e, i) => {
            return rederTabs(e, i);
          })}

          <button
            class="nav-link close-tab-button"
            onClick={() => {
              dispatch(setTabsRedux([...reduxTabs, 0]));
            }}
          >
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/50/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png"
              alt="something"
              width={30}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
