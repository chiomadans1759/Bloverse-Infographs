<template>
	<section>
		<HeatMap class="heatmap border-top"/> 
	</section>
</template> 

<script> 
import HeatMap from '@/components/HeatMap.vue';

export default {
	components: { HeatMap }
}
</script>

<style>
	.heatmap{
		padding:64px 0;
	}
</style>