import { useState } from "react";

//gets the data from the user and passes it back to the MovieList component parent - which calls the setCurrent Movies function
function AddMovieForm({ onAddMovie }) {
const [title, setTitle] = useState('') //initial value is empty - destructuring
const [year, setYear] = useState('')
// ++ add support for the synopsis field as well, here and below

const handleSubmit = (e) => { //avoids refreshing of the form
e.preventDefault();
onAddMovie({ title, year });
setTitle("");
setYear("");
};

return (
    <>
<div className="AddMovieForm componentBox">
<form onSubmit={handleSubmit}>

<label>
    Movie Title:
<input 
name="title" 
value={title}
onChange={(e) => setTitle(e.target.value)} 
/> 
</label>

<label>
    Year Released:
<input 
name="year" 
type="number" 
value={year}
onChange={(e) => setYear(e.target.value)} 
/>
</label>

<button>Add Movie</button>
</form>
</div>
</>
);
}

export default AddMovieForm