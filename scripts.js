function joinZerosLeft(generatedString, requiredLength) {
  const originLength = generatedString.length;
  let zeros = "";
  if (originLength < requiredLength) {
    const zerosCount = requiredLength - originLength;
    zeros = "0".repeat(zerosCount);
  }
  return zeros + generatedString;
}

function getRandomNumber(range, min, requiredLength) {
  return joinZerosLeft(String(Math.floor((Math.random() * range) + min)), requiredLength);
}

function generateFLInn() {
  let result = getRandomNumber(92, 1, 2) + getRandomNumber(99, 1, 2) + getRandomNumber(999999, 1, 6);
  let control = String(((
    7 * result[0] + 2 * result[1] + 4 * result[2] +
    10 * result[3] + 3 * result[4] + 5 * result[5] +
    9 * result[6] + 4 * result[7] + 6 * result[8] +
    8 * result[9]
  ) % 11) % 10);
  result = result + control;
  control = String(((
    3 * result[0] +  7 * result[1] + 2 * result[2] +
    4 * result[3] + 10 * result[4] + 3 * result[5] +
    5 * result[6] +  9 * result[7] + 4 * result[8] +
    6 * result[9] +  8 * result[10]
  ) % 11) % 10);
  return result + control;
}

function generateSnils() {
  const rand1 = getRandomNumber(998, 2, 3);
  const rand2 = getRandomNumber(999, 1, 3);
  const rand3 = getRandomNumber(999, 1, 3);
  let result = rand1 + rand2 + rand3;
  let control = String(9 * result[0] + 8 * result[1] + 7 * result[2] +
    6 * result[3] + 5 * result[4] + 4 * result[5] +
    3 * result[6] + 2 * result[7] + 1 * result[8]);
  if (control > 101) {
    control = String(control % 101);
    control = joinZerosLeft(control,2);
    if (control > 99) {
      control = "00";
    }
  }
  else if (control >= 100){
    control = "00";
  }
  return result + control;
}

function generateULInn() {
  const region = getRandomNumber(92, 1, 2);
  const inspection = getRandomNumber(99, 1, 2);
  const numba = getRandomNumber(99999, 1, 5);
  let result = region + inspection + numba;
  let control = String(((
    2 * result[0] + 4 * result[1] + 10 * result[2] +
    3 * result[3] + 5 * result[4] + 9 * result[5] +
    4 * result[6] + 6 * result[7] + 8 * result[8]
  ) % 11) % 10);
  return result + control;
}

function copyFLInn() {
  const inn = generateFLInn();
  document.getElementById("fl-inn").innerHTML = inn;
  navigator.clipboard.writeText(inn);
}

function copyULInn() {
  const inn = generateULInn();
  document.getElementById("ul-inn").innerHTML = inn;
  navigator.clipboard.writeText(inn);
}

function copySnils() {
  const snils = generateSnils();
  document.getElementById("snils").innerHTML = snils;
  navigator.clipboard.writeText(snils);
}

document.querySelector("#fl-inn-btn").addEventListener("click", copyFLInn);
document.querySelector("#ul-inn-btn").addEventListener("click", copyULInn);
document.querySelector("#snils-btn").addEventListener("click", copySnils);


