var mongoose = require("mongoose");

var DataInfJnfSchema = new mongoose.Schema({
  company_user_id:String,
  type: String,
  company_overview: {
    name: String,
    website: String,
    sector: String,
  },
  job_detail: {
    designation: String,
    place_of_posting: String,
    description: String,
    duration: String,
    mode: String,
  },
  stipend_detail: {
    ctc: String,
    ctc_breakup: String,
    bond_detail: String,
    stipend: String,
    ppo_provision: String,
    ctc_ppo: String,
  },
  contact_detail: [
    {
      name: String,
      designation: String,
      email: String,
      mobile: String,
    },
  ],
  eligible_branch: {
    btech: [String],
    dd_mtech: [String],
    msc2: [String],
    msc3: [String],
    mtech: [String],
    mba: [String],
    phd: [String],
  },
  skill_based: [String],
  selection_pr: {
    resume_short_listing: String,
    type_of_test: String,
    other_round: [String],
    total_rounds: Number,
    no_of_offers: String,
    eligible_criteria: String,
  },
  doc_link: String,
  DateTime: Date,
  pdf_id: String,
  pdf_viewlink: String,
  pdf_downloadlink: String,
});
const FormData = new mongoose.model("FormData", DataInfJnfSchema);
module.exports = FormData;
