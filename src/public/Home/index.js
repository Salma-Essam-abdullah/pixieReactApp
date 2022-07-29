/* eslint-disable react/jsx-pascal-case */

import React  ,{ useState,useEffect }  from 'react';
import Head_section  from '../shared/Head_section';
import Footer_section  from '../shared/Footer_section';
import Filter_section from '../shared/Filter_section';
import Main_section from '../Main-section/Main_section';
import Pagination_section from './Pagination_section';

const axios = require('axios');

function Index() {
const [movies, setmovieName] = useState();
const [flag,setFlag]=useState('1')
const [page, setpage] = useState();

useEffect(() => {
   const getData = async () => {

     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bcd21dc1b95c4f44baaabdee7cd38fd6&language=en-US&page=${page}`);
     const newData = await response.json();
      setmovieName(newData);
     console.log(flag)
     setFlag('true')
   
     console.log(flag)

   };
   getData();
   
 }, [page]);

   
  return (
    <>
    <Head_section/>
    <Filter_section/>
<Pagination_section
/>
<Footer_section/>
</>
   
  );
}
export default Index;
