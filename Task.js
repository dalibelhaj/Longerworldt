function LongestWord(sentence) {

  let longestWord = "";
  let maxVowels = 0;

  const words = sentence.split(" ");

  for (const word of words) {
    const cleanWord = word.toLowerCase().replace(/[^a-zA-Z]/g, "");


    const vowelCount = (cleanWord.match(/[aeiou]/g) || []).length;


    if (cleanWord.length > longestWord.length || (cleanWord.length === longestWord.length && vowelCount > maxVowels)) {
      longestWord = cleanWord;
      maxVowels = vowelCount;
    }
  }

  return longestWord;
}


const input = " ";


const result = LongestWord(input);
console.log(result);