<template>
  <div class="bubbleComponent container">
      <h3>Bubbler</h3>
  <svg width="100%" height="700" >
  </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import endData from "@/utils/data.json";



export default {
  data () {
    return {
      endData,
    }
  },
  methods:{
    plotbubble(){
    let data = this.endData
    let svg = d3.select('svg');
    let focusedNode;
    let centerX = 300;
	  let centerY = 300;
    let datapoints = this.endData
    let width="750",height="700"
    let format = d3.format(',d')
    let pack = d3.pack().size([550,500]).padding(1.5)   
    
    
    let forceCollide = d3.forceCollide(d => d.r + 1)

    let forceX = d3.forceX(width/2).strength(0.05)
    let simulation = d3.forceSimulation()
    .force("x", forceX)
    .force("y", d3.forceY(height/2).strength(0.05))
    .force("collide", forceCollide)
    .force("charge", d3.forceManyBody())

    let root = d3.hierarchy({ children: data })
      .sum(d => d.value)
      
      
    let nodes = pack(root).leaves().map(node => {
			const data = node.data;
			return {
				x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
				y: centerY + (node.y - centerY) * 3,
				r: 0, // for tweening
        radius: node.r,
        image: data.images,
        name: data.name,
        total: data.quotes.total,
        value: data.value
			}
		})
		simulation.nodes(nodes).on('tick', ticked);
    let node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('g')
			.attr('class', 'node')
			.call(d3.drag()
				.on('start', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0.2).restart();
					d.fx = d.x;
					d.fy = d.y;
				})
				.on('drag', (d) => {
					d.fx = d3.event.x;
					d.fy = d3.event.y;
				})
				.on('end', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0);
					d.fx = null;
					d.fy = null;
				}));
  
	node.append('circle')
			.attr('id', d => d.id)
			.attr('r', 0)
      .attr("fill", function (d) {
                return "url(#" + d.name.toLowerCase().replace(/ /g, "-") + ")"})
      .attr('stroke','#353b48')
      .attr('stroke-width', 2)    
			.transition().duration(1000).ease(d3.easeElasticOut)
			.tween('circleIn', (d) => {
					let i = d3.interpolateNumber(0, d.radius);
					return (t) => {
						d.r = i(t);
						simulation.force('collide', forceCollide);
					}
        })
  
    node.append("pattern")
             .attr("id", function (d) {
                return d.name.toLowerCase().replace(/ /g, "-")
            })
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr("preserveAspectRatio", "none")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("xlink:href", function (d) {
                return d.image

            })

             node.on("mouseover", function (d) {
                tooltip.html(
                    '<b>' +  d.name + "</b>" + 
                    "<br/>" +"<p>" + "Viewed by " + d.total + " people" + "</p>"
                     + "<p>" + "Commented by " + d.value + " people" + "</p>")	     
                .style("top", d3.event.pageY + 20 + "px")
                .style("left", d3.event.pageX + 50 + "px")
                .style("opacity", 1);
            })
            node.on("mouseout", function(d){
                   tooltip 
            .style("opacity", 0);

            })

             var tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0)


      node.on('click', (currentNode) => {
			d3.event.stopPropagation();
			console.log('currentNode', currentNode);
			let currentTarget = d3.event.currentTarget; // the <g> el
			if (currentNode === focusedNode) {
				// no focusedNode or same focused node is clicked
				return;
			}
			let lastNode = focusedNode;
			focusedNode = currentNode;
			simulation.alphaTarget(0.2).restart();
		
			if (lastNode) {
				lastNode.fx = null;
				lastNode.fy = null;
				node.filter((d, i) => i === lastNode.index)
					.transition().duration(2000).ease(d3.easePolyOut)
					.tween('circleOut', () => {
						let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
						return (t) => {
							lastNode.r = irl(t);
						}
					})
					.on('interrupt', () => {
						lastNode.r = lastNode.radius;
					});
			}
			// if (!d3.event.active) simulation.alphaTarget(0.5).restart();
			d3.transition().duration(2000).ease(d3.easePolyOut)
				.tween('moveIn', () => {
					console.log('tweenMoveIn', currentNode);
					let ix = d3.interpolateNumber(currentNode.x, centerX);
					let iy = d3.interpolateNumber(currentNode.y, centerY);
					let ir = d3.interpolateNumber(currentNode.r, centerY * 0.4);
					return function (t) {
						// console.log('i', ix(t), iy(t));
						currentNode.fx = ix(t);
						currentNode.fy = iy(t);
						currentNode.r = ir(t);
						simulation.force('collide', forceCollide);
					};
				})
				.on('end', () => {
					simulation.alphaTarget(0);
					let $currentGroup = d3.select(currentTarget);
					$currentGroup.select('.circle-overlay')
						.classed('hidden', false);
					$currentGroup.select('.node-icon')
						.classed('node-icon--faded', true);
				})
				.on('interrupt', () => {
					console.log('move interrupt', currentNode);
					currentNode.fx = null;
					currentNode.fy = null;
					simulation.alphaTarget(0);
        });
        
    })		
    	d3.select(document).on('click', () => {
			let target = d3.event.target;
			// check if click on document but not on the circle overlay
			if (!target.closest('#circle-overlay') && focusedNode) {
				focusedNode.fx = null;
				focusedNode.fy = null;
				simulation.alphaTarget(0.2).restart();
				d3.transition().duration(2000).ease(d3.easePolyOut)
					.tween('moveOut', function () {
						console.log('tweenMoveOut', focusedNode);
						let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
						return function (t) {
							focusedNode.r = ir(t);
							simulation.force('collide', forceCollide);
						};
					})
					.on('end', () => {
						focusedNode = null;
						simulation.alphaTarget(0);
					})
					.on('interrupt', () => {
						simulation.alphaTarget(0);
					});
				// hide all circle-overlay
			
			}
    })
           

		function ticked() {
			node
				.attr('transform', d => `translate(${d.x},${d.y})`)
				.select('circle')
					.attr('r', d => d.r);
		}

   
    }
  },  
  mounted(){
 this.plotbubble()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
circle{
  width: 100%;  
  height: 100%;

}
  .tooltip { 
      background: rgb(252, 248, 248);
      color: #000; 
      border-radius: 5px;
      box-shadow: 2px 2px 7px 2px #888888;
      opacity:0.6;
      font-size: 12px;
      left: 130px;
      padding: 10px;
      position: absolute;
      text-align: center;
      top: 95px;
      width: 220px;
      font-size: 16px;
      cursor:pointer;
    }
    .tooltip p{
      text-align:left;
      padding-left:5px;
    }
    svg{
      left:10px;
      top:5px;
      bottom: 5px;
      position:absolute
    }
</style>

