import React from "react";
import { connect } from "react-redux";
import { computeLoan } from "../state";

const mapState = (state) => {
  return computeLoan(state.loan);
};

const CalculatorResult = (loan) => {
  return (
    <div className="mt-5">
    <div className="">
        D:
        <span className="font-semibold">{loan.D}</span>
    </div>
      <div className="">
          x<sub>1</sub>:
        <span className="font-semibold">{loan.x1}</span>
      </div>
      <div className="mt-3">
          x<sub>2</sub>:
        <span className="font-semibold">{loan.x2}</span>
      </div>
    </div>
  );
};
export default connect(mapState)(CalculatorResult);
