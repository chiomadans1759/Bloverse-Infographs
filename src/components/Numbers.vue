<template>
  <div class="container number-metric">
    <p class="metric-head">Metrics</p>
    <div class="metric-container">
      <div class="metric-container-first">
        <div class="circle"></div> <span>July</span> <span>2019</span>
      </div>
      <div class="metric-container-second">
        <div class="first">
          <h5>Total Content Consumers</h5>
          <span class="middle-num">250000</span>
        </div>
        <hr>
        <div class="second">
          <h5>Total Content Creators</h5>
          <span class="middle-num">97800</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.number-metric {
  margin: 25% auto;
}
.circle {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #096dd9;
}
.metric-container-first span {
  border: 1px solid rgba(184, 115, 115, 0.15) !important;
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 12px;
}
.metric-container-first {
  display: flex;
  align-items: center;
  width: 39%;
  justify-content: space-between;
  margin-bottom: 10px;
}
.metric-container-second {
  border: 1px solid rgba(184, 115, 115, 0.15) !important;
  border-radius: 4px;
  display: inline-block;
}
.metric-container-second h5 {
  font-size: 14px;
}
.metric-container-second span {
  font-size: 14px;
  font-weight: 600;
}
.first {
  padding: 16px 16px 0;
}
.second {
  padding: 0 16px 16px;
}
.middle-num {
  text-align: center;
  display: flex;
  justify-content: center;
}
.metric-head {
  color: #565656;
  font-weight: 600;
}
</style>
