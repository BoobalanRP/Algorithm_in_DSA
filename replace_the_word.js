let sentence = "He is a good boy";
let search = "good";
let replace = "bad";

let updatedSentence = "";
let word = "";
for (let i = 0; i <= sentence.length; i++) {
  if (i === sentence.length || sentence[i] === " ") {
    
    if (word === search) {
      updatedSentence += replace;
    } else {
      updatedSentence += word;
    }
    if (i !== sentence.length) {
      updatedSentence += " ";
    }

    word = "";
  } else {
    word += sentence[i];
  }
}

console.log(updatedSentence);
