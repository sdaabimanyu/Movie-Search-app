import React, { useEffect, useState } from "react";

export default function BannerSlider() {
  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d600e890")
      .then((respose) => respose.json())
      .then((result) => console.log(result));
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      description: `A skilled thief who steals secrets from within people's 
      dreams is tasked with planting an idea into a target's subconscious. `,
      image:
        "https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      description: `A team of astronauts travels through a wormhole in search
       of a new home for humanity as Earth faces extinction due to environmental collapse.`,
      image:
        "https://variety.com/wp-content/uploads/2014/10/interstellar-6.jpg?w=1000",
    },
    {
      id: 3,
      title: "Avengers EndGame",
      year: 2019,
      rating: 8.4,
      description: `After the devastating events of Infinity War, the remaining
       Avengers assemble once more to reverse Thanos' actions and restore balance
        to the universe, no matter the cost.`,
      image:
        "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    },
    {
      id: 4,
      title: "Joker",
      year: 2019,
      rating: 8.3,
      description: `A gritty character study of a mentally ill, failed 
      comedian named Arthur Fleck, who descends into madness and nihilism,
       becoming a criminal mastermind in a corrupt Gotham City.`,
      image:
        "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      id: 5,
      title: "Batman",
      year: 2012,
      rating: 8.4,
      description: `Eight years after vanishing, a broken Bruce Wayne is forced out of
         retirement to save a chaotic Gotham City from the ruthless terrorist Bane.`,
      image:
        "https://image.tmdb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [movies.length]);
  return (
    <div>
      <div className="bg-gray-800 w-full h-[470px] mt-2 rounded-lg overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div className="min-w-full h-full relative" key={index}>
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover  bg-top"
              />

              <div className="text-white absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="flex items-center gap-x-2 mb-3">
                  <div className="w-[60px] h-[18px] bg-purple-500 rounded-sm flex justify-center items-center">
                    <p className="text-[12px] font-semibold">Featured</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <i className="fa-solid fa-star text-[14px] text-amber-300"></i>
                    <p className="text-[14px]">{movie.rating}</p>
                  </div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-[14px]">{movie.year}</p>
                </div>

                <h1 className="font-semibold text-4xl mb-3">{movie.title}</h1>
                <p className="text-[12px] max-w-[50ch] text-base">
                  {movie.description}
                </p>
                <div className="flex gap-3">
                  <button className="w-[150px] h-[35px] rounded mt-3 bg-purple-500">
                    Watch Now
                  </button>
                  <button className="w-[150px] h-[35px] rounded mt-3 bg-[#242424] border-[#2d2d2d] border-3">
                    + Add To Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
