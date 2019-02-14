<template>
<div>
      <b-row class="text-center  mx-auto main-container">
        <b-col cols="2">  <sidebar /> </b-col>
        <b-col cols="6"><bubble-comp /></b-col>
        <b-col><articlesComp></articlesComp></b-col>
    </b-row>



</div>
 
  
</template>

<script>
import sidebar from '../components/Sidebar.vue'
import articlesComp from '../components/ArticlesComponent.vue'
import bubbleComp from '../components/BubbleComponent.vue'


export default {
 components:{sidebar,
 articlesComp,bubbleComp},
  name: "landing"
};
</script>

<style>
.main-container{
  width: 95vw;

}
</style>
