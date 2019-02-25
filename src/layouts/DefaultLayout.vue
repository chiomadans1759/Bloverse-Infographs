<template>
  <div id="default-layout">
    <default-header />
    <Footer/>
    <router-view />
  </div>
</template>

<script>
import Footer from "@/views/Footer.vue";
export default {
  name: "default-layout",
  components: { Footer }
}
</script> 
 