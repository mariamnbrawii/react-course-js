
import { loadData } from "./load.js";
import * as service from "./movies-service.js";

const { movies } = loadData();
console.log(service.getTitles(movies));

const available = service.getAvailable(movies);
console.log(service.getTitles(available));

console.log(service.getById(movies, 4).title);
console.log(service.getById(movies, 99));

console.log(
    service.getTitles(service.getByGenre(movies, "Drama"))
);

console.log(
    service.getTitles(service.searchByTitle(movies, "the"))
);

console.log("Has old movies:", service.hasOldMovies(movies));

console.log("All have directors:", service.allHaveDirectors(movies));

console.log(
    service.getTitles(service.sortByRating(movies))
);

console.log(
    service.getTitles(service.getTopRated(movies, 3))
);
console.log("Average rating:", service.getAverageRating(movies));