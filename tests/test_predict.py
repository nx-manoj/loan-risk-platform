from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)

VALID_PAYLOAD = {
    "loan_amnt": 30000,
    "funded_amnt": 30000,
    "funded_amnt_inv": 30000.0,
    "term": 36,
    "int_rate": 22.35,
    "installment": 1151.16,
    "grade": 4,
    "sub_grade": 20,
    "home_ownership": 1,
    "annual_inc": 100000.0,
    "verification_status": 1,
    "pymnt_plan": 0,
    "purpose": 2,
    "addr_state": 4,
    "dti": 30.46,
    "delinq_2yrs": 0.0,
    "inq_last_6mths": 0.0,
    "mths_since_last_delinq": 51.0,
    "mths_since_last_record": 84.0,
    "open_acc": 11.0,
    "pub_rec": 1.0,
    "revol_bal": 15603,
    "revol_util": 37.0,
    "total_acc": 19.0,
    "initial_list_status": 1,
    "collections_12_mths_ex_med": 0.0,
    "mths_since_last_major_derog": -1.0,
    "policy_code": 1,
    "application_type": 1,
    "acc_now_delinq": 0.0,
    "tot_coll_amt": 0.0,
    "tot_cur_bal": 472330.0,
    "open_acc_6m": 1.0,
    "open_act_il": 3.0,
    "open_il_12m": 2.0,
    "open_il_24m": 2.0,
    "mths_since_rcnt_il": 2.0,
    "total_bal_il": 82850.0,
    "il_util": 75.0,
    "open_rv_12m": 0.0,
    "open_rv_24m": 1.0,
    "max_bal_bc": 9713.0,
    "all_util": 60.0,
    "total_rev_hi_lim": 42200.0,
    "inq_fi": 1.0,
    "total_cu_tl": 1.0,
    "inq_last_12m": 3.0,
    "acc_open_past_24mths": 4.0,
    "avg_cur_bal": 42939.0,
    "bc_open_to_buy": 15181.0,
    "bc_util": 46.9,
    "chargeoff_within_12_mths": 0.0,
    "delinq_amnt": 0.0,
    "mo_sin_old_il_acct": 83.0,
    "mo_sin_old_rev_tl_op": 73.0,
    "mo_sin_rcnt_rev_tl_op": 23.0,
    "mo_sin_rcnt_tl": 2.0,
    "mort_acc": 1.0,
    "mths_since_recent_bc": 23.0,
    "mths_since_recent_bc_dlq": -1.0,
    "mths_since_recent_inq": 8.0,
    "mths_since_recent_revol_delinq": -1.0,
    "num_accts_ever_120_pd": 0.0,
    "num_actv_bc_tl": 3.0,
    "num_actv_rev_tl": 4.0,
    "num_bc_sats": 3.0,
    "num_bc_tl": 5.0,
    "num_il_tl": 10.0,
    "num_op_rev_tl": 6.0,
    "num_rev_accts": 8.0,
    "num_rev_tl_bal_gt_0": 4.0,
    "num_sats": 11.0,
    "num_tl_120dpd_2m": 0.0,
    "num_tl_30dpd": 0.0,
    "num_tl_90g_dpd_24m": 0.0,
    "num_tl_op_past_12m": 2.0,
    "pct_tl_nvr_dlq": 89.5,
    "percent_bc_gt_75": 33.3,
    "pub_rec_bankruptcies": 1.0,
    "tax_liens": 0.0,
    "tot_hi_cred_lim": 527120.0,
    "total_bal_ex_mort": 98453.0,
    "total_bc_limit": 28600.0,
    "total_il_high_credit_limit": 101984.0,
    "disbursement_method": 0,
    "credit_history_length": 14.0,
    "loan_to_income_ratio": 0.3,
    "installment_to_income_ratio": 0.0115116,
    "emp_length_numeric": 5,
}


def test_predict_success() -> None:
    response = client.post("/predict", json=VALID_PAYLOAD)
    body = response.json()

    assert response.status_code == 200
    assert set(body.keys()) == {"prediction", "prediction_label", "probability"}
    assert body["prediction"] in [0, 1]
    assert isinstance(body["prediction_label"], str)
    assert isinstance(body["probability"], float)


def test_predict_validation_error_shape() -> None:
    invalid_payload = dict(VALID_PAYLOAD)
    invalid_payload.pop("loan_amnt")

    response = client.post("/predict", json=invalid_payload)
    body = response.json()

    assert response.status_code == 422
    assert body["success"] is False
    assert body["message"] == "Request validation failed"
    assert body["status_code"] == 422
    assert "timestamp" in body
