import "../App.css";
import Movie from "./Movie.jsx";
import { useState } from "react";
import AddMovieForm from "./AddMovieForm.jsx";

function MoviesList() {
// collection of objects representing movies
const movies = [
{
    id: 1,
title: "The Shawshank Redemption",
year: 1994,
synopsis: "Two imprisoned men find redemption.",
},
{
    id: 2,
title: "The Dark Knight",
year: 2008,
synopsis: "Batman fights the menace known as the Joker.",
},
{
    id: 3,
title: "Interstellar",
year: 2014,
synopsis: "Explorers travel through a wormhole in space.",
},
];

const [currentMovies, setCurrentMovies] = useState(movies);

function HandleReverseList()
{
    let newMovies = [...currentMovies]
    newMovies.reverse()
    setCurrentMovies(newMovies)
}

//used in AddMovieForm (child)
function handleAddMovie({title, year, synopsis = "Default Synopsis",}) 
{
let updatedMovies = [...currentMovies];
updatedMovies.push({
    id: updatedMovies.length +1, 
    title: title, 
    year: year,
    synopis: synopsis});
setCurrentMovies(updatedMovies);
}

return (
    <>
<div className="MoviesList componentBox">
<ul> {/* iterate through movies and return the titles in a list which becomes an unordered list 
each child in the list must have a key prop */}
{ currentMovies.map(movie => ( 
    <Movie 
    key={movie.id} 
    year={movie.year} 
    synopsis={movie.synopsis} 
    title={movie.title} 
    ></Movie>
)) }
</ul>
<button onClick={HandleReverseList}>Reverse List</button>
</div>
<div>
    <AddMovieForm onAddMovie={handleAddMovie}></AddMovieForm>
</div>
    </>
);
}
export default MoviesList;

