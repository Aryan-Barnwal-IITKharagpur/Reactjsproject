import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "../Styles/CardContainer.css";
import { Modal } from "react-bootstrap";
import { FilledForm } from "../constants/FilledForm";
import FormModal from "./FormModal";
import axios from "axios";

function CardContainer() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      // const company_user_id=localStorage.getItem('company_user_id');
      const company_user_id="bdsjchjue3wc7494";
      const result = await axios.post("http://localhost:3000/form/getSome",{company_user_id});
      console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="cardContainer p-3">
        <div className="row d-flex justify-content-center">
          {data.map((data) => {
            return (<div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
              <Card.Body className="card">
                <Card.Title className="cardTitle">
                  <strong>{FilledForm.type}</strong>
                </Card.Title>
                <Card.Text className="cardDescription">
                  <div>Sector: {FilledForm.company_overview.sector}</div>
                  <div>Designation: {FilledForm.job_detail.designation}</div>
                </Card.Text>
                <Button
                  className="cardButton"
                  variant="outline-light"
                  onClick={handleShow}
                >
                  View
                </Button>
              </Card.Body>
            </div>

            )
          }
          )}
        </div>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {FilledForm.type === "INF" ? (
                <div>Internship Notification Form</div>
              ) : (
                <div>Job Notification Form</div>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormModal unique_id={FilledForm.unique_id} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
export default CardContainer;
