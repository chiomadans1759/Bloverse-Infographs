<template>
    <div> 
        <Header/>
        <Networks/>  
    </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Networks from "@/components/Networks.vue";
export default {
  name: "network",
  components: {Header, Networks}
};
</script>