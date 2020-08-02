class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  get_pg(movieList) {
    movieListis= movieList.filter((val) => val.rating === "PG");
    if (movieList.length === 0) {
      return "no movie in the list is PG rated";
    }
    return movieList;
  }
}
let movieList=[];
let movie1=new Movie("Casino Royale", "Eon productions", "PG13");
let movie2=new Movie("Majili", "Ramanujam productions", "PG");
let movie3=new Movie("KKK", "Vishnu productions", "R");
let movie4=new Movie("kho", "AVM productions", "PG");
let movie5=new Movie("Happy Days", "Annapoorna productions", "PG13");
let movie=new Movie();
movieList.push(movie1,movie2,movie3,movie4,movie);
console.log(movieList);
console.log(movie1);
console.log(movie.get_pg(movieList));