import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './Home.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { Carousel } from 'react-responsive-carousel';

import Movies from '../Movies/Movies';


const Home = () => {

    
  const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6b792ac74b380c7c716b8e9fe9c15ed5&language=en-US')
        .then(res => res.json())
        .then(data => setPopular(data.results))
    }, [])

  return (
    <div className='Home'>
        < Carousel 
          showThumbs = {false}
          autoPlay = {true}
          infiniteLoop = {true}
          showStatus = {false}
          transitionTime = {3}>
           { popular.map(movie => (
            <Link style = {{textDecoration:'none', color:'white'}} to = {`/movie/${movie.id}`}>
              <div className = 'posterImage'>
                <img src={ `https://www.themoviedb.org/t/p/original${movie && movie.backdrop_path}` } alt="" />
              </div>
              <div className='posterImage_overlay'>
                <div className='PosterImage_title'>{ movie ? movie.original_title:''}</div>
                <div className='poster_runtime'>
                    {movie ? movie.release_date : ''}
                    <span className='poster_rating'>
                        { movie ? movie.vote_average : '' }
                        <i className='fas fa-star'/>{' '}
                    </span>
                </div>
                <div className='poster_description'>{movie ? movie.overview : ''}</div>
              </div>
            </Link>
           ))
           }
          </Carousel>
          <Movies/>
    </div>
  )
}

export default Home