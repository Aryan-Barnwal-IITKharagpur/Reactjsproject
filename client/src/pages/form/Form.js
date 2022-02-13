import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import "./form.css";

export default function Form() {
  const [companyoverview, setCompanyoverview] = useState(false);
  const [jobdetail, setJobdetail] = useState(false);
  const [contact, setContact] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);

  const [secondarycontact, setSecondarycontact] = useState(false);
  const [modebutton, setModebutton] = useState("");
  const [ppo, setPpo] = useState("");
  return (
    <>
      <div>
        <div className="container col-lg-8 col-md-12 category p-0 ">
          <div
            className="upper"
            onClick={() => {
              if (companyoverview) {
                setCompanyoverview(false);
              } else {
                setCompanyoverview(true);
              }
            }}
          >
            <div className="category-heading">
              <h3>COMPANY OVERVIEW</h3>
              <div className="mx-4">
                {companyoverview === true ? (
                  <FaAngleDoubleUp />
                ) : (
                  <FaAngleDoubleDown />
                )}
              </div>
            </div>
          </div>
          {companyoverview === true ? (
            <div className="lower">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                />
                <label for="floatingInput">Name of Company</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Website"
                />
                <label for="floatingInput">Website</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Sector"
                />
                <label for="floatingInput">Sector</label>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="container col-lg-8 col-md-12 category p-0 ">
          <div
            className="upper"
            onClick={() => {
              if (jobdetail) {
                setJobdetail(false);
              } else {
                setJobdetail(true);
              }
            }}
          >
            <div className="category-heading">
              <h3>JOB DETAILS</h3>
              <div className="mx-4">
                {jobdetail === true ? (
                  <FaAngleDoubleUp />
                ) : (
                  <FaAngleDoubleDown />
                )}
              </div>
            </div>
          </div>
          {jobdetail === true ? (
            <div className="lower">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Designation"
                />
                <label for="floatingInput">Designation</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Place"
                />
                <label for="floatingInput">Place of Posting</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  className="form-control textbox"
                  placeholder="Description"
                  style={{ height: 100 }}
                ></textarea>
                <label>Description</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Duration"
                />
                <label for="floatingInput">Duration</label>
              </div>

              <div className="optionbox mb-3">
                <div className="optionbox-title">Mode of Intern: </div>
                <div>
                  <button
                    type="button"
                    className={
                      "optionbutton btn " +
                      (modebutton === "Virtual" ? "btn-primary" : "")
                    }
                    onClick={() => setModebutton("Virtual")}
                  >
                    Virtual
                  </button>
                  <button
                    type="button "
                    className={
                      "optionbutton btn " +
                      (modebutton === "Physical" ? "btn-primary" : "")
                    }
                    onClick={() => setModebutton("Physical")}
                  >
                    Physical
                  </button>
                </div>
              </div>
              {/* <p>June 10</p>
              <h3>
                A family saga with a supernatural twist, set in a German town,
                where the disappearance of two young children exposes...
              </h3>

              <p>June 10</p>
              <h3>
                A family saga with a supernatural twist, set in a German town,
                where the disappearance of two young children exposes...
              </h3>

              <p>June 10</p>
              <h3>
                A family saga with a supernatural twist, set in a German town,
                where the disappearance of two young children exposes...
              </h3> */}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="container col-lg-8 col-md-12 category p-0 ">
          <div
            className="upper"
            onClick={() => {
              if (stipenddetail) {
                setStipenddetail(false);
              } else {
                setStipenddetail(true);
              }
            }}
          >
            <div className="category-heading">
              <h3>STIPEND DETAILS</h3>
              <div className="mx-4">
                {stipenddetail === true ? (
                  <FaAngleDoubleUp />
                ) : (
                  <FaAngleDoubleDown />
                )}
              </div>
            </div>
            {/* <p>June 10</p> */}
          </div>
          {stipenddetail === true ? (
            <div className="lower">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="ctc"
                />
                <label for="floatingInput">CTC</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="ctcbreakup"
                />
                <label for="floatingInput">CTC breakup</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="bond detail"
                  style={{ height: 100 }}
                ></textarea>
                <label>Bond Detail</label>
              </div>

              {/* INTERN */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="stipend"
                />
                <label for="floatingInput">Stipend(Per Month)</label>
              </div>

              <div className="optionbox mb-3">
                <div className="optionbox-title">PPO Provision: </div>
                <div>
                  <button
                    type="button"
                    className={
                      "optionbutton btn " + (ppo === "Yes" ? "btn-primary" : "")
                    }
                    onClick={() => setPpo("Yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button "
                    className={
                      "optionbutton btn " + (ppo === "No" ? "btn-primary" : "")
                    }
                    onClick={() => setPpo("No")}
                  >
                    No
                  </button>
                </div>
              </div>
              {ppo === "Yes" ? (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="ctc if provided"
                  />
                  <label for="floatingInput">
                    CTC details, if PPO is provided{" "}
                  </label>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="container col-lg-8 col-md-12 category p-0 ">
          <div
            className="upper"
            onClick={() => {
              if (contact) {
                setContact(false);
              } else {
                setContact(true);
              }
            }}
          >
            <div className="category-heading">
              <h3>CONTACT DETAILS</h3>
              <div className="mx-4">
                {contact === true ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
              </div>
            </div>
            {/* <p>June 10</p> */}
          </div>
          {contact === true ? (
            <div className="lower">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="designation"
                />
                <label for="floatingInput">Designation</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="mobile"
                />
                <label for="floatingInput">Mobile</label>
              </div>

              <div className="mb-3 optionbox">
                <div className="optionbox-title">
                  Add Secondary Contact Details:{" "}
                </div>
                <div>
                  <button
                    type="button"
                    className={
                      "optionbutton btn " +
                      (secondarycontact === "Yes" ? "btn-primary" : "")
                    }
                    onClick={() => setSecondarycontact("Yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button "
                    className={
                      "optionbutton btn " +
                      (secondarycontact === "No" ? "btn-primary" : "")
                    }
                    onClick={() => setSecondarycontact("No")}
                  >
                    No
                  </button>
                </div>
              </div>
              {secondarycontact === "Yes" ? (
                <div>
                  <p className="mx-2">Secondary Contact:</p>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="designation"
                    />
                    <label for="floatingInput">Designation</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="mobile"
                    />
                    <label for="floatingInput">Mobile</label>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
