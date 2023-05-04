import { useState } from 'react';

function BookCreate( {onSubmit} ) {
  // declare title as a piece of state
  const [title, setTitle] = useState('');

  // Event handler 'handleChange' for when the user changes the text input (event.target.value) => retrieve the input text

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // Event handler 'handleSubmit' => send the input text to App
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit((title));
  };

  // Input form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default BookCreate;
