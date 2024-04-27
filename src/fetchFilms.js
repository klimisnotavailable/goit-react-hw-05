import axios from 'axios';
// const keyAPI = "dc9a9fc24b8602733f018b7456111590";
const tokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzlhOWZjMjRiODYwMjczM2YwMThiNzQ1NjExMTU5MCIsInN1YiI6IjY2MmFiMDhmOWFjNTM1MDExYzhlZDJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8WisobdK1jXGSdZtS7YOdT9FnVlS_UOhzY7AcGN3yw";
axios.defaults.baseURL = "https://api.themoviedb.org/3/search/movie";
axios.defaults.headers.common["Authorization"] = `Bearer ${tokenAPI}`;

export const fetchFilms = async (query,page) => {
    const response = await axios.get(``,{
        params: {
            query,
            page
        }
    });
    return response.data;
}
