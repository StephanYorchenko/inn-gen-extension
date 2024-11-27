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

function fromHTML(html, trim = true) {
  html = trim ? html.trim() : html;
  if (!html) return null;

  const template = document.createElement('template');
  template.innerHTML = html;
  const result = template.content.children;

  if (result.length === 1) return result[0];
  return result;
}

async function withLoader(generatorFn, inputId) {
  const a = document.querySelector(`#${inputId}-btn`);
  a.innerHTML = "<div class='loadingSpinner'>🔄</div>";
  const result = await generatorFn();
  a.innerHTML = "📋";
  return result;
}

function createCopyHandler(generatorFn, inputId) {
  document.querySelector(`#${inputId}-btn`).addEventListener("click", async () => {
    const value = await withLoader(generatorFn, inputId);
    document.getElementById(inputId).innerHTML = value;
    navigator.clipboard.writeText(value);
  });
}

function createFormField(fieldId, fieldName)  {
  const newFormField = fromHTML(`
  <div class="">
      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">${fieldName}</span>
      <div class="flex justify-between">
          <div id="${fieldId}" class="font-mono text-lg font-medium text-slate-900 dark:text-slate-200 rounded-md bg-indigo-500 w-[156px] p-1 mr-4"></div>
          <button id="${fieldId}-btn" class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">📋</button>
      </div>
  </div>
  `);

  const mainComponent = document.querySelector("#main");
  mainComponent.append(newFormField);
}

const config = [
  { generator: generateFLInn, fieldId: "fl-inn", fieldName: "ИНН физа" },
  { generator: generateULInn, fieldId: "ul-inn", fieldName: "ИНН юрика" },
  { generator: generateSnils, fieldId: "snils", fieldName: "СНИЛС" },
]

config.forEach(({ generator, fieldId, fieldName }) => {
  createFormField(fieldId, fieldName);
  createCopyHandler(generator, fieldId);
});


