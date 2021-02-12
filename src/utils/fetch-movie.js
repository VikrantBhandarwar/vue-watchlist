const fetchMovie = async movieName => {
  const data = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=1725226b`
  );
  const res = await data.json();
  const { Title, Year, Plot, Ratings, Poster, Genre, imdbID } = res;
  const Tags = Genre.split(',');
  return { Title, Year, Plot, Ratings, Poster, Tags, imdbID, watched: false };
};

export default fetchMovie;
