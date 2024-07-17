import React, { useEffect } from "react";
import Header from "./Header";
import Foater from "./Foater";
import CandidateList from "./CandidateList";


const Homepage = () => {
 
  return (
    <>
      <Header />
      <CandidateList />
      <Foater />
    </>
  );
};

export default Homepage;
