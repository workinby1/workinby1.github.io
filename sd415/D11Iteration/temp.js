import PromptSync from "prompt-sync";
const prompt = PromptSync();


const tempInCelsius = prompt("Enter value in celsius: ");
const tempInFahrenheit = (9 / 5) * Number(tempInCelsius) + 32;
console.log(tempInFahrenheit);

// let age = (2||"x"||10)
// console.log(age)

for (let i = 1; i < 6; i++) {
  let row = "";
  for ( let j = 1; j < 6; j++) {
    row = row + i.toString();
  }
  console.log(row);
}
