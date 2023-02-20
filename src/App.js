import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import searchicon from "./images/search.png"

function App() {

    const [movies, setMovies] = useState([]);
    const [startloading, setstartLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [movieName, setMovieName] = useState("");

    function handleChange(e) {
        const name = e.target.value;
        setMovieName(name);
    }

    function handleClick() {
        setLoading(true)
        searchMovies(movieName);

    }

    function handleEnter(e) {
        if (movieName != "") {
            if (e.key === "Enter") {
                setLoading(true)
                searchMovies(movieName);
                e.preventDefault();

            }
        }
    }

    const searchMovies = async (title) => {

        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
                    'X-RapidAPI-Key': '7cb7c78938msh0ac0a24c3ccd7e9p122e80jsn6f4afd6ee3d7'
                }
            };
            const response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${title}`, options)
            const data = await response.json();
            setMovies(data.d);
            console.log(data.d);

        } catch (error) {
                console.log(error);

        }
        setLoading(false);
       

    useEffect(() => {
        const title = ["Game", "Avengers", "Netflix", "Horror"];
        const x = Math.floor(Math.random() * 4);
        searchMovies(title[x]);
        setTimeout(() => {
            setstartLoading(false);
        }, 2000)
    }, []);

    if (startloading) return <h2>Loading...</h2>

    return <>
    <div className="header">
        <p>MOvies Villa</p>
        <div className="search">
                <input
                    onChange={handleChange}
                    onKeyPress={handleEnter}
                    value={movieName}
                    type="text"
                    placeholder="Search for movies"
                />
                <img
                    onClick={handleClick}
                    src={searchicon}
                    alt="notfound"
                />
            </div>
    </div>
        <div className="second">
            {loading ? <h3 className="loading">Loading Movies...</h3> :
                <div className="container">
                    {movies ? movies.map((movie) => {
                        return <Card key={movie.id} movie={movie} />
                    }) : <h3>Movie Not Found</h3>}
                </div>}
        </div>
    </>
}
export default App;

