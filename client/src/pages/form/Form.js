import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [jobdetail, setJobdetail] = useState(false);
  const [contact, setContact] = useState(false);
  const [secondarycontact, setSecondarycontact] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);
  const [modebutton, setModebutton] = useState("");
  const [ppo, setPpo] = useState("");
  return (
    <>
      <div>
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
            {/* <p>June 10</p> */}
            <h3>JOB DETAILS</h3>
          </div>
          {jobdetail === true ? (
            <div className="lower">
              {/* <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div> */}
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
                <span className="mx-2">Mode of Intern: </span>
                <button
                  type="button"
                  className={
                    "btn mx-3 px-3 " +
                    (modebutton === "Virtual" ? "btn-primary" : "")
                  }
                  onClick={() => setModebutton("Virtual")}
                >
                  Virtual
                </button>
                <button
                  type="button "
                  className={
                    "btn mx-3 px-3 " +
                    (modebutton === "Physical" ? "btn-primary" : "")
                  }
                  onClick={() => setModebutton("Physical")}
                >
                  Physical
                </button>
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
            {/* <p>June 10</p> */}
            <h3>STIPEND DETAILS</h3>
          </div>
          {stipenddetail === true ? (
            <div className="lower">
              {/* <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div> */}
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
                <span className="mx-2">PPO Provision: </span>
                <button
                  type="button"
                  className={
                    "btn mx-3 px-3 " + (ppo === "Yes" ? "btn-primary" : "")
                  }
                  onClick={() => setPpo("Yes")}
                >
                  Yes
                </button>
                <button
                  type="button "
                  className={
                    "btn mx-3 px-3 " + (ppo === "No" ? "btn-primary" : "")
                  }
                  onClick={() => setPpo("No")}
                >
                  No
                </button>
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
            {/* <p>June 10</p> */}
            <h3>CONTACT DETAILS</h3>
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
                <span className="mx-2">Add Secondary Contact Details: </span>
                <button
                  type="button"
                  className={
                    "btn mx-3 px-3 " +
                    (secondarycontact === "Yes" ? "btn-primary" : "")
                  }
                  onClick={() => setSecondarycontact("Yes")}
                >
                  Yes
                </button>
                <button
                  type="button "
                  className={
                    "btn mx-3 px-3 " +
                    (secondarycontact === "No" ? "btn-primary" : "")
                  }
                  onClick={() => setSecondarycontact("No")}
                >
                  No
                </button>
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
