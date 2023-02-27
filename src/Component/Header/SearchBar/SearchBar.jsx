import React, { useState } from 'react'

import { useSearchParams } from 'react-router-dom';

import SearchOutlinedIcon from '@mui/icons-material/Search';

import './SearchBar.css'

import axios from 'axios';

const SearchBar = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'))
    const [queryData, setQueryData] = useState([])

    const handleChange = (e) =>{
       const newQuery = (e.target.value);
       setQuery(newQuery);
       setSearchParams({
         query: newQuery
       })
    }

    const getMovieData = (e) =>{
        e.preventDefault();

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6b792ac74b380c7c716b8e9fe9c15ed5&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((response) =>{
            setQueryData(response.data.Search)
        })
    }

  return (
    <div className='SearchBaar'>
      
     <form className='SearchForm' onSubmit={getMovieData}>
    <input placeholder='Search IMDb' 
    type = 'text' 
    onChange={handleChange} 
    value={query ||''}>
    </input>
    <SearchOutlinedIcon/>
    </form>
<div className='results'>
{
queryData && queryData.map((value, index) => {
   return (
    <div className = 'cards' >
    <img className='cards_img' src={value.poster_path} alt="" />
    <div className='cards_overlay'>
      <div className='cards_title'>{value.original_title}</div>
      <div className='cards_runtime'>
         {value.release_date}
         <span className='cards_rating'>
             {value.vote_average}
             <i className='fas fa-star'/>
         </span>
     </div>
     <div className='cards_description'>{value.overview.slice(0,118) + '...'}</div>
   </div>
 </div>
 )
 })
}
</div>
</div>
  )
}

export default SearchBar