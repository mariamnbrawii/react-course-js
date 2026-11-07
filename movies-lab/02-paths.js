
import { loadData } from "./load.js";

const data = loadData();

console.log(data.updatedAt);
console.log(data.movies[0].title);
console.log(data.movies[0].director.name);

console.log(data.movies[2].cast[2].name);
console.log(data.movies[0].reviews[1].author.username);
const lastMovie = data.movies[data.movies.length - 1];

console.log(lastMovie.title);
console.log(data.movies[0].awards?.oscars ?? 0);

console.log(data.movies[0].reviews[0]?.text ?? "No reviews yet");
console.log(data.movies[0].nonExistingProperty);
console.log(data.movies[0].director?.country ?? "Unknown");