// STEP 1
const favoriteMovies = ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction'];
console.log(favoriteMovies[1]);

// STEP 2
const movies = new Array(5);
movies[0] = 'The Matrix';
movies[1] = 'Inception';
movies[2] = 'Interstellar';
movies[3] = 'The Dark Knight';
movies[4] = 'Pulp Fiction';
console.log(movies[0]);

// STEP 3
movies.splice(2, 0, 'The Godfather');
console.log(movies.length);

// STEP 4
let movies2 = ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction'];
delete movies2[0];
console.log(movies2);

// STEP 5
let movies3 = ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'Goodfellas'];
for (let movie in movies3) {
    console.log(movies3[movie]);
}

// STEP 6
for (let movie of movies3) {
    console.log(movie);
}

// STEP 7
for (let movie of movies3.sort()) {
    console.log(movie);
}

// STEP 8
let movies4 = ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Godfather', 'Goodfellas'];
let leastFavMovies = ['Catwoman', 'Gigli', 'Jack and Jill'];

console.log('Movies I like:\n\n');
for (let movie of movies4) {
    console.log(movie);
}

console.log('\nMovies I regret watching:\n\n');
for (let movie of leastFavMovies) {
    console.log(movie);
}

// STEP 9
let allMovies = movies4.concat(leastFavMovies);
console.log(allMovies.reverse().sort());

// STEP 10
console.log(allMovies[allMovies.length - 1]);

// STEP 11
console.log(allMovies[0]);

// STEP 12
const badMovieIndices = allMovies.reduce((acc, movie, index) => {
    if (leastFavMovies.includes(movie)) {
        acc.push(index);
    }
    return acc;
}, []);

badMovieIndices.forEach((index) => {
    allMovies[index] = ['The Shawshank Redemption', 'Fight Club', 'Forrest Gump'][badMovieIndices.indexOf(index)];
});

// STEP 13
let moviesWithRanking = [
    ['The Matrix', 1],
    ['Inception', 2],
    ['Interstellar', 3],
    ['The Dark Knight', 4],
    ['Pulp Fiction', 5]
];

let movieNames = moviesWithRanking.filter(item => typeof item[0] === 'string').map(item => item[0]);
console.log(movieNames);

// STEP 14
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

const showEmployee = function(empArray) {
    console.log('Employees:\n\n');
    for (let emp of empArray) {
        console.log(emp.toUpperCase());
    }
};

showEmployee(employees);

// STEP 15
function filterValues(arr) {
    return arr.filter(item => item !== false && item !== null && item !== 0 && item !== '');
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// STEP 16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr);
}
