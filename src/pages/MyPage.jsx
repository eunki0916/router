import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return <div>MyPage</div>;
};

export default MyPage;
