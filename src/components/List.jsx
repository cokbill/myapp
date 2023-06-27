import React from 'react';
import Movie from './Movie';
import { useState } from "react";
import { useEffect } from "react";


const List = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2e039957&s=naruto');
            const {Search} = await data.json();
            console.log(Search)

            setMovies(Search);
            setLoading(false);

            
        }
        fetchData();

        }, [movies.length])

        return (
            <div>
                <h2 className="text-3xl font-bold"> do i wanna know ?</h2>
                    <div className="w-full grid grid-cols-3 gap-3">
                    {
                        loading ? (<div>Loading...</div>) :
                            (
                        movies.map((item) => {
                            return  (
                                <Movie key={item.imdbID} type={item.Type} title={item.Title} year={item.Year} image={item.Poster}/>
                                    )
                                })
                            )
                    }
                </div>
            </div>
        ) 
}



export default List;