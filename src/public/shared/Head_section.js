import React from 'react';
import {
	Link
  } from "react-router-dom";
import logo from '../assits/images/logo.png'

function Head_section(){
    return (<>
	<div id="site-content">
		<header class="site-header">
				<div class="container">
					<a href="index.html" id="branding">
						<img src={logo} alt="logo" class="logo" />
						<div class="logo-copy">
							<h1 class="site-title">Company Name</h1>
							<small class="site-description">Tagline goes here</small>
						</div>
					</a> 
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							
						<Link to="/"  class="menu-item ">&nbsp; Movie reviews &nbsp;</Link>
							
							<Link to="/About"  class="menu-item ">&nbsp; About Us &nbsp;</Link>
						<Link to="/JoinUs"  class="menu-item ">Join Us &nbsp;</Link>
						
						 <Link to="/ContactUs"  class="menu-item ">Contact Us </Link>
						</ul> 
						<form action="#" class="search-form">
							<input type="text" placeholder="Search..." />
							<button><i class="fa fa-search"></i></button>
						</form>
					</div> 

					<div class="mobile-navigation"></div>
				</div>
			</header>
			</div>
</>


);
}
export default Head_section;