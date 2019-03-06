<template>
  <div id="default-layout">
    <Visitors/>
    <Popular/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/views/Footer.vue";
import Popular from "@/views/Popular.vue";
import Visitors from "@/views/Visitors.vue";

export default {
  name: "default-layout",
  components: { Footer, Popular, Visitors }
}
</script>

