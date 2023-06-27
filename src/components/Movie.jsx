const Movie = (movie) => {
    return (
        <div key={movie.imdbID} className=" card w-[300px] border border-slate-200 shadow-md mx-auto rounded-lg hover:shadow-xl">
            <img className="w-full overflow-hidden p-1 rounded-xl" src={movie.image} alt="img movies"/>
            <div className="card-body p-3 ">
                <h5 className="card-title text-lg font-bold">{movie.title}</h5>
                <h6 className="">{movie.type}</h6>
                <p className="card-text text-slate-600 mb-2">{movie.year}</p>
                <a href="#" className="px-3 py-1 rounded-lg bg-blue-600 text-white mt">detail</a>
            </div>
        </div>
    )
}

export default Movie;