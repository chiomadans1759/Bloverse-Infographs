<template>
  <div class="performance pt-5">
    <div class="container ">
      <h2>Bloverse in Numbers</h2>
      <h4>Take a look at our numbers from launch</h4>
      <div class="main-container">
        <div class="performance-container">
          <div class="legend">
            <div class="legend-body">
              <span class="circle blue"></span> <span class="users">Total Users</span>
            </div>
            <div class="legend-body">
              <span class="circle purple"></span> <span class="users">Number of Articles</span>
            </div>
            <div class="legend-body">
              <span class="circle green"></span> <span class="users">User Engagement</span>
            </div>
            <div class="dropdown">
              <b-dropdown
                class="bax"
                id="ddown1"
                text="2019"
                size="sm"
                variant="bax"
              >
                <b-dropdown-item>2019</b-dropdown-item>
                <b-dropdown-item>2018</b-dropdown-item>
                <b-dropdown-item>2017</b-dropdown-item>
                <b-dropdown-item>2016</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <performance-graph class="perf-area"></performance-graph>
        </div>
        <div class="number-container">
          <Numbers />
        </div>
      </div>
    </div>
    <div class="container active">
      <p class="user-text mt-5">Active Users</p>
      <ActiveUser />
    </div>
  </div>
</template>

<script>
import ActiveUser from "@/components/ActiveUser";
import PerformanceGraph from "@/components/PerformanceGraph";
import Numbers from "@/components/Numbers";

export default {
  components: {
    PerformanceGraph,
    Numbers,
    ActiveUser
  }
};
</script>

<style scoped>
.performance .main-container {
  display: flex;
}
.performance .performance-container {
  flex: 2.5;
}
.performance .number-container {
  flex: 1;
}
.performance {
  background-color: #fdfdfd;
}
.performance .container h2 {
  font-size: 24px;
}
.performance .container h4 {
  font-size: 14px;
  color: #868686;
}
.performance .legend {
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
}
.performance .circle {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
}
.performance .blue {
  background-color: #096dd9;
}
.performance .purple {
  background-color: #a74ef4;
}
.performance .green {
  background-color: #4ef49b;
}
.performance .users {
  font-size: 12px;
  color: #565656;
  padding-left: 8px;
}
.performance .legend-body {
  display: flex;
  height: 20px;
  align-items: center;
}
.performance .bax {
  background: #fff !important;
  color: #252525 !important;
  border: 1px solid rgba(184, 115, 115, 0.15) !important;
  border-radius: 4px;
}
.performance .perf-area {
  width: 90%;
}
.performance .user-text{
  font-size: 16px;
  font-weight: 600;
  text-align: center
}
</style>
<style>
.btn-sm {
  font-size: 12px !important;
}
</style>



