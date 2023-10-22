const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

console.log(all_heros);

const anoter_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_aaray = anoter_array.flat(Infinity)

console.log(real_another_aaray);

console.log(Array.isArray("vishal"));
console.log(Array.from("vishal"));
console.log(Array.from({name: "Vishal"})); //intersting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));