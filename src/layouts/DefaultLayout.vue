<template>
  <div id="default-layout">
    <intro />
    <trending />
    <performance /> 
  </div>
</template>

<script>
import intro from "@/views/intro.vue";
import trending from "@/views/trending.vue"
import performance from '@/views/performance.vue'
export default {
  name: "default-layout",
  components: {
    intro,
    trending,
    performance
  }
};
</script>
<style>
#default-layout{
  overflow-x:hidden
}
</style>
