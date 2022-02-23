import React, { useState } from "react";
import { FilledForm } from "../constants/FilledForm";
import "../Styles/FormModal.css"

export default function FormModal(props) {
  // get filled form from unique id
  return (
    <div>
      <div>
        <div className="categoryName">Company Overview</div>
        <div className="headingdiv row">
          <div className="modalHeading col-sm-6">Name of Company:</div>
          <div className="headingValue col-sm-6">{FilledForm.company_overview.name}</div>
        </div>
        <div className="headingdiv">
          <div className="modalHeading col-sm-6">Sector: </div>
          <div className="headingValue col-sm-6">
            {FilledForm.company_overview.sector}
          </div>
        </div>
        <div className="headingdiv">
          <div className="modalHeading col-sm-6">Website: </div>
          <div className="headingValue col-sm-6">
            {FilledForm.company_overview.website}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="categoryName">Job Details</div>
        <div className="headingdiv">
          <div className="modalHeading col-sm-6">Designation: </div>
          <div className="headingValue col-sm-6">
            {FilledForm.job_detail.designation}
          </div>
        </div>

        <div className="headingdiv">
          <div className="modalHeading col-sm-6">Place of Posting: </div>
          <div className="headingValue col-sm-6">
            {FilledForm.job_detail.place_of_posting}
          </div>
        </div>

        <div className="headingdiv">
          <div className="modalHeading col-sm-6">Description: </div>
          <div className="headingValue col-sm-6">
            {FilledForm.job_detail.description}
          </div>
        </div>
        <div className="headingdiv">
          <div className="modalHeading col-sm-6">Duration : </div>
          <div className="headingValue col-sm-6"> {FilledForm.job_detail.duration}</div>
        </div>
        {FilledForm.type === "INF" ? (
          <div className="headingdiv">
            <div className="modalHeading col-sm-6">Mode of Internship: </div>
            <div className="headingValue col-sm-6">{FilledForm.job_detail.mode}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <hr />
      <div>
        <div className="categoryName">Contact Details: </div>
        <div>
          <div className="lead">Primary Contact detail</div>
          <div>
            <div className="headingdiv">
              <div className="modalHeading col-sm-6">Name: </div>
              <div className="headingValue col-sm-6">
                {FilledForm.contact_detail[0].name}
              </div>
            </div>

            <div className="headingdiv">
              <div className="modalHeading col-sm-6">Designation: </div>
              <div className="headingValue col-sm-6">
                {FilledForm.contact_detail[0].designation}
              </div>
            </div>

            <div className="headingdiv">
              <div className="modalHeading col-sm-6">Email: </div>
              <div className="headingValue col-sm-6">
                {FilledForm.contact_detail[0].email}
              </div>
            </div>
            <div className="headingdiv">
              <div className="modalHeading col-sm-6">Mobile: </div>
              <div className="headingValue col-sm-6">
                {FilledForm.contact_detail[0].mobile}
              </div>
            </div>
          </div>
        </div>
        {FilledForm.contact_detail.length === 2 ? (
          <div>
            <div className="lead">Secondary Contact detail</div>
            <div>
              <div className="headingdiv">
                <div className="modalHeading col-sm-6">Name: </div>
                <div className="headingValue col-sm-6">
                  {FilledForm.contact_detail[1].name}
                </div>
              </div>

              <div className="headingdiv">
                <div className="modalHeading col-sm-6">Designation : </div>
                <div className="headingValue col-sm-6">
                  {FilledForm.contact_detail[1].designation}
                </div>
              </div>

              <div className="headingdiv">
                <div className="modalHeading col-sm-6">Email: </div>
                <div className="headingValue col-sm-6">
                  {FilledForm.contact_detail[1].email}
                </div>
              </div>
              <div className="headingdiv">
                <div className="modalHeading col-sm-6">Mobile: </div>
                <div className="headingValue col-sm-6">
                  {FilledForm.contact_detail[1].mobile}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <hr />
      <div>
        <div className="categoryName">Eligible Courses and Discipline</div>
        <div>
          <div className="courseType">4-Year B.Tech Programs</div>
          <div>
            {FilledForm.eligible_branch.btech.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="courseType">
            5-Year Dual Degree/ Integrated M.Tech Programs
          </div>
          <div>
            {FilledForm.eligible_branch.dd_mtech.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="courseType">3-Year MSc. Tech Programs</div>
          <div>
            {FilledForm.eligible_branch.msc3.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="courseType">2-Year MSc. Tech Programs</div>
          <div>
            {FilledForm.eligible_branch.msc2.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="courseType">2-Year MBA Programs</div>
          <div>
            {FilledForm.eligible_branch.mba.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="courseType">2-Year M.Tech Programs</div>
          <div>
            {FilledForm.eligible_branch.mtech.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="courseType">PhD Programs</div>
          <div>
            {FilledForm.eligible_branch.phd.map((branch) => {
              return <div className="branchName">{branch}</div>;
            })}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="categoryName">Skills Requirement:</div>
        <div>
          {FilledForm.skill_based.map((skill) => {
            return <div className="skill">{skill}</div>;
          })}
        </div>
      </div>
      <hr />
      <div>
        <div className="categoryName">Selection Procedure</div>
        <div>
          <div className="headingdiv">
            <div className="modalHeading col-sm-6">Resume Shortlisting : </div>
            <div className="headingValue col-sm-6">
              {FilledForm.selection_pr.resume_short_listing}
            </div>
          </div>

          <div className="headingdiv">
            <div className="modalHeading col-sm-6">Type of Test : </div>
            <div className="headingValue col-sm-6">
              {FilledForm.selection_pr.type_of_test}
            </div>
          </div>

          <div className="headingdiv">
            <div className="modalHeading col-sm-6">Other Qualification Rounds : </div>
            {FilledForm.selection_pr.other_round.map((round) => {
              <div className="headingValue col-sm-6">{round}</div>;
            })}
          </div>
          <div className="headingdiv">
            <div className="modalHeading col-sm-6">Total Number of rounds: </div>
            <div className="headingValue col-sm-6">
              {FilledForm.selection_pr.total_rounds}
            </div>
          </div>
          <div className="headingdiv">
            <div className="modalHeading col-sm-6">
              Number of offers available for IIT(ISM) students (Range would be
              sufficient)
            </div>
            <div className="headingValue col-sm-6">
              {FilledForm.selection_pr.no_of_offers}
            </div>
          </div>
          <div className="headingdiv">
            <div className="modalHeading col-sm-6">Eligibility Criteria (if any)</div>
            <div className="headingValue col-sm-6">
              {FilledForm.selection_pr.eligible_criteria}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
