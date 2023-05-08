import BookShow from './BookShow'

function BookList( {myBooks, onDelete} ) {
  const oneBook = myBooks.map((book) => {
    return <BookShow key={book.id} book = {book} onDelete={onDelete} />
  });

  return <div> {oneBook} </div>


}

export default BookList;
