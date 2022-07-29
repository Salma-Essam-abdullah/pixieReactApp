
import React  ,{ useState,useEffect } from 'react';
import Main_section from '../Main-section/Main_section';

const axios = require('axios');

function Pagination_section(){
const [movies, setmovieName] = useState();
const [flag,setFlag]=useState('1')
const [page, setpage] = useState();

useEffect(() => {
   const getData = async () => {
     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bcd21dc1b95c4f44baaabdee7cd38fd6&language=en-US&page=${page}`);
     const newData = await response.json();
      setmovieName(newData);
      setFlag('true')
   };
   getData();
   
 }, [page]);

useEffect(() => {
   window.scrollTo(0, 0)
 }, [page])


    return (<>

<main class="main-content">	
	 <div class="container">
           <div class="page">
	<div class="movie-list">
      {flag==='true'?    
          movies.results.map((object) =>
         // eslint-disable-next-line react/jsx-pascal-case
         <Main_section 
            movie_id={object.id}
            imageUri={object.poster_path}
            movieName={object.title}
            description={object.overview}
         />
         )
    : 
         <h1></h1>
   }
   </div>
      </div>
	  </div>
	 
   
				<div class="container">
					<div class="page">
               <div class="pagination">
                     
                     <button class="page-number" onClick={()=>setpage(1)}>1</button>
                     <button class="page-number" onClick={()=>setpage(2)} >2</button>
                     <button class="page-number" onClick={()=>setpage(3)}>3</button>
                     <button  class="page-number"onClick={()=>setpage(4)}>4</button>
                     <button  class="page-number"onClick={()=>setpage(5)}>5</button>
                     <button  class="page-number"onClick={()=>setpage(6)}>6</button>
                     <button  class="page-number"onClick={()=>setpage(7)}>7</button>
                     <button  class="page-number"onClick={()=>setpage(8)}>8</button>
                     <button  class="page-number"onClick={()=>setpage(9)}>9</button>
                     <button  class="page-number"onClick={()=>setpage(10)}>10</button>
                  </div>            
				</div>
                </div>
			</main>
           
               </>
);
}

export default Pagination_section;
