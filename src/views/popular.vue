<template>
	<section>
		<div class="container">
			<div>
				<h4>Trending</h4>
				<p>Take a look at how our global community interacts</p> 
				<select>
						<option value="0">Select Country<i class="fas fa-angle-down" style="color:blue; font-size:12px;"></i></option>
						<option value="1">Audi</option>
						<option value="2">BMW</option>
						<option value="3">Citroen</option>
						<option value="4">Ford</option>
						<option value="5">Honda</option>
						<option value="6">Jaguar</option>
						<option value="7">Land Rover</option>
						<option value="8">Mercedes</option>
						<option value="9">Mini</option>
						<option value="10">Nissan</option>
						<option value="11">Toyota</option>
						<option value="12">Volvo</option>
					</select>
			</div>
			<TopArticle/> 
		</div> 
	</section>
</template>

<script> 
import TopArticle from '@/components/PostCardTopArticle.vue';

export default {
  components: {TopArticle }
    
}
</script>

<style>
	select{
		float:right;
	}
</style>