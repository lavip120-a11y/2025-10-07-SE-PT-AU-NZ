import BookList from "./BooksList";
import BookFilter from "./BooksFilter";
function Books(props) {
    const books = ["Harry Potter", "Lord of the Rings", "Spiderman"];

    return (
        <>
        <h1>Books</h1>
        <div>
            <h2>Here is the list of books</h2>
            <BookList books={books}></BookList>
        </div>
        <div>
            <h3>Here is the Filtered list of booksS</h3>
            <BookFilter books={books}></BookFilter>
        </div>
        </>
    );
}

export default Books;
