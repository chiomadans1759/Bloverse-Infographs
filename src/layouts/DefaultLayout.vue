<template>
  <div id="default-layout">
    <visitors class="mb-5" />
    <popular class="mb-5" />
    <bl-footer />
  </div>
</template>

<script>
import intro from "@/views/Intro.vue"
import trending from "@/views/Trending.vue"
import performance from '@/views/Performance.vue'
import BlFooter from "@/views/Footer.vue"
import popular from "@/views/Popular.vue"
import visitors from "@/views/Visitors.vue"

export default {
  name: "default-layout",
  components: { BlFooter, popular, visitors }
}
</script>

