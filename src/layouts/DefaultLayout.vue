<template>
  <div id="default-layout">
<<<<<<< HEAD
    <intro />
    <trending />
    <performance /> 
    <Popular />
=======
    <Visitors/>
    <Popular/>
>>>>>>> 1ed6d7efba8bf9486dd371e5fb84172e59137ce4
    <Footer/>
  </div>
</template>

<script>
import intro from "@/views/Intro.vue";
import trending from "@/views/Trending.vue"
import performance from '@/views/Performance.vue'
import Footer from "@/views/Footer.vue";
import Popular from "@/views/Popular.vue";
import Visitors from "@/views/Visitors.vue";

export default {
  name: "default-layout",
<<<<<<< HEAD
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
=======
  components: { Footer, Popular, Visitors}
>>>>>>> 1ed6d7efba8bf9486dd371e5fb84172e59137ce4
}
</style>


