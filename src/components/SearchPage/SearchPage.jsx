import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;
  const type = searchParams.get("type") || "";

  const totalPages = Math.ceil((movies.totalResults || 0) / 10);
  const pagesToShow = Math.min(totalPages, 5);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError("");

    fetch(
      `https://www.omdbapi.com/?s=${query}&page=${page}&type=${type}&apikey=d600e890`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setError(data.Error);
          setMovies({});
        } else {
          setMovies(data);
          console.log(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("somthing went wrong");
        setLoading(false);
      });
  }, [query, page, type]);

  return (
    <div className="w-full min-h-screen bg-black pb-10 pt-6 relative">
      <div className="flex justify-center">
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setSearchParams({ q: e.target.value, page: 1 })}
          placeholder="Search For Movie"
          className="w-80 md:w-150 p-2 rounded-md shadow-2xl hover:drop-shadow-purple-700 hover:drop-shadow-md outline-none text-white bg-[#242424] border-[#2d2d2d] border"
        />
      </div>

      <div className="absolute top-20 md:top-7 right-10">
        <label className="text-white mr-3 font-semibold">Filter</label>
        <select
          value={type}
          onChange={(e) =>
            setSearchParams({
              q: query,
              page: 1,
              type: e.target.value,
            })
          }
          className="border border-gray-500 rounded p-1 text-white"
        >
          <option value="" className="text-black bg-white">
            All
          </option>
          <option value="movie" className="text-black bg-white">
            Movie
          </option>
          <option value="series" className="text-black bg-white">
            Series
          </option>
          <option value="episode" className="text-black bg-white">
            Episode
          </option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 min-lg:grid-cols-4 xl:grid-cols-5 w-full h-full place-items-center gap-y-4 py-10 mt-8">
        {movies.Search?.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <div className="w-[240px] h-[400px] md:h-[430px] rounded-lg  bg-[#1c1c1c] border-2 border-[#232329] relative ">
              <div className="relative overflow-hidden h-[80%]">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : `https://via.placeholder.com/300`
                  }
                  className="w-full h-full rounded-t-lg  transition duration-500 ease-in-out hover:scale-110"
                  alt=""
                />
              </div>
              <div className="py-4 px-2">
                <p className="text-white text-[14px] font-semibold mb-1">{movie.Title}</p>
                <p className="text-white text-[12px]">{movie.Year}</p>
              </div>
            </div>
          </Link>
        ))}

        {loading && (
          <p className="text-gray-500 text-center text-xl mt-6 absolute top-60">
            loading...
          </p>
        )}
        {error && (
          <p className="text-gray-500 text-center text-xl mt-6 absolute top-60">
            Not found
          </p>
        )}

        {!loading && !error && query && !movies.Search && (
          <p className="text-gray-500 text-center text-xl mt-6 absolute top-60">
            No results found ❌
          </p>
        )}

        {!loading && !error && !query && (
          <p className="text-gray-500 text-center text-xl mt-6 absolute top-60">
            Start typing to search movies 🎬
          </p>
        )}
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: pagesToShow }, (_, i) => (
          <button
            onClick={() => setSearchParams({ q: query, page: i + 1, type})}
            className={`px-3 py-1 rounded
            ${page === i + 1 ? "bg-purple-500" : "bg-gray-700"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Link to="/">
        <button className="w-10 md:w-20 border border-gray-600 hover:border-white hover:bg-purple-600 text-white absolute top-8 left-6 flex justify-center items-center gap-x-1 rounded">
          <i className="fa-solid fa-arrow-left "></i>
          <p className="font-semibold hidden md:block">Back</p>
        </button>
      </Link>
    </div>
  );
}
