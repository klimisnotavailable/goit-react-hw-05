import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import FilmPage from '.pages/FilmPage/FilmPage';
import { fetchTrendingFilms } from './fetchTrendingFilms';


function App() {
  return (  
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<FilmPage/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
