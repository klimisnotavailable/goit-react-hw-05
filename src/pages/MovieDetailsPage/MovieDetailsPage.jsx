import { useEffect, useState } from "react";
import FilmDescription from "../../components/FilmDescription/FilmDescription";
import Navigation from "../../components/Navigation/Navigation";
import { useLocation, useParams } from 'react-router-dom';
import { fetchFilmsById } from "../../fetchFilms-api";
import { Link ,Outlet} from "react-router-dom";


export default function FilmItem() {
    const { filmId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    const location = useLocation();
    console.log(location)

    useEffect(() => {

        async function getFilm() {
            try {
                const response = await fetchFilmsById(filmId)
                setFilmDetails(response);
            } catch (error) {
                throw Error("there an error in the fetch")
            }
        }

        getFilm()
    }, [filmId]);

    return<div>
        <Navigation></Navigation>
        <Link to={location.state}>Go back</Link>
        {filmDetails && <FilmDescription data={filmDetails}></FilmDescription>}
        <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet> </Outlet>
    </div>
}