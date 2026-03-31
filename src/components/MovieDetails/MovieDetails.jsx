import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=d600e890`)
      .then((respose) => respose.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-black min-h-screen md:p-20 relative py-5">
      <button
        onClick={() => navigate(-1)}
        className=" w-20 h-6 rounded  border border-gray-500  absolute top-5 left-5 flex items-center justify-center gap-x-1 hover:bg-purple-600 hover:border-white"
      >
        <i className="fa-solid fa-arrow-left text-white"></i>
        <span className="font-bold text-white">Back</span>
      </button>
      <div className="flex flex-col md:flex-row  rounded-lg w-full">
        <div className="w-full md:w-[25%] h-80  md:h-110  rounded-l-lg border-[#232329] border">
          <img
            className="w-full h-full rounded-lg "
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>

        <div className="md:w-[75%] h-full px-3 md:px-10 text-white">
          <div className="rounded w-13 h-6 justify-center flex items-center border text-[14px] border-gray-600 mb-4 mt-4 md:mt-0">
            <h3>{movie.Type}</h3>
          </div>
          <h1 className="text-5xl mb-5 ">{movie.Title}</h1>
          <div className="flex gap-x-5 mb-4">
            <p>{movie.Year}</p>
            <p>{movie.Runtime}</p>
            <div className="flex items-center p-1 border rounded">
              <p className="text-[10px]">{movie.Rated}</p>
            </div>
          </div>
          <div className="flex gap-x-3 mb-3">
            {movie.Genre?.split(", ").map((genre, index) => (
              <div
                className="border h-8 w-30 rounded-md flex justify-center items-center "
                key={index}
              >
                <p className="text-[12px]">{genre}</p>
              </div>
            ))}
          </div>
          <div className="w-full">
            <p>{movie.Plot}</p>
          </div>

          <div className="flex">
            <div className="w-22 text-gray-400 mt-5 rounded text-center p-2 border border-gray-500-900">
              <i className="fa-solid fa-star text-amber-300 text-2xl"></i>
              <p className="text-gray-400">{movie.imdbRating}</p>
              <p className="text-gray-400">IMDB</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full text-white px-10 mt-20">
        <div className="grid grid-cols-4 gap-x-5 mb-10">
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">DIRECTOR</h3>
            <h3 className="text-[14px]">{movie.Director}</h3>
          </div>
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">WRITTER</h3>
            <h3 className="text-[14px]">{movie.Writer}</h3>
          </div>
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">CAST</h3>
            <h3 className="text-[14px]">{movie.Actors}</h3>
          </div>
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">LANGUAGE</h3>
            <h3 className="text-[14px]">{movie.Language}</h3>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-5">
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">COUNTRY</h3>
            <h3 className="text-[14px]">{movie.Country}</h3>
          </div>
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">RELEASED</h3>
            <h3 className="text-[14px]">{movie.Released}</h3>
          </div>
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">BOX OFFICE</h3>
            <h3 className="text-[14px]">{movie.BoxOffice}</h3>
          </div>
          <div>
            <h3 className="text-[13px] mb-1 text-gray-500">AWARDS</h3>
            <h3 className="text-[14px]">{movie.Awards}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
