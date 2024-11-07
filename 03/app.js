export default function randomNumber(min, max) {
  if (!isNumber(min)) {
    throw new Error("min is not a number");
  }

  if (!isNumber(max)) {
    throwError("max is not a number");
  }
  return Math.random() * (max - min) + min;
}

const throwError = (error) => {
  throw new Error(error);
};

const isNumber = (value) => {
  return typeof value === "number" && !Number.isNaN(value);
};