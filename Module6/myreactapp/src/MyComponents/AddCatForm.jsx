import { useState } from "react";

//gets the data from the user and passes it back to the MovieList component parent - which calls the setCurrentCats function
function AddCatForm({onAddCat}) {
const [name, setName] = useState('') //initial value is empty
const [latinName, setLatinName] = useState('')
const [image, setImage] = useState('')


const handleSubmit = (e) => { //avoids refreshing of the form
e.preventDefault();
onAddCat({name, latinName, image,});
setName("");
setLatinName("");
setImage("");
}

return (
    <>
<div className="AddCatForm componentBox">
<form onSubmit={handleSubmit}>

<label>Cat Name:
<input name="name" value={name}
onChange={(e) => setName(e.target.value)} /> 
</label>

<label>Latin Name:
<input name="latinName" type="text" value={latinName}
onChange={(e) => setLatinName(e.target.value)} />
</label>

<label>Image:
<input name="image" type="text" value={image}
onChange={(e) => setImage(e.target.value)} />
</label>

<button className="cat-add">Add Cat</button>
</form>
</div>
</>
);
}

export default AddCatForm