
export const getTitles = movies =>
    movies.map(movie => movie.title);

export const getAvailable = movies =>
    movies.filter(movie => movie.available);

export const getById = (movies, id) =>
    movies.find(movie => movie.id === id);

export const getByGenre = (movies, genre) =>
    movies.filter(movie => movie.genres.includes(genre));

export const searchByTitle = (movies, text) =>
    movies.filter(movie =>
        movie.title.toLowerCase().includes(text.toLowerCase())
    );

export const hasOldMovies = movies =>
    movies.some(movie => movie.year < 2000);

export const allHaveDirectors = movies =>
    movies.every(movie => movie.director?.name);

export const sortByRating = movies =>
    [...movies].sort((a, b) => b.rating - a.rating);

export const getTopRated = (movies, count) =>
    [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, count);

export const getAverageRating = movies => {
    if (movies.length === 0) return 0;

    const total = movies.reduce(
        (sum, movie) => sum + movie.rating, 0
    );

    return total / movies.length;
};
