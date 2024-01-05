"use strict";
/*
 let num = 2;

console.log(4/0)

const clases = `2+2 = 3 ${2 + 2 === 3 ? "da" : "net"}`;

console.log(clases);
*/

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastSeeFilm = prompt("Один из последних просмотренных фильмов?", "");
const ratingFilm = +prompt("Ваша оценка фильма по 10 шкале: ", "");

personalMovieDB.movies[lastSeeFilm] = ratingFilm;
console.log(personalMovieDB);
