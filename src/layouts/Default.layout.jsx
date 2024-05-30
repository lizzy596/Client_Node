import React from "react";
import { Navigation } from "../components/Navigation";

const DefaultLayout = ({ children }) => {
  return(
    <>
    <Navigation navTitle={'Welcome'} />
   <div>{children}</div>
   </>
   
)};

export default DefaultLayout;

