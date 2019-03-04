<template>
  <div id="default-layout">
    <intro />
    <trending />
    <performance /> 
    <Popular />
    <Footer/>
  </div>
</template>

<script>
import intro from "@/views/Intro.vue";
import trending from "@/views/Trending.vue"
import performance from '@/views/Performance.vue'
import Footer from "@/views/Footer.vue";
import Popular from "@/views/Popular.vue";

export default {
  name: "default-layout",
  components: {
    intro,
    trending,
    performance,
    Footer,
    Popular
  }
};
</script>
<style>
#default-layout{
  overflow-x:hidden
}
</style>


