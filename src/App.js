 
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [tabs, setTabs] = useState([0]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    console.log(selectedTab);
  }, selectedTab);

  useEffect(() => {
    if (tabs.length > 5) alert("Tràn bộ nhớ, bạn đã mở quá nhiều tab, hãy đóng bớt.");
  }, [tabs]);

  const changeTab = (pos) => {
    setSelectedTab(pos);
  };

  return (
    <div className="App">
      <Header setTabsApp={setTabs} setSelectedTabApp={changeTab} />
      <Content tabApp={tabs} selectedApp={selectedTab} />
    </div>
  );
}

export default App;
