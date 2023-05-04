import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const[books, setBooks] = useState([]);

  const handleSubmit = (title) => {
    console.log("Adding:", title)
  };

  return (
    <div>
      <BookCreate onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
