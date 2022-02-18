import React, { useState } from "react";
import "./Company_dashboard.css";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import CardContainer from "../../Components/CardContainer";
import Form from "./../form/Form";

export default function Company_dashboard(props) {
  return (
    <>
      <Header />
      <div className="container my-4 p-3 mainContainer">
        <div className="row">
          <div className="container col-lg-8 col-md-12 col-sm-12 p-4 cd-box2">
            <div>
              <h1 className="cd-heading1" data-text="Career Development Centre">
                Career Development Centre
              </h1>{" "}
              <div className="cd-heading2">
                <span className="cd-heading2-span "> CDC, </span>IIT(ISM)
                Dhanbad
              </div>
            </div>
            <div className="cd-heading3 h2">
              Welcome to the Career Development Centre Portal of Indian
              Institute of Technology.{" "}
              <span className="cd-heading4">
                Click the suitable option below to fill the Notification Form.
              </span>
            </div>

            <div className="flex-container button-inf">
              <div className="cd-button-div">
                <Link to="/form">
                  <button
                    className=" cd-button "
                    to="/form"
                    onClick={() => {
                      props.setType("INF");
                      // <Form type={props.type} />;
                    }}
                  >
                    {" "}
                    FILL INF
                  </button>
                </Link>
              </div>
              <div className="cd-button-div ">
                <Link to="/form" type="JNF">
                  <button
                    className=" cd-button "
                    to="/form"
                    onClick={() => {
                      props.setType("JNF");
                      // setType("JNF");
                    }}
                  >
                    {" "}
                    FILL JNF
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container col-lg-4 col-md-12 col-sm-12 imageContainer"></div>
        </div>
      </div>
      <CardContainer />
    </>
  );
}
