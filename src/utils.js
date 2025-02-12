/**
 *
 * @param {string} str
 * @returns boolean
 */
export function isValid(str) {
  const pointArr = str.split(",");
  const hasTwo = pointArr.length === 2;
  const isAllNumbers = pointArr.every(Number);
  return hasTwo && isAllNumbers;
}

/**
 *
 * @param {string} str
 * @returns number[]
 */
export function parsePoint(str) {
  return str.split(",").map(Number);
}

/**
 *
 * @param {number[2]} pt1
 * @param {number[2]} pt2
 */
export function getSlope(pt1, pt2) {
  const dy = pt2[1] - pt1[1];
  const dx = pt2[0] - pt1[0];
  console.log("slope is ", dy / dx);
  return dy / dx;
}
/**
 *
 * @param {number[]} pt
 * @param {number} m
 */
export function getYIntercept(pt, m) {
  const [x, y] = pt;
  const b = y - m * x;
  return b;
}
/**
 *
 * @param {string} str
 */
export function showAnswer(str) {
  const el = document.getElementById("ans");
  el.innerHTML = str;
}
/**
 *
 * @param {string} pt1
 * @param {string} pt2
 */
export function setFieldValues(pt1, pt2) {
  const pt1el = document.getElementById("pt1");
  pt1el.value = pt1;
  const pt2el = document.getElementById("pt2");
  pt2el.value = pt2;
}
