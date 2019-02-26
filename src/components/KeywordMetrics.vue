<template>
  <div class="keyword-metric">
    <p>Keyword metrics</p>
    <div class="metric-box">
      <div class="metric-box-first">
        <h5>Total Number of Keywords</h5>
        <p class="text-center">{{totalKeywords}}</p>
      </div>
      <div class="metric-country">
        <span> Countries:</span> <span class="px-4 "> {{countryNumber}}</span>
        <div class="country-flag mt-3">
            <img v-for="data in endData[1]" :key="data"  :src="data" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["totalKeywords", "endData"],
  data() {
    return {
      countryNumber: {}

    };
  },
  methods: {
 
    getTotalCountry() {
      let number = this.endData[1].length;
      this.countryNumber = number;
    }
  },
  mounted() { 
    this.getTotalCountry();
    console.log(this.endData[1])
  }
};
</script>

<style scoped>
.keyword-metric {
  display: inline-block;
  margin: 25% auto;
}
.keyword-metric p {
  font-size: 14px;
  color: #565656;
  font-weight: 600;
}
.metric-box-first {
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid rgba(184, 115, 115, 0.15);
}
.metric-box h5,
p {
  font-size: 16px;
  color: #565656;
}
.metric-box {
  border: 1px solid rgba(184, 115, 115, 0.15);
  border-radius: 4px;
}
.metric-country {
  padding: 16px;
}
.metric-country span {
  font-size: 14px;
}
.country-flag{
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 12px;
justify-items: center

}
.country-flag img{
    border:1px solid rgba(133, 117, 117, 0.534);
    height:20px;
    width:20px;
    object-fit: cover;
    object-position: 50%;
    border-radius: 50%
}

</style>
