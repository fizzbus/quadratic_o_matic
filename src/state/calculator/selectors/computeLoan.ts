const computeLoan = ({ loanRequest }) => {
  const a = Number.parseInt(loanRequest.amount);
  const b = Number.parseInt(loanRequest.term);
  const c = Number.parseInt(loanRequest.interest);

  const D = (b*b - 4*a*c);
  let x1;
  let x2;
  if(D>=0) {
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    return {
      D, x1, x2
    }
  }
  else {
    return null;
  }
};

export { computeLoan };
