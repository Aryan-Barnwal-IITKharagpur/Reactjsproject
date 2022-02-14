var mongoose = require("mongoose")

var DataInfJnfSchema = new mongoose.Schema({
    type: String,
    company_overview: {
        name: String,
        website: String,
        sector: String
    },
    job_detail: {
        designation: String,
        place_of_posting: String,
        description: String,
        duration: String,
        mode: String
    },
    stipend_detail: {
        ctc: String,
        ctc_breakup: String,
        bond_detail: String,
        stipend: String,
        ppo_provision: String,
        ctc_ppo: String
    },
    contact_detail: [
        {
            name: String,
            designation: String,
            email: String,
            mobile: String
        }
    ],
    eligible_btech: {
        btech: [String],
        dd_mtech: [String],
        msc2: [String],
        msc3: [String],
        mtech: [String],
        mba: [String],
        phd: [String]
    },
    skill_based: [String],
    selection_pr: {
        resume_short_listing: Boolean,
        type_of_test: String,
        other_round: [String],
        total_rounds: Number,
        no_of_offers: String,
        eligible_criteria: String
    },
    doc_link: String,
})

module.exports = mongoose.model("DataInfJnf", DataInfJnfSchema)
