import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";
import { fetchFilms } from "../../fetchFilms-api";
import { useSearchParams , Link, useLocation} from "react-router-dom";

export default function MoviesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filmList, setFilmList] = useState([])    
    const [searchParams, setSearchParams] = useSearchParams();
    const urlQuery = searchParams.get("query") || "";
    const location = useLocation();
    console.log(location)

    const handleChange = (inputValue) => {
        setSearchParams({
            query:inputValue
        })
    }

    const handleSubmit = (values, actions) => {
        setSearchQuery(values.query)
        actions.resetForm()
    };

    useEffect(() => {

        async function getFilm() {
            try {
                const response = await fetchFilms(searchQuery)
                setFilmList(response.results)
            } catch (error) {
                throw Error("there an error in the fetch")
            }
        }
        
        getFilm()

    }, [searchQuery]);

    return <>
        <Navigation></Navigation>
        <div>
            <Link to={location.state}>Go back</Link>
        </div>
        <div>
            <Formik             
                initialValues={{
                    query:urlQuery
                }}
                onSubmit={handleSubmit}               
            >       
            <Form onChange={e =>{handleChange(e.target.value)}}>
                <Field name="query" type="text"  />
                <button type="submit">Search</button>
            </Form>
            </Formik>
        </div>
        {filmList.length > 0 && <MovieList data={filmList}></MovieList>}
    </>
}

