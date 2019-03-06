<template>
	<section>
		<div id="popular" class="container mt-5 pt-3">
			<div class="d-flex">
				<p>Popular<br>
					<span>Take a look at how our global community interacts</span>
				</p>
			</div> 
			<div class=" d-flex justify-content-end mb-3">  
				<select class="select">
					<option value="" hidden>Nigeria</option>
					<option value="1">Ghana</option>
					<option value="2">Australia</option>
					<option value="3">South Africa</option>
					<option value="4">Egypt</option>
					<option value="5">London</option>
				</select>
			</div>
			<div class="row d-flex mb-5">
				<PostCard class="col-md-6" card_type="article"/>
				<PostCard class="col-md-6" card_type="photo"/> 
			</div>
			<div class="row d-flex justify-content-around mb-5 pb-4">
				<UserCard class="col-md-5" card_type="content-creator"/> 
				<UserCard class="col-md-5" card_type="content-consumer"/> 
			</div> 
		</div> 
	</section>
</template> 

<style scoped> 

#popular{
	flex-direction:column; 
} 

#popular p{
	font-size:24px;
	color:#252525;
}

#popular p span{
	font-size:14px;
	color:#868686;
}

#popular .select { 
	width:5rem;  
  font-size:12px;
	margin:0; 
	border-radius:4px; 
  padding:5px;  
} 
 
</style>

<script> 
import PostCard from '@/components/PostCard.vue';
import UserCard from '@/components/UserCard.vue';

export default{
	components: {PostCard, UserCard},
	data() {
		return { 
			options: [ "Australia", "Canada", "China", "Germany", "Japan", "Mexico", "Switzerland", "United States"]
		}
	}    
}
</script>