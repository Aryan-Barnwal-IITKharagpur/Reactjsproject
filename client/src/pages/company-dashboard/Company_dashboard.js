import React from "react";
import "./Company_dashboard.css";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import CardContainer from "../../Components/CardContainer";
import Hero_section from "../../Components/HeroContainer";

export default function Company_dashboard() {
  return (
    <div className="company-dashboard-container">
      <Hero_section />
      <CardContainer />
    </div>
  );
}