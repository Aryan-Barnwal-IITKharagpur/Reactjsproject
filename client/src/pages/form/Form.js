import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { btech } from "../../constants/Btech";
import { dual_mtech } from "../../constants/Dual_Mtech";
import { mbacourse } from "../../constants/Mba";
import { msc2 } from "../../constants/Msc2";
import { msc3 } from "../../constants/Msc3";
import { mtech } from "../../constants/Mtech";
import { phd } from "../../constants/Phd";
import "./form.css";

export default function Form(props) {
  // console.log(props.type);
  const [companyoverview, setCompanyoverview] = useState(false);
  const [jobdetail, setJobdetail] = useState(false);
  const [contact, setContact] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [btechdiv, setBtechdiv] = useState(false);
  const [dual_mtechdiv, setdual_mtechdiv] = useState(false);
  const [mbadiv, setmbadiv] = useState(false);
  const [msc2div, setmsc2div] = useState(false);
  const [msc3div, setmsc3div] = useState(false);
  const [mtechdiv, setmtechdiv] = useState(false);
  const [phddiv, setphddiv] = useState(false);

  const [secondarycontact, setSecondarycontact] = useState(false);
  const [modebutton, setModebutton] = useState("");
  const [ppo, setPpo] = useState("");

  const [name, setname] = useState("");
  const [website, setwebsite] = useState("");
  const [sector, setsector] = useState("");
  const [designation, setDesignation] = useState("");
  const [place_of_posting, setplace_of_posting] = useState("");
  const [description, setdescription] = useState("");
  const [duration, setduration] = useState("");
  const [mode, setmode] = useState("");
  const [ctc, setctc] = useState("");
  const [ctc_breakup, setctc_breakup] = useState("");
  const [bond_detail, setbond_detail] = useState("");
  const [stipend, setstipend] = useState("");
  const [ppo_provision, setppo_provision] = useState("");
  const [ctc_ppo, setctc_ppo] = useState("");
  const [contactname1, setcontactname1] = useState("");
  const [contactdesignation1, setcontactdesignation1] = useState("");
  const [contactemail1, setcontactemail1] = useState("");
  const [mobile1, setmobile1] = useState("");
  const [contactname2, setcontactname2] = useState("");
  const [contactdesignation2, setcontactdesignation2] = useState("");
  const [contactemail2, setcontactemail2] = useState("");
  const [mobile2, setmobile2] = useState("");
  // const [, set] = useState("");
  // const [, set] = useState("");
  // const [, set] = useState("");

  const [btecharray, setbtecharray] = useState([]);
  const [dual_mtecharray, setdual_mtecharray] = useState([]);
  const [mbaarray, setmbaarray] = useState([]);
  const [msc2array, setmsc2array] = useState([]);
  const [msc3array, setmsc3array] = useState([]);
  const [mtecharray, setmtecharray] = useState([]);
  const [phdarray, setphdarray] = useState([]);

  function handleChangeBtech(e) {
    var updatedList = [...btecharray];
    if (e.target.checked) {
      updatedList = [...btecharray, e.target.value];
    } else {
      updatedList = btecharray.filter((item) => item !== e.target.value);
    }
    setbtecharray(() => updatedList);
  }
  function handleChangedual_mtech(e) {
    var updatedList = [...dual_mtecharray];
    if (e.target.checked) {
      updatedList = [...dual_mtecharray, e.target.value];
    } else {
      updatedList = dual_mtecharray.filter((item) => item !== e.target.value);
    }
    setdual_mtecharray(() => updatedList);
  }
  function handleChangemba(e) {
    var updatedList = [...mbaarray];
    if (e.target.checked) {
      updatedList = [...mbaarray, e.target.value];
    } else {
      updatedList = mbaarray.filter((item) => item !== e.target.value);
    }
    setmbaarray(() => updatedList);
  }
  function handleChangemsc2(e) {
    var updatedList = [...msc2array];
    if (e.target.checked) {
      updatedList = [...msc2array, e.target.value];
    } else {
      updatedList = msc2array.filter((item) => item !== e.target.value);
    }
    setmsc2array(() => updatedList);
  }
  function handleChangemsc3(e) {
    var updatedList = [...msc3array];
    if (e.target.checked) {
      updatedList = [...msc3array, e.target.value];
    } else {
      updatedList = msc3array.filter((item) => item !== e.target.value);
    }
    setmsc3array(() => updatedList);
  }
  function handleChangemtech(e) {
    var updatedList = [...mtecharray];
    if (e.target.checked) {
      updatedList = [...mtecharray, e.target.value];
    } else {
      updatedList = mtecharray.filter((item) => item !== e.target.value);
    }
    setmtecharray(() => updatedList);
  }
  function handleChangephd(e) {
    var updatedList = [...phdarray];
    if (e.target.checked) {
      updatedList = [...phdarray, e.target.value];
    } else {
      updatedList = phdarray.filter((item) => item !== e.target.value);
    }
    setphdarray(() => updatedList);
  }

  return (
    <>
      <div>
        {/* {console.log(btecharray)}
        {console.log(dual_mtecharray)}
        {console.log(msc3array)} */}
        <div className="container col-lg-8 col-md-12 category p-0 ">
          <div
            className="upper"
            onClick={() => {
              setTimeout(() => {
                if (companyoverview) {
                  setCompanyoverview(false);
                } else {
                  setCompanyoverview(true);
                }
              }, 200);
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
                  onChange={(e) => setname(() => e.target.value)}
                />
                <label for="floatingInput">Name of Company</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Website"
                  onChange={(e) => setwebsite(() => e.target.value)}
                />
                <label for="floatingInput">Website</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Sector"
                  onChange={(e) => setsector(() => e.target.value)}
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
              setTimeout(() => {
                if (jobdetail) {
                  setJobdetail(false);
                } else {
                  setJobdetail(true);
                }
              }, 200);
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
                  onChange={(e) => setDesignation(() => e.target.value)}
                />
                <label for="floatingInput">Designation</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Place"
                  onChange={(e) => setplace_of_posting(() => e.target.value)}
                />
                <label for="floatingInput">Place of Posting</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  className="form-control textbox"
                  placeholder="Description"
                  style={{ height: 100 }}
                  onChange={(e) => setdescription(() => e.target.value)}
                ></textarea>
                <label>Description</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Duration"
                  onChange={(e) => setduration(() => e.target.value)}
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
                    onClick={() => {
                      setModebutton("Virtual");
                      setmode(() => "Virtual");
                    }}
                  >
                    Virtual
                  </button>
                  <button
                    type="button "
                    className={
                      "optionbutton btn " +
                      (modebutton === "Physical" ? "btn-primary" : "")
                    }
                    onClick={() => {
                      setModebutton("Physical");
                      setmode(() => "Physical");
                    }}
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
              setTimeout(() => {
                if (stipenddetail) {
                  setStipenddetail(false);
                } else {
                  setStipenddetail(true);
                }
              }, 200);
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
              {props.type === "JNF" ? (
                <div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="ctc"
                      onChange={(e) => setctc(() => e.target.value)}
                    />
                    <label for="floatingInput">CTC</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="ctcbreakup"
                      onChange={(e) => setctc_breakup(() => e.target.value)}
                    />
                    <label for="floatingInput">CTC breakup</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="bond detail"
                      style={{ height: 100 }}
                      onChange={(e) => setbond_detail(() => e.target.value)}
                    ></textarea>
                    <label>Bond Detail</label>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="stipend"
                      onChange={(e) => setstipend(() => e.target.value)}
                    />
                    <label for="floatingInput">Stipend(Per Month)</label>
                  </div>

                  <div className="optionbox mb-3">
                    <div className="optionbox-title">PPO Provision: </div>
                    <div>
                      <button
                        type="button"
                        className={
                          "optionbutton btn " +
                          (ppo === "Yes" ? "btn-primary" : "")
                        }
                        onClick={() => {
                          setPpo(() => "Yes");
                          setppo_provision(() => "Yes");
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button "
                        className={
                          "optionbutton btn " +
                          (ppo === "No" ? "btn-primary" : "")
                        }
                        onClick={() => {
                          setPpo(() => "No");
                          setppo_provision(() => "No");
                        }}
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
                        onChange={(e) => setctc_ppo(() => e.target.value)}
                      />
                      <label for="floatingInput">
                        CTC details, if PPO is provided{" "}
                      </label>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
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
              setTimeout(() => {
                if (contact) {
                  setContact(false);
                } else {
                  setContact(true);
                }
              }, 200);
            }}
          >
            <div className="category-heading">
              <h3>CONTACT DETAILS</h3>
              <div className="mx-4">
                {contact === true ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
              </div>
            </div>
          </div>
          {contact === true ? (
            <div className="lower">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                  onChange={(e) => setcontactname1(() => e.target.value)}
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="designation"
                  onChange={(e) => setcontactdesignation1(() => e.target.value)}
                />
                <label for="floatingInput">Designation</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setcontactemail1(() => e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="mobile"
                  onChange={(e) => setmobile1(() => e.target.value)}
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
                  <h3 className="mx-1 my-2">Secondary Contact:</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name"
                      onChange={(e) => setcontactname2(() => e.target.value)}
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="designation"
                      onChange={(e) =>
                        setcontactdesignation2(() => e.target.value)
                      }
                    />
                    <label for="floatingInput">Designation</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setcontactemail2(() => e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="mobile"
                      onChange={(e) => setmobile2(() => e.target.value)}
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
        <div className="container col-lg-8 col-md-12 category p-0 ">
          <div
            className="upper"
            onClick={() => {
              setTimeout(() => {
                if (eligible) {
                  setEligible(false);
                } else {
                  setEligible(true);
                }
              }, 200);
            }}
          >
            <div className="category-heading">
              <h3>Eligible courses and disipline</h3>
              <div className="mx-4">
                {eligible === true ? (
                  <FaAngleDoubleUp />
                ) : (
                  <FaAngleDoubleDown />
                )}
              </div>
            </div>
          </div>
          {eligible === true ? (
            <div className="lower">
              <div>
                <div className="eligible-type">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (btechdiv) {
                          setBtechdiv(false);
                        } else {
                          setBtechdiv(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3>4-Year B.Tech Programs</h3>
                      {btechdiv === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through JEE (Advanced)</p>
                    </div>
                  </div>
                  {btechdiv ? (
                    <div className="eligible-options m-2 p-2">
                      {btech.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangeBtech(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="eligible-type my-2">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (dual_mtechdiv) {
                          setdual_mtechdiv(false);
                        } else {
                          setdual_mtechdiv(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3> 5-Year Dual Degree/ Integrated M.Tech Programs</h3>
                      {dual_mtechdiv === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through JEE (Advanced)</p>
                    </div>
                  </div>
                  {dual_mtechdiv ? (
                    <div className="eligible-options m-2 p-2">
                      {dual_mtech.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangedual_mtech(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className="eligible-type my-2">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (msc3div) {
                          setmsc3div(false);
                        } else {
                          setmsc3div(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3> 3-Year MSc. Tech Programs</h3>
                      {msc3div === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through JAM</p>
                    </div>
                  </div>
                  {msc3div ? (
                    <div className="eligible-options m-2 p-2">
                      {msc3.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangemsc3(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="eligible-type my-2">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (msc2div) {
                          setmsc2div(false);
                        } else {
                          setmsc2div(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3> 2-Year MSc. Tech Programs</h3>
                      {msc2div === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through GATE</p>
                    </div>
                  </div>
                  {msc2div ? (
                    <div className="eligible-options m-2 p-2">
                      {msc2.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangemsc2(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="eligible-type my-2">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (mbadiv) {
                          setmbadiv(false);
                        } else {
                          setmbadiv(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3> 2-Year MBA Programs</h3>
                      {mbadiv === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through CAT</p>
                    </div>
                  </div>
                  {mbadiv ? (
                    <div className="eligible-options m-2 p-2">
                      {mbacourse.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangemba(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="eligible-type my-2">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (mtechdiv) {
                          setmtechdiv(false);
                        } else {
                          setmtechdiv(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3> 2-Year M.Tech Programs</h3>
                      {mtechdiv === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through GATE</p>
                    </div>
                  </div>
                  {mtechdiv ? (
                    <div className="eligible-options m-2 p-2">
                      {mtech.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangemtech(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="eligible-type my-2">
                  <div
                    onClick={() => {
                      setTimeout(() => {
                        if (phddiv) {
                          setphddiv(false);
                        } else {
                          setphddiv(true);
                        }
                      }, 200);
                    }}
                  >
                    <div className="eligible-heading d-flex justify-content-between">
                      <h3> PhD Programs</h3>
                      {phddiv === true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>

                    <div className="eligible-sub-heading">
                      <p className="m-0">Admitted through GATE/NET</p>
                    </div>
                  </div>
                  {phddiv ? (
                    <div className="eligible-options m-2 p-2">
                      {phd.map((item) => {
                        return (
                          <div className="m-3 ">
                            <label className="container form-check">
                              {item}
                              <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => handleChangephd(e)}
                              />
                              <span className="checkmark "></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                {/* <div>
                  <div className="eligible-heading">
                    2-Year M. Tech Programs
                  </div>
                  <div className="eligible-sub-heading">
                    Admitted through GATE
                  </div>
                  {mtech.map((item) => {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="eligible-heading">2-Year MBA Programs</div>
                  <div className="eligible-sub-heading">
                    Admitted through CAT
                  </div>
                  {mbacourse.map((item) => {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="eligible-heading">2-Year M.Sc. Programs</div>
                  <div className="eligible-sub-heading">
                    Admitted through JAM
                  </div>
                  {msc2.map((item) => {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="eligible-heading">PhD Programs</div>
                  <div className="eligible-sub-heading">
                    Admitted through GATE/NET
                  </div>
                  {phd.map((item) => {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
