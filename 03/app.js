export default function randomNumber(min, max) {

  if (typeof min !== "number") {
    throw new Error("min is not a number");
  }

  if (typeof max !== "number") {
    throw new Error("max is not a number");
  }
  return Math.random() * (max - min) + min;
}
