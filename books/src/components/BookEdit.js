import { useState } from 'react';

function BookEdit( { book, onSubmit } ) {
  const [ title, setTitle ] = useState(book.title);

  // Captures user input
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  // Sends the user input
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title)
  }

  return (
  <form onSubmit={handleSubmit}>
  <label>Title</label>
  <input value={title} onChange={handleChange} ></input>
  <button>Save</button>
  </form> )
}

export default BookEdit;
