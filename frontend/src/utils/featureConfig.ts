import { LoanRequest } from "../types/prediction";

export type FeatureSectionName =
  | "Loan Information"
  | "Borrower Information"
  | "Credit Information"
  | "Financial Information"
  | "Additional Information";

export interface FeatureConfigItem {
  name: keyof LoanRequest;
  label: string;
}

export interface FeatureSection {
  title: FeatureSectionName;
  fields: FeatureConfigItem[];
}

const toLabel = (name: string): string =>
  name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const withLabels = (names: Array<keyof LoanRequest>): FeatureConfigItem[] =>
  names.map((name) => ({ name, label: toLabel(name) }));

export const INTEGER_FIELDS: Array<keyof LoanRequest> = [
  "loan_amnt",
  "funded_amnt",
  "term",
  "grade",
  "sub_grade",
  "home_ownership",
  "verification_status",
  "pymnt_plan",
  "purpose",
  "addr_state",
  "revol_bal",
  "initial_list_status",
  "policy_code",
  "application_type",
  "disbursement_method",
  "emp_length_numeric",
];

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    title: "Loan Information",
    fields: withLabels([
      "loan_amnt",
      "funded_amnt",
      "funded_amnt_inv",
      "term",
      "int_rate",
      "installment",
      "grade",
      "sub_grade",
      "purpose",
      "application_type",
      "disbursement_method",
      "policy_code",
      "initial_list_status",
    ]),
  },
  {
    title: "Borrower Information",
    fields: withLabels([
      "home_ownership",
      "annual_inc",
      "verification_status",
      "emp_length_numeric",
      "addr_state",
      "dti",
      "loan_to_income_ratio",
      "installment_to_income_ratio",
      "pymnt_plan",
    ]),
  },
  {
    title: "Credit Information",
    fields: withLabels([
      "credit_history_length",
      "delinq_2yrs",
      "inq_last_6mths",
      "mths_since_last_delinq",
      "mths_since_last_record",
      "pub_rec",
      "pub_rec_bankruptcies",
      "tax_liens",
      "mths_since_last_major_derog",
      "mths_since_recent_bc",
      "mths_since_recent_bc_dlq",
      "mths_since_recent_inq",
      "mths_since_recent_revol_delinq",
      "acc_now_delinq",
      "num_tl_120dpd_2m",
      "num_tl_30dpd",
      "num_tl_90g_dpd_24m",
      "pct_tl_nvr_dlq",
      "percent_bc_gt_75",
    ]),
  },
  {
    title: "Financial Information",
    fields: withLabels([
      "open_acc",
      "revol_bal",
      "revol_util",
      "total_acc",
      "tot_coll_amt",
      "tot_cur_bal",
      "total_bal_il",
      "il_util",
      "total_rev_hi_lim",
      "avg_cur_bal",
      "bc_open_to_buy",
      "bc_util",
      "delinq_amnt",
      "tot_hi_cred_lim",
      "total_bal_ex_mort",
      "total_bc_limit",
      "total_il_high_credit_limit",
      "max_bal_bc",
      "all_util",
    ]),
  },
  {
    title: "Additional Information",
    fields: withLabels([
      "collections_12_mths_ex_med",
      "open_acc_6m",
      "open_act_il",
      "open_il_12m",
      "open_il_24m",
      "mths_since_rcnt_il",
      "open_rv_12m",
      "open_rv_24m",
      "inq_fi",
      "total_cu_tl",
      "inq_last_12m",
      "acc_open_past_24mths",
      "chargeoff_within_12_mths",
      "mo_sin_old_il_acct",
      "mo_sin_old_rev_tl_op",
      "mo_sin_rcnt_rev_tl_op",
      "mo_sin_rcnt_tl",
      "mort_acc",
      "num_accts_ever_120_pd",
      "num_actv_bc_tl",
      "num_actv_rev_tl",
      "num_bc_sats",
      "num_bc_tl",
      "num_il_tl",
      "num_op_rev_tl",
      "num_rev_accts",
      "num_rev_tl_bal_gt_0",
      "num_sats",
      "num_tl_op_past_12m",
    ]),
  },
];

export const DEFAULT_FORM_VALUES: LoanRequest = FEATURE_SECTIONS.reduce(
  (accumulator, section) => {
    section.fields.forEach((field) => {
      accumulator[field.name] = 0;
    });
    return accumulator;
  },
  {} as LoanRequest
);
