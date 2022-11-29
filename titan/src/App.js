import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import MemberGrid from "./views/MemberGrid.js";
import getData from "./rest/getData";
import Member from "./views/Member";
import MemberContext from "./components/MemberContext";
import SplashLayout from "./views/SplashLayout";
import ContentLayout from "./views/ContentLayout";

function App() {
  const [memberList, setMemberList] = useState([]);
  useEffect(() => {
    getData()
      .then(response => setMemberList(response));
  }, []);
  return (
    <div className="App">
      <Router>
        <MemberContext.Provider value={[memberList, setMemberList]}>
          <Routes>
            <Route element={<SplashLayout />}>
              < Route path="/" element={<Landing />} />
            </Route>
            <Route element={<ContentLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/testing" element={<MemberGrid />} />
              <Route path="/:id" element={<Member />} />
            </Route>
          </Routes>
        </MemberContext.Provider>
      </Router>
    </div>
  );
}

export default App;
