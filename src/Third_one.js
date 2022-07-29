/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React from 'react';
import Products_all from './Products_all';
import item1 from './item1.jpg'
import item2 from './item2.jpg'
import item3 from './item3.jpg'
import item4 from './item4.jpg'



function Third_one(){
    return (<>
<div class="third">
    
        <h4>Featured Items</h4>
       
            <div class="container">
                
                <div class="row">
                    <Products_all header="Product 1" anchor="$30" imageUri={item1}/>
                    <Products_all  header="Product 2" anchor="$80" imageUri={item2} />
                    <Products_all  header="Product 3" anchor="$40"imageUri={item3}/>
                    <Products_all  header="Product 4" anchor="$60"imageUri={item4}/>
                </div>
            </div>
          
       
</div>
</>
);
}
export default Third_one ;



