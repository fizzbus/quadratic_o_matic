import { computeLoan } from "./computeLoan";

test("computeLoan", function () {
  const amount = 4;
  const term = 13;
  const interest = 9;
  const expectOutput = {
    totalInterest: 2500,
    totalPaid: 12500,
  };

  expect(computeLoan({ loanRequest: { amount, term, interest } })).toEqual(
    expectOutput
  );
});
