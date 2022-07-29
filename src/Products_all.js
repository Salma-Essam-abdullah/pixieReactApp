import './App.css';
import React from 'react';


function Products_all(props){
    return (<>
<div class="col-lg-3">
                      
                  
                  <img src={props.imageUri}  alt="products"/>
                      <h6> {props.header}  </h6>
                        <a>{props.anchor}</a>
 </div>

 </>
);
}
export default Products_all ;