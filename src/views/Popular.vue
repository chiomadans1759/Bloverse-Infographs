<template>
	<section>
		<div class="container">
			<div class="row">
				<PostCard class="col" card_type="article" />
				<PostCard class="col" card_type="photo" /> 
			</div>
		</div> 
	</section>
</template>

<script> 
import PostCard from '@/components/PostCard.vue';

export default {
  components: { PostCard }
}
</script>

<style>
	select{
		float:right;
	}
</style>