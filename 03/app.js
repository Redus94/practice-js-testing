export default function randomNumber(min, max) {
  if (!isNumber(min)) {
    throw new Error("min is not a number");
  }

  if (!isNumber(max)) {
    throwError("max is not a number");
  }

  if (minIsGreater(min, max)) {
    throwError("max is greater than min");
  }

  return Math.random() * (max - min) + min;
}

const throwError = (error) => {
  throw new Error(error);
};

const isNumber = (value) => {
  return typeof value === "number" && !Number.isNaN(value);
};

const minIsGreater = (min, max) => {
  return Math.sign(max - min) === -1;
};