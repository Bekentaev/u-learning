"use strict";
/*
 let num = 2;

console.log(4/0)

const clases = `2+2 = 3 ${2 + 2 === 3 ? "da" : "net"}`;

console.log(clases);
*/

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastSeeFilm = prompt("Один из последних просмотренных фильмов?", "");
    const ratingFilm = +prompt("Ваша оценка фильма по 10 шкале: ", "");
    if (
      lastSeeFilm !== null &&
      ratingFilm !== 0 &&
      lastSeeFilm.length != 0 &&
      lastSeeFilm.length < 50
    ) {
      personalMovieDB.movies[lastSeeFilm] = ratingFilm;
    } else {
      console.log("error");
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("У нас проблемы хьюстон");
  }
}

function showMeDB(hidden) {
  if (!hidden) {
    console.log("Private равен false выводим базу", personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let userGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    personalMovieDB.genres[i] = userGenres;
  }
}

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMeDB(personalMovieDB.privat);
writeYourGenres();
