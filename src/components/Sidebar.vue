<template>
  <div class="sidebarComponent">
  
 <b-list-group class="legend">
   <span class="articlesSpan">Legend</span>
   <b-list-group-item class="legend-item" v-for="(myD,index) in myData" :key="index">
     <b-img  thumbnail fluid :src="myD.images" />
     {{ myD.name}}
     </b-list-group-item>

</b-list-group>
  </div>
</template>

<script>
import * as d3 from 'd3'
import endData from "@/utils/data.json";

export default {
  data () {
    return {
      endData,
      myData: endData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articlesSpan {
  background: #636e72;
  display: block;
  color: white;
  font-size: 30px;
  padding: 5px 0px 10px;
}

.img-thumbnail{
  width:35px;
  height: 35px
}
.legend{
 max-height: 90vh;
 overflow-y: scroll;
}
.legend::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.legend::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

.legend::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color:#636e72;
}
.legend-item{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding:10px 20px
}
</style>
