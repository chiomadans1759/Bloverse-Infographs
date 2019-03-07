<template>
	<section>
		<div id="heat-map" class="container">
			<div class="row heading">
				<p>HeatMap<br>
					<span>Take a look at how our global community interacts</span>
				</p>
			</div> 
      <div class="row">
        <div class="col-9 geochart"> 
          <GChart type="GeoChart" :data="chartData" :options="chartOptions" ref="chartData"/>
          <div class=" row justify-content-end mr-1 total-users">
            <div class="card col-3 py-2">
              <div class="row pl-2">
                <div class="text-left br-5">Total Users:</div>
                <div class="text-right font-weight-bold total ml-3">5,000,350</div>
              </div>
            </div> 
          </div> 
        </div>
        <div class="col-3 mt-4">
          <p class="country-metrics mb-4">Country Metrics</p>
          <div class="d-flex align-items-center br-5 font-weight-bold mb-2">
            <span class="second-circle fas fa-circle mr-3"></span> 
            <div class="dropdown select border d-flex justify-content-end">
              <b-dropdown
                class="bax "
                id="ddown"
                text="Nigeria"
                size="sm"
                variant="bax">
                <b-dropdown-item>Nigeria</b-dropdown-item>
                <b-dropdown-item>Australia</b-dropdown-item>
                <b-dropdown-item>UK</b-dropdown-item>
                <b-dropdown-item>Ghana</b-dropdown-item>
              </b-dropdown>
            </div> 
          </div>
          <div class="card">
            <div class="border-bottom mt-3">
              <div class="d-flex">
                <div class="col-8 title">Consumers:</div>
                <div class="col-4 value">219K</div>
              </div>
              <div class="d-flex mt-2 mb-3">
                <div class="col-8 br-5 title">Creators:</div>
                <div class="col-4 value">416K</div>
              </div>               
            </div> 
            <div class="border-bottom mt-3">
              <div class="d-flex">
                <div class="col-8 title">Total Articles:</div>
                <div class="col-4 value">500K</div>
              </div>
              <div class="d-flex mt-2 mb-2">
                <div class="col-8 br-5 title">Total Views:</div>
                <div class="col-4 value">786K</div>
              </div> 
              <div class="d-flex mb-3">
                <div class="col-8 br-5 title">Total Comments:</div>
                <div class="col-4 value">316K</div>
              </div>               
            </div> 
            <div class="border-bottom mt-3">
              <div class="d-flex">
                <div class="col-8 title">Total Shares:</div>
                <div class="col-4 value">500K</div>
              </div>
              <div class="d-flex ml-3 my-3">
                <div class="social-shares"> 
                  <i class="fab fa-facebook-square"></i>
                  <span class="ml-2">2.3K</span>
                </div>
                <div class="social-shares ml-2"> 
                  <i class="fab fa-twitter"></i>
                  <span class="ml-2">600</span>
                </div>
                <div class="social-shares ml-2"> 
                  <i class="fab fa-linkedin"></i>
                  <span class="ml-2">470</span>
                </div>
              </div>               
            </div> 
            <div class="text-center mt-3">
              <p class="title">User Engagement Rate <br><span class="value">98.3%</span></p>
            </div>
          </div>
        </div>
      </div> 
      <div class="row mt-3 col-lg-8 col-xl-8 color-scale">  
        <div class="">
          <span class="first-circle fas fa-circle"></span> UK
          <span class="second-circle fas fa-circle ml-4"></span> Kenya
          <span class="third-circle fas fa-circle ml-4"></span> USA
          <span class="fourth-circle fas fa-circle ml-4"></span> Australia              
          <span class="fifth-circle fas fa-circle ml-4"></span> China
          <span class="sixth-circle fas fa-circle ml-4"></span> Nigeria
        </div>    
      </div> 
		</div> 
	</section>
</template> 

<style scoped> 
#heat-map .heading p{
  font-size:24px;
  color:#252525;
}

#heat-map .heading span{
  font-size:14px;
  color:#868686;
}

#heat-map .first-circle {
  color: #759BC4;
}

#heat-map .second-circle {
  color: #6895C6;
}

#heat-map .third-circle {
  color:#3781D0;
}

#heat-map .geochart{
  margin-left:-20px;
}

#heat-map .color-scale{
  margin-left:-30px;
}

#heat-map .fourth-circle {
  color: #2579D4;
}

#heat-map .fifth-circle {
  color: #096DD9;
}

#heat-map .sixth-circle {
  color:#096DD9;
}

#heat-map .total-users{
  margin-top:-45px;
  color:#252525; 
}

#heat-map .country-metrics{
  color:#565656;
  font-size:16px;
  font-weight:bold;
}

#heat-map .select {  
  font-size:12px;
  margin:0; 
  border-radius:5px; 
} 

#heat-map .title{
  color:#565656;
  font-size:  14px;
  font-weight:500;
}

#heat-map .value{
  color:#252525;
  font-size:14px;
  font-weight:600;
}

#heat-map .social-shares{
  width:auto;
  padding:7px;
  border:1px solid #ccc;
  border-radius:4px;
  font-size:12px;
  font-weight:600;
  color:#565656;
  display:flex;
  align-items:center;
}

#heat-map .social-shares i{
  font-size:18px; 
} 

#heat-map .fa-facebook-square{
  color:#3B5998;
}

#heat-map .fa-linkedin{
  color:#0077B5;
}

#heat-map .fa-twitter{
  color:#38A1F3;
}

#heat-map .fa-circle{
  font-size:14px;
}

</style>

<script> 
import { GChart } from 'vue-google-charts'
 
export default {
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ["Country", "Users", "Views"],
        ["United Kingdom", 780, 6600],
        ["Kenya", 500, 1500],
        ["United States", 600, 9400],
        ["Nigeria", 600, 8000],
        ["Australia", 10500, 11000],
        ["China", 600, 8900]
      ],
      chartOptions: { 
        datalessRegionColor: '#B7B7B7',  
        colorAxis: { colors: ["#759BC4", "#096DD9"]},
        keepAspectRatio: true, 
        tooltip: {
          textStyle: {
            color: '#868686', 
            cornerRadius: "5px",
            fontSize:12
          }
        },
      }, 
      selectedDate: {
        start: null,
        end: null
      }
    };
  }
}
</script>