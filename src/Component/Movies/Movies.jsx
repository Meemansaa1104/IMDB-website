
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Card from '../Card/Card';

import './Movies.css';

const Movies = () => {

    const [movieCard, setMovieCard] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData() // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getData() // eslint-disable-next-line
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${ type ? type : 'popular' }?api_key=6b792ac74b380c7c716b8e9fe9c15ed5&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieCard(data.results))
    }

  return (
    <div className='movieCard_list'>
        <h2 className='list_title'>{( type ? type : 'POPULAR' ).toUpperCase()}</h2>
        <div className='list_cards'>
            {
                movieCard.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))
            }
        </div>
    </div>
  )
}

export default Movies