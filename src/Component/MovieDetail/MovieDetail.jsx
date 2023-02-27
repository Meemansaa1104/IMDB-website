import React, { useEffect, useState } from 'react'

import './MovieDetail.css'

import { useParams } from 'react-router-dom'

const MovieDetail = () => {

    const [movieDetail, setMovieDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData() 
        window.scrollTo(0,0) // eslint-disable-next-line
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6b792ac74b380c7c716b8e9fe9c15ed5&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    }

  return (
    <div className='Movie_Detail'>
        <div className="movie_intro">
            <img className='movie_Img' src={ `https://www.themoviedb.org/t/p/original${movieDetail ? movieDetail.backdrop_path:''}` } alt="" />
        </div>
        <div className="movie_all_detail">
            <div className="movie_detailLeft">
                <div className="movie_posterBox">
                    <img className='movie_poster' src={ `https://www.themoviedb.org/t/p/original${movieDetail ? movieDetail.poster_path:''}` } alt="" />
                </div>
            </div>
            <div className="movie_detailRight">
                <div className="movie_detailRightTop">
                    <div className="movie_name">{ movieDetail ? movieDetail.original_title : '' }</div>
                    <div className="movie_tagline">{ movieDetail ? movieDetail.tagline : '' }</div>
                    <div className="movieDetail_rating">
                       { movieDetail ? movieDetail.vote_average : '' }<i class='fas fa-star'/>
                       <span className='movie_voteCount'>{ movieDetail ? '(' + movieDetail.vote_count + ') votes' : '' }</span>
                    </div>
                    <div className="movieDetail_runtime">{ movieDetail ? movieDetail.runtime + ' mins' : '' }</div>
                    <div className="movieDetail_releaseDate">{ movieDetail ? 'Release date: ' + movieDetail.release_date : '' }</div>
                    <div className="movieDetail_genres">
                        {
                            movieDetail && movieDetail.genres
                            ?
                            movieDetail.genres.map((genre) => (
                                <><span className="movieDetail_genre" id = {genre.id}>{genre.name}</span></>
                            ))
                            :
                            ''
                        }
                    </div>
                </div>
                <div className="movie_detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{movieDetail ? movieDetail.overview : ''}</div>
                </div>
            </div>
        </div>
        <div className="movie_detailLink">
            <div className="movie_heading">Useful Links</div>
            {
                movieDetail && movieDetail.homepage && <a href={movieDetail.homepage} rel='noreferrer' target = '_blank' style={{textDecoration:'none'}}><p><span className='movie_homeButton movie_button'> Homepage <i className='newTab fas fa-external-link-alt'></i></span></p></a>
            }
            {
                movieDetail && movieDetail.imdb_id && <a href={'https://www.imdb.com/title/' + movieDetail.imdb_id} rel='noreferrer' target = '_blank' style={{textDecoration:'none'}}><p><span className='movie_imdbButton movie_button'> Homepage <i className='newTab fas fa-external-link-alt'></i></span></p></a> 
            }
        </div>
        <div className="movie_heading">Production Companies</div>
        <div className="movie_production">
            {
                movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                    <>
                        {
                            company.logo_path
                            &&
                            <span className='productionCompanyImage'>
                                <img className='movie_productionCompany' src={'https://www.themoviedb.org/t/p/original' + company.logo_path} alt="" />
                                <span>{company.name}</span>
                            </span>
                        }
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default MovieDetail