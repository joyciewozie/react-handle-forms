import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

function App() {
  const[books, setBooks] = useState([]);

  const createBook = (title) => {
    const latestBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: title,
      },
    ];
    setBooks(latestBooks)
  };

  const deleteBookById = (idToRemove) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== idToRemove
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList myBooks={ books} onDelete={deleteBookById} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
