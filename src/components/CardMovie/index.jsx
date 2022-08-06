import { FiGrid, FiFilm, FiTv, FiBookmark } from "react-icons/fi";
import { BsFilm } from "react-icons/bs";
import { useState } from "react";

export default function CardMovie({ movie, isSerie }) {
  return (
    <div alt={movie.id} className={`relative md:hover:scale-105 duration-150`}>
      <span
        onClick={() => console.log(movie)}
        className="
        z-50
        absolute 
        right-2 
        top-2 
     bg-black/40 
        md:w-14
        md:h-14
        w-8
        h-8
        flex
        items-center
        justify-center
        cursor-pointer
        duration-200
        rounded-full
        hover:bg-black/90
        shadow-lg
        "
      >
        <FiBookmark className="md:text-2xl text-sm text-center z-50" />
      </span>
      {movie && movie.backdrop_path ? (
        <img
          className={`rounded z-0
          
          `}
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.backdrop_path
          }`}
          alt=""
        />
      ) : (
        <img
          className="object-cover w-full h-"
          src="http://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"
          alt=""
        />
      )}
      <div
        className="absolute
       bottom-1 
       left-1
       md:bottom-4
       md:left-4
       text-white/80 
       font-extralight
       
       "
      >
        <div className="p-2 rounded">
          <div className="flex items-center space-x-3 md:visible invisible">
            <span>
              {movie && movie.first_air_date
                ? movie.first_air_date.split("-")[0]
                : movie.release_date.split("-")[0]}
            </span>
            <span>•</span>
            {isSerie ? <FiTv /> : <BsFilm />}

            <span>{isSerie ? "Tv" : "Movie"}</span>
          </div>
          <h1
            className="text-white 
          md:text-xl 
          font-semibold
          text-sm
          text-ellipsis 
          "
          >
            {movie && movie.title ? movie.title : movie.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
