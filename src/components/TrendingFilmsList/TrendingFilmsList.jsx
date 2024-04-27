import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

export default function TrendingFilmsList(data) {
    const listMarkup = data.data.map((film) => {
        return <li key={nanoid()}><Link>{film.original_title }</Link></li>
    })
    return <ul>{listMarkup}</ul>
}