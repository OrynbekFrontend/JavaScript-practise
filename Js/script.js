let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ""),
        b = prompt('На сколько оцените его?', "");
        
        if (a != null && b!= null && a!= '' && b!= '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
           } else {
               console.log('error');
               i--;
            }        
        }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count <= 30) {
        console.log('вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('вы киноман')
    } else {
        console.log('произошла ошибка');52
    }
}
// detectPersonalLevel();
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (i = 1; i < 4; i++) {
        let numberGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = numberGenres;
    }
}
writeYourGenres();
// console.log(personalMovieDB);
    