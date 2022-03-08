import { useEffect, useState } from "react";
import "./content.css";
import Messenger from "./SiteView/Messenger";
import NewTab from "./SiteView/NewTab";
import Page404 from "./SiteView/Page404";
import Youtube from "./SiteView/Youtube";

const Content = (props) => {
  const [nowTabs, setNowTab] = useState(props.selectedApp);
  const [tabs, setTabs] = useState(props.tabApp);

  useEffect(() => {
    setNowTab(props.selectedApp);
    setTabs(props.tabApp);
  }, [props]);

  const renderContent = () => {
    switch (tabs[nowTabs]) {
      case 0:
        return (
          <div className="h-100">
            <NewTab />
          </div>
        );
      case 1:
        return (
          <div className="h-100">
            <Messenger />
          </div>
        );
      case 2:
        return (
          <div className="h-100">
            <Youtube />
          </div>
        );
      case 3:
        return <div>This is MAP</div>;
      default:
        return (
          <div className="h-100">
            <Page404 />
          </div>
        );
    }
  };
  //      Vi tri tab {nowTabs} ------------ Type : {tabs[nowTabs]}
  // ...
  return <div className="content">{renderContent()}</div>;
};

export default Content;
