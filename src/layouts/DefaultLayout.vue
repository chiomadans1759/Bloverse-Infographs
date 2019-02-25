<template>
  <div id="default-layout">
    <intro />
    <trending />
  </div>
</template>

<script>
import intro from "@/views/intro.vue";
import trending from "@/views/trending.vue"
export default {
  name: "default-layout",
  components: {
    intro,
    trending
  }
};
</script>
<style>
#default-layout{
  overflow-x:hidden
}
</style>
