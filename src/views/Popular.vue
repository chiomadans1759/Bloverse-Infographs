<template>
	<section class="border-top">
		<div id="popular" class="container">
			<div class="d-flex">
				<p>Popular<br>
					<span>Take a look at how our global community interacts</span>
				</p>
			</div> 
			<div class="dropdown d-flex justify-content-end mb-2">
				<b-dropdown
					class="bax select"
					id="ddown"
					text="Nigeria"
					size="sm"
					variant="bax"
				>
					<b-dropdown-item  
						v-for="country in countries" 
						:key="country">
						{{country}}
					</b-dropdown-item>
				</b-dropdown>
			</div> 
			<div class="row d-flex mb-5">
				<PostCard class="col-6" card_type="article"/>
				<PostCard class="col-6" card_type="photo"/> 
			</div>
			<div class="d-flex justify-content-around">
				<UserCard class="col-5" card_type="content-creator"/> 
				<UserCard class="col-5" card_type="content-consumer"/> 
			</div> 
		</div> 
	</section>
</template> 

<style scoped> 

#popular{
	flex-direction:column;
	padding:64px 0;
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
  font-size:12px;
	margin:0; 
	border-radius:4px;  
	border:1px solid #ccc; 
} 
 
</style>

<script> 
import PostCard from '@/components/PostCard.vue';
import UserCard from '@/components/UserCard.vue';

export default {
	components: {PostCard, UserCard},
	data() {
		return { 
			countries:["Nigeria", "Kenya", "USA", "Australia", "South Africa", "UK"]
		}
	}    
}
</script>