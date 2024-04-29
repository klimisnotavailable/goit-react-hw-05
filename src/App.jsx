import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import MovieReviews from './components/MovieReviews/MovieReviews';
import MovieCast from './components/MovieCast/MovieCast';


function App() {
  return (  
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:filmId' element={<MovieDetailsPage />} >
            <Route path='cast' element={<MovieCast/>} />
            <Route path='reviews' element={<MovieReviews/> } />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
