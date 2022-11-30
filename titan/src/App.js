import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import MemberGrid from "./components/MemberGrid.js";
import getData from "./rest/getData";
import Member from "./views/Member";
import MemberContext from "./components/MemberContext";
import SplashLayout from "./views/SplashLayout";
import ContentLayout from "./views/ContentLayout";
import AddMember from "./components/AddMember.js";
import AddCert from "./components/AddCert.js";
import DeleteCert from "./components/DeleteCert.js";


function App() {
  const [queryResults, setQueryResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [memberList, setMemberList] = useState([]);
  useEffect(() => {
    getData()
      .then(response => {
        setMemberList(response)
        setQueryResults(response)
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <MemberContext.Provider value={[
          memberList,
          queryResults,
          setQueryResults,
          searchTerm,
          setSearchTerm
        ]}>
          <Routes>
            <Route element={<SplashLayout />}>
              < Route path="/" element={<Landing />} />
            </Route>
            <Route element={<ContentLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/testing" element={<MemberGrid />} />
              <Route path="/home/members/:id" element={<Member />} />
              <Route path="/add_member" element={<AddMember />} />
              <Route path="/add_certification" element={<AddCert />} />
              <Route path="/delete_certification" element={<AddCert />} />
            </Route>
          </Routes>
        </MemberContext.Provider>
      </Router>
    </div>
  );
}

export default App;
