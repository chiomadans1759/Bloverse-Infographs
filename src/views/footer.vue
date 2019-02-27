<template>
  <footer id="footer">
		<div class=" container">
			<div class="row  footer-top-links">
				<div  class="col">
					<ul>Quick Links 
						<li>
							<a href="https://www.bloverse.com/creators" target="_blank">Become a Content Creator</a>
						</li>
						<li>
							<a href="https://www.bloverse.com/creators" target="_blank">Become a Content Consumer</a>
						</li>
						<li >
							<a href="https://www.bloverse.com/creators" target="_blank">Join our Slack Channel</a>
						</li> 
					</ul>
				</div>
				<div  class="col">
					<ul><div class="footer-explore"><i class="fab fa-youtube"></i></div>Explore 
						<li>
							<router-link to="">Hear from the CEO</router-link>
						</li>
						<li>
							<a href="https://www.bloverse.com/creators/photocontest" target="_blank">About Photo Contest</a>
						</li>
						<li>
							<router-link to="">Our Webinars</router-link>
						</li> 
					</ul>
				</div>
				<div  class="col">
					<ul>Further Information 
						<li>
							<a href="https://www.bloverse.com/terms-and-conditions" target="_blank">Terms & Conditions</a>
						</li>
						<li>
							<a href="https://www.bloverse.com/privacy-policies" target="_blank">Privacy Policy</a>
						</li>  
					</ul>
				</div>
				<div class="col newsletter">Subscribe to our Newsletter<br><br> 
					<input class="newsletter-input" type="text" placeholder="Enter Your Email Adress"> 
					<h6>Follow Us</h6>
					<div class="newsletter-social-links"> 
						<a href="https://twitter.com/bloverse_world" target="_blank"><i class="fab fa-twitter"></i></a>
						<a href="https://www.facebook.com/bloverse" target="_blank"><i class="fab fa-facebook-f"></i></a>
						<a href="https://www.linkedin.com/company/bloverse1/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
						<a href="https://www.instagram.com/bloverse/" target="_blank"><i class="fab fa-instagram"></i></a> 
					</div>
				</div>
			</div>
			<div class="row">
				<p><span>bloverse</span> 2018. All Rights Reserved</p>
			</div>
		</div>		
  </footer>
</template> 

<style>
#footer {
 background:#096DD9; 
 font-family:Montserrat;
 color:#fff; 
} 

.newsletter-social-links>a, .footer-explore{ 
	display:inline-flex;
	justify-content: center;
	align-items: center;
	margin-right:10px;
	border-radius: 50%;
	height:25px;
	width:25px; 
	font-size:9px;
	color:#fff;
} 

.footer-explore{ 
	background:#FF0000;  
	height:20px;
	width:20px;  
}

.newsletter-social-links>a:nth-child(1){
	background: #33CCFF;
}

.newsletter-social-links>a:nth-child(2){
	background: #3B5998;
}

.newsletter-social-links>a:nth-child(3){
	background: #4875B4;
}

.newsletter-social-links>a:nth-child(4){
	background: #E1306C;
}

.footer-top-links{
	padding:60px 0;
}

.container p{ 
	margin:auto;
	font-size:10px;
	padding-bottom:15px;  
}

.container p span{  
	font-size:14px; 
	font-weight:600;
}

ul li{ 
	list-style-type:none;
} 

.col{
	font-size:12px;
	font-weight: 600; 
}

.col h6{ 
	padding:10px 0px;
}

.col li{ 
	margin-top:10px; 
}

.col li a{
	font-size:12px;
	color:#fff;
	opacity:.7; 
	font-weight: 200;
	line-height:20px; 
}

.col li a:hover, .newsletter-social-links a:hover{ 
	opacity:1;  
  text-decoration: none; 
}

.newsletter-input{
	background:#096DD9;
	border:none;
	border-bottom:1px solid #ccc;
	outline:none;
	font-size:12px;
	width:12rem; 
	opacity:.7;
	margin-bottom:30px;
  color: #fff;
}

::placeholder {
  color: #fff;
  opacity:1; 
}
 
.col label{
	opacity:.7;
}

</style>