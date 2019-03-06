<template>
  <div id="default-layout">
    <Intro />
    <Performance />
    <Trending />
    <Visitors/>
    <Popular/>
    <Footer/>
  </div>
</template>

<script>
import Intro from "@/views/Intro.vue";
import Performance from "@/views/Performance.vue";
import Trending from "@/views/Trending.vue";
import Footer from "@/views/Footer.vue";
import Popular from "@/views/Popular.vue";
import Visitors from "@/views/Visitors.vue";

export default {
  name: "default-layout",
  components: { 
    Intro, 
    Performance, 
    Trending, 
    Visitors, 
    Popular, 
    Footer 
  }
}
</script>

