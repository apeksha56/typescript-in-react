import React from 'react';
import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
      name='Apeksha'
      email='apeksha@gmail.com'
      age= {23}
      isMarried= {false}
      friends={['Bhawna', 'Konika', 'Shivam', 'Nikita']}
      />
    </div>
  );
}

export default App;
