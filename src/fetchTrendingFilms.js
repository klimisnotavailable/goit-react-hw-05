import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day'
const tokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzlhOWZjMjRiODYwMjczM2YwMThiNzQ1NjExMTU5MCIsInN1YiI6IjY2MmFiMDhmOWFjNTM1MDExYzhlZDJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8WisobdK1jXGSdZtS7YOdT9FnVlS_UOhzY7AcGN3yw";
axios.defaults.headers.common["Authorization"] = `Bearer ${tokenAPI}`;

export const fetchTrendingFilms = async () => {
    const response = await axios.get(``, {});
    return response.data;
}
