import React from "react";
import { useLocation } from 'react-router-dom';
import MemberGrid from "../components/MemberGrid";
import MemberContext from '../components/MemberGrid';



const Home = () => {
  const { search } = useLocation();
  const query = (search.split('='));


  return (
    <MemberGrid query={query} />
  );
};

export default Home;
