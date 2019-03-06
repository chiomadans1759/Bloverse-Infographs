<template>
	<section>
		<div id="popular" class="container mt-5 pt-3">
			<div class="d-flex ml-4 pl-2">
				<p>Popular<br>
					<span>Take a look at how our global community interacts</span>
				</p>
			</div> 
			<div id="regions_div" style="width: 900px; height: 500px;"></div>
		</div> 
	</section>
</template> 

<style scoped> 
 
</style>

<script> 
export default{    
} 
 google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popula', 'Users'],
          ['Germany', 200, 500],
          ['United States', 300, 800],
          ['Brazil', 400, 700],
          ['Canada', 500, 300],
          ['France', 600, 200],
          ['RU', 700, 50]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
</script>