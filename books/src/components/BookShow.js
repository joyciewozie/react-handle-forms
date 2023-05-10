import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow( {book, onDelete, onEdit} ) {
  const [ edit, setEdit ] = useState(false);

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleSubmit = (id, newTitle) => {
    setEdit(false);
    onEdit(id, newTitle);
    // setShowEdit(false)
  }

  const handleDelete = () => {
    onDelete(book.id)
  }

  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
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
