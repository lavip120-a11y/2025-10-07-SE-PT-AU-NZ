import "../App.css";
import SingleCat from "./SingleCat.jsx";
import { useState } from "react"; //exercise 4 adding state
import AddCatForm from "./AddCatForm.jsx";

function BigCats() {    
    
const cats = [
{ id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://www.bing.com/th/id/OIP.j0jJUgDN4Y9TOfazV_JY9wHaE7?w=241&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
{ id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://www.bing.com/th/id/OIP.n-xdt7_EEMiMG0DaUoavGwHaE7?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
{ id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://www.bing.com/th/id/OIP.UJVHMZxJJum45wA9DVscWQHaEr?w=273&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
{ id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://www.bing.com/th/id/OIP.I_jILBxMfqMyRWe3M14MpQHaFH?w=246&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
{ id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://www.bing.com/th/id/OIP.M6rei8fRMTtcTg15RTlA8wHaFj?w=242&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
{ id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://www.bing.com/th/id/OIP.LAYyYADBiKgTvsQtse5tagHaE7?w=251&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
{ id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://www.bing.com/th/id/OIP.RlNLPutMOf5YfOVmMVIpvwHaE8?w=229&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }
];

const [currentCats, setCurrentCats] = useState(cats);

function HandleDeleteCats(idToDelete)
{
    let deletedCats = currentCats.filter(cat => cat.id !== idToDelete);
    setCurrentCats(deletedCats);
}
// Exercise 4, alphabetic sort, reverse list and filter to display only the 'Panthera Family'
function HandleReverseCats()
{
    let reverseCats = [...currentCats];
    reverseCats.reverse(); //reverse mutates so must reverse
    setCurrentCats(reverseCats);
}

function HandleAlphabetiseCats()
{
    let alphabetiseCats = [...currentCats];
    alphabetiseCats.sort((a, b) => a.name.localeCompare(b.name)); //sort mutates so must clone
    setCurrentCats(alphabetiseCats);
}

function HandleFilterCats()
{
    let pantheraCats = cats.filter(cat => cat.latinName.includes('Panthera')); //filter does not mutate original so no clone required
    setCurrentCats(pantheraCats);
}

function HandleResetCats()
{
    setCurrentCats(cats);
}

function handleAddCat({name, latinName, image = "Default image",}) 
{
let updatedCat = [...currentCats];
updatedCat.push({
    id: updatedCat.length +1, 
    name: name, 
    latinName: latinName,
    image: image});
setCurrentCats(updatedCat);
}

    return (
    <>
    <h3>Exercise 2, 4 & 5 BigCats.jsx, SingleCat.jsx and AddCatForm.jsx</h3>
<div className="BigCats componentBox"> 
{/* <ul>  
{ currentCats.map(cat => ( 
     <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} />
)) }
</ul> */}
<ul>
    {currentCats.map((cat) => (
        <li key={cat.id}>
            <SingleCat
            name = {cat.name}
            latinName={cat.latinName}
            image={cat.image}
            />
            <a href="#" onClick={(e) => {
                e.preventDefault();
                HandleDeleteCats(cat.id);
            }}>Delete</a>
        </li>
    ))}
</ul>


<button onClick={HandleReverseCats} className="cat-reverse">Reverse List</button>
<button onClick={HandleAlphabetiseCats} className="cat-alphabetise">Alphabetise List</button>
<button onClick={HandleFilterCats} className="cat-panthera">Panthera Family</button>
<button onClick={HandleResetCats} className="cat-reset">Reset</button>
</div>
<h3>Exercise 5 AddCatForm.jsx</h3>
<div>
    <AddCatForm onAddCat={handleAddCat}></AddCatForm>
</div>
    </>
    );
}

export default BigCats;

