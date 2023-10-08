import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [movieDetail, setMovieDetail] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [genres, setGenres] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWI3ODE3MTJmOTI2MDQwZDkxNzdiNGExN2E3ZTQ0MiIsInN1YiI6IjYzYjEyZmM5ODc1ZDFhMDA4YTRiMWUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6PWWVCwpZJLMMd6m7dcqzLxPTHFeXWO55s4KOO1DSsM'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b1b781712f926040d9177b4a17a7e442', options).then(response => response.json()).then(response => setData(response.results))
        .catch(err => console.error(err));

        setIsLoading(false);
    }

    const fetchMovieDetail = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b1b781712f926040d9177b4a17a7e442`).then(response => response.json()).then(response => setMovieDetail(response))
        .catch(err => console.error(err));
    }

    const fetchGenres = () => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b1b781712f926040d9177b4a17a7e442', options).then(response => response.json()).then(response => setGenres(response.genres))
        .catch(err => console.error(err));
    }

    const fetchSimilarMovies = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=b1b781712f926040d9177b4a17a7e442?language=en-US&page=1`, options).then(response => response.json()).then(response => setSimilarMovies(response.results))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
        fetchGenres();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, genres, movieDetail, similarMovies, isLoading, error, refetch, fetchMovieDetail, fetchSimilarMovies };
}

export default useFetch;