

<script>
import {Line} from 'vue-chartjs'

export default {

  extends: Line,
  data(){
      return{
      gradient: null,
      gradient2: null,
      gradient3: null
      }
  },
   mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(9, 109, 217, 1)')
    this.gradient2.addColorStop(0, 'rgba(167, 78, 244, 1)')
    this.gradient3.addColorStop(0, 'rgba(78, 244, 155, 1)')
    this.renderChart({
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
      datasets: [
        {
          label: 'Total Users',
          borderColor: '#096DD9',
          pointBackgroundColor: '#096DD9',
          borderWidth: 2,
          pointBorderColor: '#096DD9',
        backgroundColor: 'transparent',
          
          data: [600, 440, 710, 650, 1200, 753, 1050, 1040, 1920, 2120, 2234, 2624]
        },{
          label: 'Number of Articles',
          borderColor: '#A74EF4',
          pointBackgroundColor: '#A74EF4',
          pointBorderColor: '#A74EF4',
          borderWidth: 2,
           backgroundColor: 'transparent',
        
          data: [320, 498, 1268, 510, 928, 1220, 1479, 188, 1337, 2011, 2290, 2344]
        },
        {
          label: 'User Engagements',
          borderColor: '#4EF49B',
          pointBackgroundColor: '#4EF49B',
          pointBorderColor: '#4EF49B',
          borderWidth: 2,
           backgroundColor: 'transparent',
          
          data: [402, 660, 300, 990, 1232, 1607, 1689, 1852, 2004, 2197, 2547, 2412]
        }
      ],
      
    }, {onClick:function(i,e){
if (e.active.length > 0) {
    const chart = e.active[0]._chart;
    const activePoints = chart.getElementAtEvent(e.event);
    if ( activePoints.length > 0) {
      const clickedElementIndex = activePoints[0]._index;
      const label = chart.data.labels[clickedElementIndex];
      const value = chart.data.datasets[0].data[clickedElementIndex];
    }
  }
    }  ,legend:{display:false, labels:{usePointStyle:true,fontSize:12}},scales:{xAxes:[{gridLines: {display:false}}]},responsive: true, maintainAspectRatio: false})

  }
}
</script>




