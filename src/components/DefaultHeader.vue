<template>
  <header id="header">
		<div v-if="currentRoute == '/network'">
			<h2>NETWORK GRAPH OF REPRESENTED ENTITIES ON BLOVERSE</h2>
		</div>
		<div v-else>
			<h2>INTERACTIVE BUBBLE CHART FOR MOST TRENDING HEADLINES</h2>
			<h5>List of the most trending headlines on Bloverse</h5>
		</div>
  </header>
</template>

<script>
export default {
  el: "#header",
	computed: {
		currentRoute() {
			return this.$route.path
		}
	}
};
</script>

<style>
#header {
  text-align: center;
  border-bottom: 1px solid grey;
  box-shadow: 1px 1px 10px #888888;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>