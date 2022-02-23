import React, { useState, useEffect } from "react";
import axios from "axios";
// import Base from "../../base.js";
import { Button, Card, Modal,Form, FormControl, Badge } from "react-bootstrap";
import { FaGlobe, FaList, FaSearch } from "react-icons/fa";
import Footer from "../../Components/Footer.jsx";
import Header from "../../Components/Header.js";
// import ListingSection from "../../Components/ListingSection.jsx";
import StatsCard from "../../Components/StatsCard.jsx";
import "./Admin_dashboard.css";
import { Link } from "react-router-dom";

export default function Admin_dashboard() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hrname, sethrName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [internTimePeriod, setInternTimePeriod] = useState("");
  const [internView, setInternView] = useState(false);
  const handleSubmit = async () => {
    console.log("adsdkf");
    const testAccount = {
      user: "indulge1239@gmail.com",
      pass: "Indulge@12#",
    };
    const email_data = {
      company_name: companyName,
      email_id: email,
      invitation_type: internView === false ? "JNF" : "INF",
    };
    const response = await axios.post(
      `http://localhost:3000/email/send_invite`,
      email_data
    );

    console.log(response.data);
    const user_data = {
      user_id: response.data.user_id,
      password: response.data.password,
      company_name: companyName,
      hr_name: hrname,
      email_id: email,
    };
    const result = await axios.post(
      "http://localhost:3000/user/save",
      user_data
    );
    console.log(result);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/form/getAll");
      setData(result.data);
    };

    fetchData();
  }, []);

  const [showJNFINF,setShowJNFINF]=useState("JNF");

  return (
    <>
      {/* modal for automated email */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Automated Invitation Form</Modal.Title>
        </Modal.Header>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setCompanyName(() => e.target.value)}
          />
          <label for="floatingInput">Name of Company</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setEmail(() => e.target.value)}
          />
          <label for="floatingInput">Email Adress</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => sethrName(() => e.target.value)}
          />
          <label for="floatingInput">Name of HR</label>
        </div>
        <select
          onChange={(e) => setInternView(() => e.target.value)}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>for INF or JNF</option>
          <option value="1">For Internship</option>
          <option value="2">For Jobs</option>
        </select>
        {internView === "1" ? (
          <select
            onChange={(e) => setInternTimePeriod(() => e.target.value)}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Duration</option>
            <option value="1">2 months</option>
            <option value="2">6 months</option>
          </select>
        ) : (
          <></>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send Invitation
          </Button>
        </Modal.Footer>
      </Modal>

      <Header />
      <div className="row">
        <div className="col">
          {/* <!-- hero section  --> */}
          <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-4 fw-bold">Career Development Center</h1>
            <h3 className="display-10 text-muted mb-4">CDC, IIT ISM Dhanbad</h3>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button
                  type="button"
                  onClick={handleShow}
                  className="btn btn-lg px-4 me-sm-3 bg-light border d-flex align-items-center"
                >
                  Send Invitation &nbsp;
                  <svg
                    style={{ height: "20px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          {/* <!-- image section  --> */}
          <div className="overflow-hidden my-5 rounded">
            <div
              className="container my-5 px-5"
              style={{ width: "700px", height: "500px" }}
            >
              <img
                src="https://source.unsplash.com/random/700x900"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="700px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <StatsCard />
      <hr />
      {/* <ListingSection /> */}
      <div className="responseContainer m-3 p-4">
        <div className="SearchBarContainer mx-5">
          <div className="searchBar ">
            <Form className="d-flex">
              <Button variant="outline-primary searchBarButton" id='btn1'><FaSearch />
              </Button>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 searchform"
                aria-label="Search"
              />

            </Form>
          </div>
          <Button onClick={() => setShowJNFINF("INF")} variant="outline-primary searchBarButton" id='btn2'>INF</Button>
          <Button onClick={() => setShowJNFINF("JNF")} variant="outline-primary searchBarButton" id='btn3'>JNF</Button>

          <div className="filterBar p-4">
            <span>Filterbar</span>

          </div>


        </div>
        <div className="dataContainer ">
          <div className="mainData">
              <div className="lead p-4"><strong>Google</strong></div>
              <Badge bg="secondary dataBadge">JNF</Badge>{' '}
              </div>
              <div className="dataButtons">
              <a href="https//:googlecom">  <FaGlobe className="dataIcons m-3" /></a>
                <FaList className="dataIcons m-3"/>
              </div>
            </div>
        {/* {(showJNFINF == "JNF") ? <div className="container ">JNF</div> : <div className="container">INF</div>} */}
        {/* {data.map((data) => {
          return (
            
            
            )
        })} */}
      </div>
      <Footer />
    </>
  );
}
