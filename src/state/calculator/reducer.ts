import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialLoanRequest = Object.freeze({
  amount: 4,
  term: 13,
  interest: 9,
});

const initialState = Object.freeze({
  loanRequestInput: initialLoanRequest,
  loanRequest: initialLoanRequest,
});

const changeLoanRequest = (state, action) => {
  const input = action.payload;
  const loanRequestInput = {
    ...state.loanRequestInput,
    [input.name]: input.value,
  };
  return Object.freeze({
    ...state,
    loanRequestInput,
  });
};

const submitLoanRequest = (state, action) => {
  const loanRequest = action.payload;
  return Object.freeze({ ...state, loanRequest });
};

export default handleActions(
  {
    [actions.changeLoanRequest]: changeLoanRequest,
    [actions.submitLoanRequest]: submitLoanRequest,
  },
  initialState
);

