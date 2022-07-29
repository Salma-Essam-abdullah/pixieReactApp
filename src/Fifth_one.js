import './App.css';
import logo from './logo.png'
import React from 'react';
import Home from './home';
import  About from './about';
import Users from './user';
import { createFromIconfontCN } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Fifth_one(){
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });
    return (<>
<div class="fif">
    <div class="container">

         
          <div class="icons text-center">
           <a href="#">  <IconFont type="icon-facebook"  style={{ fontSize: '35px' }} /></a>
           <a href="#">  <IconFont type="icon-twitter"  style={{ fontSize: '35px' }}/></a>
           <a href="#">  <IconFont type="icon-tuichu" style={{ fontSize: '35px' }} /></a>


          </div>
         
    </div>
    <hr/>
   <p class="text-center"> COPYRIGHT © 2019 COMPANY NAME - DESIGN: <a class="an" href="#"> TOOPLATE</a></p>

</div>
</>
);
}
export default Fifth_one ;