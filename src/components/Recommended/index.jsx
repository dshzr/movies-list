import { useState, useEffect } from "react";
import CardMovie from "../CardMovie";

export function Reccommended({ popularMovies, setPopularMovies }) {
  return (
    <>
      <h1 className="px-6 text-2xl text-white/90">Recommended for you</h1>
      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-2
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
        p-6"
      >
        {popularMovies &&
          popularMovies.map((item, index) => {
            return <CardMovie key={index} movie={item} />;
          })}
      </div>
    </>
  );
}
