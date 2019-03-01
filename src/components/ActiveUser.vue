<template>
<div class="active-user-container">
<div class="active-usersa">
    <div v-for="(user,index) in endData2" :class="`user${index + 1}`" :key="index" class="active">
        <div :class="`active-text-container active-text${index+1}`">
       <span :class="`country-text count${index+1}`">{{user.country}}</span>  
       <span :class="`percentage-text number${index+1}`">{{user.percentage}}</span>
        </div>
        <img :class="`country${index + 1} size`" :src="user.images" alt="">
    </div>
</div>
    </div>
</template>

<script>
import endData2 from "@/utils/data2.json";

export default {
data(){
    return{
        endData2, 
    }
},

}

</script>

<style scoped>
.user1{
    position: relative;
    top:240px 
}
.user2{
    position: relative;
    right:240px;
    top:20px 
}
.user3{
    position: relative;
    right:160px;
    bottom:270px
}
.user4{
    position: relative;
    bottom:420px
}
.user5{
    position: relative;
    left:160px;
    bottom:440px
}
.user6{
    position: relative;
    left:200px;
    bottom:400px
}
.user7{
    position: relative;
    left:195px;
    bottom:340px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-text7{
    padding-left: 10px
}
.user8{
    position: relative;
    left:110px;
    bottom:320px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-text8{
    padding-left: 10px;
    padding-top: 15px
}
.user9{
    position: relative;
    left:0px;
    bottom:350px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-text9{
    padding-left: 10px;
    padding-top: 25px
}
.user10{
    position: relative;
    border-bottom-right-radius:110px;
    bottom:400px;
    right:100px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-text10{
    padding-left: 1px;
    padding-top: 15px
}

.active{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.active-user-container{
    width:60vw;
    margin:-50px auto 140px;
    height:700px
}
.active-usersa{
    width: 100%;
    height: 80%;
    margin-bottom: 150px;
}
.size{
   border-radius: 50%;
   object-fit: cover;
   object-position: center;
   border: 1px solid rgba(184, 115, 115, 0.15) !important
}
.country10{
 width:25px;
height:25px
}
.country9{
    width:30px;
    height:30px
}
.country8{
    width:44px;
    height:44px
}
.country7{
    width:48px;
    height:48px
}
.country6{
    width:52px;
    height:52px
}
.country5{
    width:58px;
    height:58px
}
.country4{
    width:60px;
    height:60px
}
.country3{
    width: 80px;
    height: 80px;
}
.country2{
    width: 100px;
    height: 100px;
}
.country1{
    width: 200px;
    height: 200px;
}
.country-text{
    font-size: 12px;
    color:#707070;
    font-weight: 600
}
.percentage-text{
    font-size: 12px;
    color: #868686;
}
.active-text-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px
}
</style>
