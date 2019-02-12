<template>
  <div id="default-layout">
    <default-header />
    <router-view />
  </div>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
export default {
  name: "default-layout",
  components: { DefaultHeader }
}
</script>