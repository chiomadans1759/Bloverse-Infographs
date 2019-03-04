<template>
  <main id="user-card">
    <div class="row container mb-3">
      <h6 v-if="card_type == 'content-creator'">Top Content Creator of the Month</h6> 
			<h6 v-else>Top Content Consumer of the Month</h6> 
    </div>
    <div class="card" style="height:420px;">
      <img v-if="card_type == 'content-creator'" class="image-blur" src="./../assets/content-creator.jpg" alt>
      <img v-else class="image-blur" src="./../assets/content-consumer.jpg" alt>
			<img v-if="card_type == 'content-creator'" class="image-avarter" src="./../assets/content-creator.jpg" alt>
      <img v-else class="image-avarter" src="./../assets/content-consumer.jpg" alt>
			<p class="card-body-category" v-show="card_type == 'content-creator'">Follow</p> 
			<div class="mt-3 d-flex count justify-content-start align-items-center"> 
				<span class="font-weight-bold name">Johndoe</span>
				<i class="fas fa-circle mx-2 mt-1"></i> 
				<span class="time mt-1">Nigeria</span>
			</div>
			<div v-if="card_type == 'content-creator'" class="metrics pl-4 mt-1"> 
				<div class="creator-metrics pt-3">
					<p>Points: <span class="ml-2">289.9</span></p>  
				</div> 
				<div class="mt-3 d-flex align-items-center"> 
					<span class="country-count">6</span>
					<span class="country-count-of mx-1">of</span>
					<span class="country-count">30</span>
					<i class="fas fa-circle mx-2"></i> 
					<span class="time">Nigeria</span>
				</div>
				<div class="my-1 d-flex align-items-center"> 
					<span class="country-count">5, 078</span>
					<span class="country-count-of mx-1">of</span>
					<span class="country-count">7, 203</span>
					<i class="fas fa-circle mx-2"></i> 
					<span class="time">Global</span>
				</div> 
				<div class="creator-metrics pt-4">
					<p>Published Articles: <span class="ml-2">2, 899</span></p>  
				</div>
				<div class="mt-0 d-flex align-items-center">
					<i class="fas fa-rocket mr-3 this-month"></i> 
					<span class="country-count">50</span>
					<span class="country-count-of mx-1">this Month</span> 
				</div> 
				<div class="mt-1 mb-3 d-flex align-items-center">
					<i class="fas fa-rocket mr-3 last-month"></i> 
					<span class="country-count">38</span>
					<span class="country-count-of mx-1">last Month</span> 
				</div>
			</div>
			<div v-else class="metrics pl-4 mt-1"> 
				<div class="creator-metrics pt-3">
					<p>Total Views: <span class="ml-2">500, 000</span></p>  
				</div> 
				<div class="mt-0 d-flex align-items-center">
					<i class="fas fa-eye mr-3 this-month"></i> 
					<span class="country-count">280, 000</span>
					<span class="country-count-of mx-1">this Month</span> 
				</div> 
				<div class="mt-2 mb-3 d-flex align-items-center"> 
					<i class="fas fa-eye mr-3 last-month"></i>
					<span class="country-count">220, 000</span>
					<span class="country-count-of mx-1">last Month</span> 
				</div>
				<div class="creator-metrics pt-2">
					<p>Total Shares: <span class="ml-2">3, 370</span></p>  
				</div>
				<div class="d-flex pb-4">
					<div class="social-shares"> 
						<i class="fab fa-facebook-square"></i>
						<span class="ml-2">2, 300</span>
					</div>
					<div class="social-shares ml-4"> 
						<i class="fab fa-twitter"></i>
						<span class="ml-2">600</span>
					</div>
					<div class="social-shares ml-4"> 
						<i class="fab fa-linkedin"></i>
						<span class="ml-2">470</span>
					</div>
				</div>
			</div>
			<div class="creator-metrics border-top pt-3 pl-4">
				<p v-if="card_type == 'content-creator'">Creator Engagement Rate: <span class="ml-2">98.2%</span></p>
				<p v-else>Consumer Engagement Rate: <span class="ml-2">88.7%</span></p>  
			</div>
		</div>
  </main>
</template>

<script>
	export default {
	name: "user-card",
	props: {
		card_type: String
	}
}
</script>

<style scoped> 

#user-card h6{
  font-size:16px;
  font-weight:bold;
	color:#565656;
}

#user-card .image-blur {
  object-fit: cover; 
	object-position:center;
	height: 87px;
	filter: blur(2px);
  -webkit-filter: blur(2px); 
} 

#user-card .image-avarter{
	height:80px;
	width:80px;	
  object-fit: cover;
	border-radius:50%;
	position:absolute;
	top:50px;
	left:24px;
}

#user-card .card-body-category {
  position: absolute;
  top: 25px;
  right: 22px;
  color:#096DD9;
  display: inline-block;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
}

#user-card .fa-circle {
  font-size: 5px;
  color: #096dd9;
}

#user-card .time {
  color: #565656;
	font-size:14px;
} 

#user-card .name {
  font-size: 20px; 
  color: #565656;
}

#user-card .count{
	padding-left:8rem;
}

#user-card .creator-metrics p, 
#user-card .creator-metrics span{
	font-size:14px;	
	font-weight:bold;
}

#user-card .creator-metrics p{
	color:#565656;
}

#user-card .creator-metrics span{ 
	color:#252525; 
}

#user-card .this-month{
	color:#096DD9;
}

#user-card.last-month{
	color:#868686;
}

#user-card .country-count{
	font-size: 14px; 
  color: #252525;
	font-weight:bold;
}

#user-card .country-count-of{
	font-size: 14px; 
  color: #B7B7B7;
	font-weight:bold;
}

#user-card .social-shares{
	width:auto;
	padding:7px;
	border:1px solid #ccc;
	border-radius:4px;
	font-size:12px;
	font-weight:600;
	color:#565656;
	display:flex;
	align-items:center;
}

#user-card .social-shares i{
	font-size:20px; 
} 

#user-card .fa-facebook-square{
	color:#3B5998;
}

#user-card .fa-linkedin{
	color:#0077B5;
}

#user-card .fa-twitter{
	color:#38A1F3;
}

</style>