import { useState } from 'react'
import './App.css'
import { fetchFilms } from './fetchFilms';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage'

function App() {
  const [filmsData, setFilmsData] = useState([]);
console.log(fetchFilms("star wars",1))
  return (  
    <>
      <div>
        <Routes>
          <Route path='/home' element={ HomePage} />
        </Routes>
      </div>
    </>
  )
}

export default App
