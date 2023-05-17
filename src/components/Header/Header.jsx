import React, { useEffect } from "react";
import "../../style/Navbar.css";
import NavbarComponent from "./NavbarComponent";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../redux/actions/moviesAction";

function Header() {
  // To set the state of the store
  const dispatch = useDispatch();

  // Access the store
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      <Carousel controls={false}>
        {movies.slice(0, 3).map((movie) => (
          <Carousel.Item>
            <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <Carousel.Caption>
              <h1 className="fw-bold py-2">{movie.title}</h1>
              <p className="fs-4 pb-5">{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Header;
