const getRandomIntFromRange = function (fromInt, tillInt) {
  fromInt = Math.ceil(fromInt);
  tillInt = Math.floor(tillInt);
  if (tillInt > fromInt && fromInt >= 0) {
    return Math.floor(Math.random() * (tillInt - fromInt + 1)) + fromInt;
  }
  return 'A positive integer above zero inclusive is expected / first value must be greater than the second one!';
};

getRandomIntFromRange();

const getRandomFloatFromRange = function (fromInt, tillInt, fractionCount) {
  fractionCount = Math.round(fractionCount);
  if (tillInt > fromInt && fromInt >= 0) {
    const RandomFloatFromRange = Math.random() * (tillInt - fromInt + 1) + fromInt;
    return RandomFloatFromRange.toFixed(fractionCount);
  }
  return 'A positive float above zero inclusive is expected / first value must be greater than the second one!';
};

getRandomFloatFromRange();
