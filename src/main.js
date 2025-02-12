import {
  getSlope,
  getYIntercept,
  isValid,
  parsePoint,
  setFieldValues,
  showAnswer,
} from "./utils";

const params = new URLSearchParams(document.location.search);

if (params.size > 0) {
  const pt1 = params.get("pt1");
  const pt2 = params.get("pt2");
  if (isValid(pt1) && isValid(pt2)) {
    setFieldValues(pt1, pt2);
    console.log("points are good");
    const point1 = parsePoint(pt1);
    const point2 = parsePoint(pt2);
    const m = getSlope(point1, point2);
    if (Number.isFinite(m)) {
      const b = getYIntercept(point1, m);
      let ans = `y=`;
      if (m !== 0) ans += `${m}x`;
      if (m !== 0 && b > 0) ans += "+";
      if (b !== 0) ans += `${b}`;
      showAnswer(ans);
    } else {
      showAnswer("Undefined slope");
    }
  } else {
    showAnswer("Invalid points ex. 1,1 ");
  }
}
