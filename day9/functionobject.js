function value(a,n) {
  let val1 = 40;
  val2 = 30;
  let b=n[a](val1,val2);
  return b;
}
let oper = [add, sub, mul];
let ans1 = value(0, oper);
let ans2 = value(1, oper);
let ans3 = value(2, oper);
console.log(ans1, ans2, ans3);
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}