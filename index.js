function numberToText(values) {
  let newValue = values.join();
  const numbers = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
  ]);

  for (const [key, value] of numbers) {
    newValue = newValue.replaceAll(key.toString(), value);
  }

  return newValue;
}

function htmlElementWithArgsToBold(values, ...args) {
  let newValue = values.join("[PARAM]");
  args.forEach((item) => {
    newValue = newValue.replace("[PARAM]", `<span class="bold">${item}</span>`);
  });

  const el = document.createElement("p");
  el.innerHTML = newValue;
  return el;
}

/* Example 1 */
const inputText =
  "When you add 2 + 2 the result is 4 and if you add 4 you get 8";
const outputText = numberToText`When you add 2 + 2 the result is 4 and if you add 4 you get 8`;

const outputEl = document.querySelector(".output");
const inputTextEl = document.createElement("p");
inputTextEl.innerText = inputText;

const outputTextEl = document.createElement("p");
outputTextEl.innerText = outputText;

outputEl.appendChild(inputTextEl);
outputEl.appendChild(outputTextEl);

/* Example 2 */
const name = "Bob";
const age = 30;
const inputText2 = `Hey my name is ${name} and i am ${age} old`;

const inputTextEl2 = document.createElement("p");
inputTextEl2.innerText = inputText2;
outputEl.appendChild(inputTextEl2);

const el = htmlElementWithArgsToBold`Hey my name is ${name} and i am ${age} old`;
outputEl.appendChild(el);
