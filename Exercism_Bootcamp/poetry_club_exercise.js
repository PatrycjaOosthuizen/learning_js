// Get the first letter of a line of text.
// slice(0, 1) returns the substring starting at index 0 up to (but not including) index 1
export function frontDoorResponse(line) {
  console.log(line.slice(0, 1));
  return line.slice(0, 1);
}

// 1. Capitalize the first letter of the word.
// 2. Convert the rest of the word to lowercase.
// 3. Combine them into a single string.
export function frontDoorPassword(word) {
  const outputWord = [];
  // slice(0, 1) returns the substring starting at index 0 up to (but not including) index 1
  const firstLetter = word.slice(0, 1);
  // slice(1) returns the substring starting at index 1 to the end
  const otherLetters = word.slice(1);
  outputWord.push(firstLetter.toUpperCase());
  outputWord.push(otherLetters.toLowerCase());
  return outputWord.join("");
}

// Get the last letter of a sentence
// 1. Trim any whitespace from the start and end.
// 2. Return the final character of the trimmed string.
export function backDoorResponse(line) {
  const trimmedLine = line.trim();
  return trimmedLine.slice(trimmedLine.length - 1);
}

//   1. Capitalize the first letter of the word.
//   2. Keep the rest of the word as is.
//   3. Add ", please".
export function backDoorPassword(word) {
  const output = [];
  const firstLetter = word.slice(0, 1);
  const otherLetters = word.slice(1);
  output.push(firstLetter.toUpperCase());
  output.push(otherLetters);
  output.push(", please");
  return output.join("");
}

// temporary code to test in terminal
console.log(frontDoorResponse("Stands so high"));
console.log(frontDoorPassword("eARTH"));
console.log(backDoorResponse("Stands so high  "));
console.log(backDoorPassword("horse"));
