
import React from 'react';
import { Link } from 'react-router-dom';

function Main_section(props){
    
    
    return (<>
                        <div class="movie">
                            <figure class="movie-poster">
                            <Link to={'single/'+ props.movie_id } >
                                <img src={'https://image.tmdb.org/t/p//w500//'+props.imageUri} alt="#" />
                            </Link>
                                </figure>
                            <div class="movie-title">
                               <p>{props.movieName}</p>
                            </div>
                                
                            <p>
                                {
                                    props.description
                                }
                            </p>
                        </div>   
                            
    </>
);
}

export default Main_section;