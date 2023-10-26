const str = "this is a process";
const searchWord = "is";
const regex = new RegExp(searchWord, "g");
const matches = str.match(regex);

if (matches) {
    const numberOfOccurances = matches.length;
    console.log(`The word "${searchWord}" appears ${numberOfOccurances} times in the string.`);
} else{
    console.log('The word "${searchWord}" does not appear in the string');
}