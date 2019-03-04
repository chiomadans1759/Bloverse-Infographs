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
.active-user-container .user1{
    position: relative;
    top:240px 
}
.active-user-container .user2{
    position: relative;
    right:240px;
    top:20px 
}
.active-user-container .user3{
    position: relative;
    right:160px;
    bottom:270px
}
.active-user-container .user4{
    position: relative;
    bottom:420px
}
.active-user-container .user5{
    position: relative;
    left:160px;
    bottom:440px
}
.active-user-container .user6{
    position: relative;
    left:200px;
    bottom:400px
}
.active-user-container .user7{
    position: relative;
    left:195px;
    bottom:340px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-user-container .active-text7{
    padding-left: 10px
}
.active-user-container .user8{
    position: relative;
    left:110px;
    bottom:320px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-user-container .active-text8{
    padding-left: 10px;
    padding-top: 15px
}
.active-user-container .user9{
    position: relative;
    left:0px;
    bottom:350px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-user-container .active-text9{
    padding-left: 10px;
    padding-top: 25px
}
.active-user-container .user10{
    position: relative;
    border-bottom-right-radius:110px;
    bottom:400px;
    right:100px;
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: center !important
}
.active-user-container .active-text10{
    padding-left: 1px;
    padding-top: 15px
}

.active-user-container .active{
    display: flex;
    align-items: center;
    flex-direction: column;
}
 .active-user-container{
    width:60vw;
    margin:-50px auto 140px;
    height:700px
}
.active-user-container .active-usersa{
    width: 100%;
    height: 80%;
    margin-bottom: 150px;
}
.active-user-container .size{
   border-radius: 50%;
   object-fit: cover;
   object-position: center;
   border: 1px solid rgba(184, 115, 115, 0.15) !important
}
.active-user-container .country10{
 width:25px;
height:25px
}
.active-user-container .country9{
    width:30px;
    height:30px
}
.active-user-container .country8{
    width:44px;
    height:44px
}
.active-user-container .country7{
    width:48px;
    height:48px
}
.active-user-container .country6{
    width:52px;
    height:52px
}
.active-user-container .country5{
    width:58px;
    height:58px
}
.active-user-container .country4{
    width:60px;
    height:60px
}
.active-user-container .country3{
    width: 80px;
    height: 80px;
}
.active-user-container .country2{
    width: 100px;
    height: 100px;
}
.active-user-container .country1{
    width: 200px;
    height: 200px;
}
.active-user-container .country-text{
    font-size: 12px;
    color:#707070;
    font-weight: 600
}
.active-user-container .percentage-text{
    font-size: 12px;
    color: #868686;
}
.active-user-container .active-text-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px
}
</style>
