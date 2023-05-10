import BookShow from './BookShow'

function BookList( {myBooks, onDelete, onEdit} ) {
  const oneBook = myBooks.map((book) => {
    return <BookShow onEdit={onEdit} key={book.id} book = {book} onDelete={onDelete} />
  });

  return <div> {oneBook} </div>


}

export default BookList;
