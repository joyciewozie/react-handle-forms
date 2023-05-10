import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookEdit from './components/BookEdit';

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


  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle}
      }
      return book
    });
    setBooks(updatedBooks);
  }

  const deleteBookById = (idToRemove) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== idToRemove
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList onEdit={editBookById} myBooks={ books} onDelete={deleteBookById} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
