import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import { FiGrid, FiFilm, FiTv, FiBookmark } from "react-icons/fi";
import { BsFilm } from "react-icons/bs";
import Series from "../Pages/Series";
import Sidebar from "../components/Sidebar";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <nav
        className="
        flex 
        justify-between 
        
        h-24 
        items-center
        px-6
    "
      >
        <Link to="/" className="text-red-600 text-2xl">
          <BsFilm />
        </Link>

        <ul className="flex space-x-6 ">
          <li
            className="
        item-nav
        "
          >
            <NavLink to="/">
              <FiGrid />
            </NavLink>
          </li>
          <li className={`item-nav`}>
            <NavLink to="/movies">
              <FiFilm />
            </NavLink>
          </li>
          <li className={`item-nav`}>
            <NavLink to="/tv">
              <FiTv />
            </NavLink>
          </li>
          <li className={`item-nav`}>
            <NavLink to="/">
              <FiBookmark />
            </NavLink>
          </li>
        </ul>

        <img
          src="https://istoe.com.br/wp-content/uploads/2022/05/stranger-things-novo-poster.jpg"
          alt=""
          className="
            w-8
            h-8
            sm:w-12
            sm:h-12
            md:w-16
            md:h-16
            rounded-full
            border
            object-cover
        "
        />
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}
