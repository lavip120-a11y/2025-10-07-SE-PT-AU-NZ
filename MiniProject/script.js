// JavaScript code file.  I did not manage to get the code into this file.  the code below was an attempt to export the data from fakestore 
// to use in the search bar and using axios BUT I did not manage to complete this section.  In the future, i will work on having seperate files for js, css and html as i think that would be tidier.
const searchBar = document.getElementById('searchbar');
const keywordList = document.getElementById('keyword');

let products = [];

axios
      .get("https:fakestoreapi.com/products") // using axios.get to access data from the fakestore
      .then(response => products = response.data) //response - what ever is recieved    
    .catch(err => console.error(err));

searchBar.addEventListener('input', () => {
    const userSearch = searchBar.value.toLowerCase();
keywordList.innerHTML = "";

products
    .filter(p => p.title.toLowerCase().includes(userSearch))
    .forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.title;
        li.onclick = () => searchBar.value = p.title;
        keywordList.appendChild(li);
    });
})

