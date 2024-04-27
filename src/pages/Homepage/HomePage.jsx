import axios from 'axios';
import { useEffect, useState } from "react";
import { fetchTrendingFilms } from "../../fetchTrendingFilms";
import TrendingFilmsList from '../../components/TrendingFilmsList/TrendingFilmsList';
import Navigation from '../../components/Navigation/Navigation';

function HomePage() {
    const [trendingFilmList, setTrendingFilmList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    
    
    useEffect(() => {

        async function getTrendingFilms() {
            try {
                setIsLoading(true)
                const response = await axios(fetchTrendingFilms())
                setTrendingFilmList(response.data.results)
                console.log(trendingFilmList)
            } catch (error) {
                return Error("there is an error in fetch")
            }
            finally {
                setIsLoading(false)
            }
        }
        
        getTrendingFilms()

    }, []);

    return <div>
        <Navigation></Navigation>
        <TrendingFilmsList data={trendingFilmList}></TrendingFilmsList>
    </div>
}

export default HomePage;