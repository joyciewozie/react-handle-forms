import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow( {book, onDelete} ) {
  const [ edit, setEdit ] = useState(false);

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleDelete = () => {
    onDelete(book.id)
  }

  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} />
  }

  return <div>
    <div>{content}</div>
    <button onClick={handleEdit}>
      Edit
    </button>
    <div>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  </div>
}

export default BookShow;
