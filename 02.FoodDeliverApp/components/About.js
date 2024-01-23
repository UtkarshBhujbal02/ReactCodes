import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../components/ProfileClass";

const About = () => {
  return (
    <div>
      <h1>Hello My name is Utkarsh Bhujbal</h1>
      <Outlet />
      <Profile name={"Utkarsh Bhujbal"}/>
    </div>
  );
};

export default About;
