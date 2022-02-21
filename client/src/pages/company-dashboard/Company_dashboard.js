import React from "react";
import "./Company_dashboard.css";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import CardContainer from "../../Components/CardContainer";

export default function Company_dashboard() {
  return (
    <>
      <Header />
      <div className="container my-4  mainContainer position-relative">
        <div className="row px-5">
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

            <div className="button-inf">
              <div className="cd-button-div">
                <Link to="/form">
                  <button className=" cd-button " to="/form">
                    {" "}
                    FILL INF
                  </button>
                </Link>
              </div>
              <div className="cd-button-div ">
                <Link to="/form">
                  <button className=" cd-button " to="/form">
                    {" "}
                    FILL JNF
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container col-lg-8 py-4 col-md-12 col-sm-12 imageContainer image-responsive "></div>
        </div>
      </div>
      <div className="svgWave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,122.7C672,117,768,171,864,176C960,181,1056,139,1152,101.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <CardContainer />
    </>
  );
}