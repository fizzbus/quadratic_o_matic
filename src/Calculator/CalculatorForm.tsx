import React from "react";
import pipe from "lodash/flow";
import { partial } from "lodash";
import { preventDefault, withChange } from "../helpers";
import { changeLoanRequest, submitLoanRequest } from "../state";
import { connect } from "react-redux";

const CalculatorForm = ({ loanRequest, changeLoanRequest, submitLoanRequest }) => {
  const handleChange = withChange(changeLoanRequest);
  const handleSubmit = partial(submitLoanRequest, loanRequest);

  return (
    <form onSubmit={pipe(preventDefault, handleSubmit)}>
    <label htmlFor="amount" className="w-40">
        𝑎𝑥<sup>2</sup>+𝑏𝑥+𝑐=0
    </label>
      <div className="mt-5 flex flex-row">
        <label htmlFor="amount" className="w-40">
            Коэфициент а:
        </label>
        <input
          name="amount"
          type="number"
          value={loanRequest.amount}
          onChange={handleChange}
          required
          className="form-input ml-4"
        />
      </div>
      <div className="mt-5 flex flex-row">
        <label htmlFor="term" className="w-40">
            Коэфициент b:
        </label>
        <input
          name="term"
          type="number"
          value={loanRequest.term}
          onChange={handleChange}
          required
          className="form-input ml-4"
        />
      </div>
      <div className="mt-5 flex flex-row">
        <label htmlFor="interest" className="w-40">
            Коэфициент c:
        </label>
        <input
          name="interest"
          type="number"
          value={loanRequest.interest}
          onChange={handleChange}
          required
          className="form-input ml-4"
        />
      </div>
      {/*<div className="mt-8">
        <input
          type="submit"
          className="bg-blue-800 text-white cursor-pointer  rounded-xl p-3 hover:text-orange-300
          transition ease-in-out hover:-translate-y-1"
          value="Найти корни"
        />
      </div>*/}
    </form>
  );
};
function mapState({ loan }){
  return {
    loanRequest: loan.loanRequestInput
  }
}

export default connect(mapState, { submitLoanRequest, changeLoanRequest })(
  CalculatorForm
);
