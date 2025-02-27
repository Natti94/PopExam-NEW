import React from "react";
import RandomQuestion from "../components/randomQuestion"; 

const Start = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome to the Quiz</h1>
    <RandomQuestion/>
    </div>
  )
};

export default Start;
