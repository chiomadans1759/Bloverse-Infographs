<template>
  <div id="default-layout">
    <Popular />
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/views/Footer.vue";
import Popular from "@/views/Popular.vue";

export default {
  name: "default-layout",
  components: { Footer, Popular }
}
</script> 
 