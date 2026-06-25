export interface LoanRequest {
  loan_amnt: number;
  funded_amnt: number;
  funded_amnt_inv: number;
  term: number;
  int_rate: number;
  installment: number;
  grade: number;
  sub_grade: number;
  home_ownership: number;
  annual_inc: number;
  verification_status: number;
  pymnt_plan: number;
  purpose: number;
  addr_state: number;
  dti: number;
  delinq_2yrs: number;
  inq_last_6mths: number;
  mths_since_last_delinq: number;
  mths_since_last_record: number;
  open_acc: number;
  pub_rec: number;
  revol_bal: number;
  revol_util: number;
  total_acc: number;
  initial_list_status: number;
  collections_12_mths_ex_med: number;
  mths_since_last_major_derog: number;
  policy_code: number;
  application_type: number;
  acc_now_delinq: number;
  tot_coll_amt: number;
  tot_cur_bal: number;
  open_acc_6m: number;
  open_act_il: number;
  open_il_12m: number;
  open_il_24m: number;
  mths_since_rcnt_il: number;
  total_bal_il: number;
  il_util: number;
  open_rv_12m: number;
  open_rv_24m: number;
  max_bal_bc: number;
  all_util: number;
  total_rev_hi_lim: number;
  inq_fi: number;
  total_cu_tl: number;
  inq_last_12m: number;
  acc_open_past_24mths: number;
  avg_cur_bal: number;
  bc_open_to_buy: number;
  bc_util: number;
  chargeoff_within_12_mths: number;
  delinq_amnt: number;
  mo_sin_old_il_acct: number;
  mo_sin_old_rev_tl_op: number;
  mo_sin_rcnt_rev_tl_op: number;
  mo_sin_rcnt_tl: number;
  mort_acc: number;
  mths_since_recent_bc: number;
  mths_since_recent_bc_dlq: number;
  mths_since_recent_inq: number;
  mths_since_recent_revol_delinq: number;
  num_accts_ever_120_pd: number;
  num_actv_bc_tl: number;
  num_actv_rev_tl: number;
  num_bc_sats: number;
  num_bc_tl: number;
  num_il_tl: number;
  num_op_rev_tl: number;
  num_rev_accts: number;
  num_rev_tl_bal_gt_0: number;
  num_sats: number;
  num_tl_120dpd_2m: number;
  num_tl_30dpd: number;
  num_tl_90g_dpd_24m: number;
  num_tl_op_past_12m: number;
  pct_tl_nvr_dlq: number;
  percent_bc_gt_75: number;
  pub_rec_bankruptcies: number;
  tax_liens: number;
  tot_hi_cred_lim: number;
  total_bal_ex_mort: number;
  total_bc_limit: number;
  total_il_high_credit_limit: number;
  disbursement_method: number;
  credit_history_length: number;
  loan_to_income_ratio: number;
  installment_to_income_ratio: number;
  emp_length_numeric: number;
}

export interface PredictionResponse {
  prediction: 0 | 1;
  prediction_label: string;
  probability: number;
}

export interface HealthResponse {
  status: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  status_code: number;
  timestamp: string;
}
