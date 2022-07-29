/* eslint-disable react/jsx-pascal-case */

import React ,{ useState } from 'react';
import { useParams } from 'react-router';
import Head_section from '../shared/Head_section';
import Footer_section from '../shared/Footer_section';
import Content_film from './Content_film';


const axios = require('axios');
function App2() {
  const params = useParams()
  const CreatedIdeaView = () => {
    const { movie_id } = useParams();
    console.log(movie_id)
    return <span>{movie_id} </span>    
}

  console.log(params)
  const [movie, setmovie] = useState('');
  const [image, setimage] = useState('');
  var movie_id = params.idd
  var url_ =  'https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=bcd21dc1b95c4f44baaabdee7cd38fd6&language=en-US'
  const getData = function(){

    if (!movie){
      axios.get(url_)
      .then(function (response) {
        setimage(response.data.backdrop_path)
        setmovie(response.data)
        console.log(response)
      }) 
      .catch(function (error) {
        console.log(error);
    })
  }
}

    return (
      <>
      <p style={{display:'none'}}>  {getData()} </p>
        <Head_section/>
        {image?
        <Content_film
        imagUri={'https://image.tmdb.org/t/p//w500//'+ image}
        title={movie.title}
        description={movie.overview}
        length={movie.popularity}
        titletype={movie.tagline}
        EpisodesNumber={movie.vote_count}
        year={movie.status}
        />
        
        : 
             <h1></h1>
       }
        <Footer_section/>
      

      </>
   
   );
 }
 
 export default App2;