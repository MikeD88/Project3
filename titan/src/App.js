import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import MemberGrid from "./components/MemberGrid.js";
import Member from "./views/Member";
import MemberContext from "./components/MemberContext";
import SplashLayout from "./views/SplashLayout";
import ContentLayout from "./views/ContentLayout";
import AddMember from "./components/AddMember.js";
import AddCert from "./components/AddCert.js";
import ErrorPage from "./views/ErrorPage";
import Box from '@mui/material/Box';
import Navbar from "./components/Navbar";
import AllTraining from "./views/AllTraining";


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const options = new Headers({
        'Content-type': 'application/json',
      });
      const res = await fetch('http://localhost:8081/members', options);
      const data = await res.json();
      setMemberList(data);
    }
    getData()
      .catch(console.log)
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <Box>
          <header className="App-header">
            <MemberContext.Provider value={[
              memberList,
              setMemberList,
              searchTerm,
              setSearchTerm
            ]}>
              <Routes>
                <Route element={<SplashLayout />} >
                  <Route path="/" element={<Landing />} />
                </Route>
                <Route element={<ContentLayout />} >
                  <Route path="/trainings" element={<AllTraining />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/testing" element={<MemberGrid />} />
                  <Route path="/home/members/:id" element={<Member />} />
                  <Route path="/add-member" element={<AddMember />} />
                  <Route path="/add-cert" element={<AddCert />} />
                  <Route path="/*" element={<ErrorPage />} />
                </Route>

              </Routes>
            </MemberContext.Provider>
          </header>
        </Box>
      </div>
    </>
  );
}

export default App;
