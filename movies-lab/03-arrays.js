

import { loadData } from "./load.js";
import * as service from "./movies-service.js";

const { movies } = loadData();

// 1. Get all movie titles
console.log("All titles:");
console.log(service.getTitles(movies));

// 2. Get available movies
console.log("Available movies:");
console.log(service.getTitles(service.getAvailable(movies)));

// 3. Find a movie by ID
console.log("Movie with ID 4:");
console.log(service.getById(movies, 4)?.title);

console.log("Movie with ID 99:");
console.log(service.getById(movies, 99));

// 4. Filter movies by genre
console.log("Drama movies:");
console.log(service.getTitles(service.getByGenre(movies, "Drama")));

// 5. Search by title
console.log("Movies containing 'the':");
console.log(service.getTitles(service.searchByTitle(movies, "the")));

// 6. Check movie years
console.log("Movies before 2000:");
console.log(service.hasMoviesBefore(movies, 2000));

console.log("Movies before 1990:");
console.log(service.hasMoviesBefore(movies, 1990));

// 7. Check directors
console.log("All movies have directors:");
console.log(service.allHaveDirectors(movies));

// 8. Get top-rated movies
console.log("Top 3 movies:");
console.log(service.getTitles(service.getTopRated(movies, 3)));

// 9. Get cast names
const interstellar = service.getById(movies, 3);

console.log("Interstellar cast:");
console.log(service.getCastNames(interstellar));

// 10. Find movies by director
console.log("Christopher Nolan movies:");
console.log(service.getDirectorTitles(movies, "Christopher Nolan"));
