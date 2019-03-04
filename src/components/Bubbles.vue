<template>
<div class="bubble">
  <svg width="100%" height="650"></svg>
</div>
</template>

<script>
import * as d3 from 'd3'

export default {
    props: ["endData"],
data(){
    return{
        node:null,
        simulation:null,
        totalKeywords:null
    }
},
methods:{
    plotbubble(){  
     let data = this.endData[0]
     let svg = d3.select('svg');
     let focusedNode;
     let centerX = 300;
     let centerY = 300;
     let datapoint = this.endData[0]
     let width = "650", height = "650"
     let pack = d3.pack().size([480,480]).padding(1.2)  
     let forceCollide = d3.forceCollide(d => d.r + 1.5)
     let forceX = d3.forceX(width/1.8).strength(0.05)
     let forceY = d3.forceY(height/2.4).strength(0.05)
     let vm = this
     vm.simulation = d3.forceSimulation()
        .force("x", forceX)
        .force("y", forceY)
        .force("collide", forceCollide)
        .force("charge", d3.forceManyBody())

     let root = d3.hierarchy({ children: data })
        .sum(d => d.value)

    let nodes = pack(root).leaves().map(node => {
        const data = node.data;
        return {
            x: centerX + (node.x - centerX) * 2, 
            y: centerY + (node.y - centerY) * 2,
            r: 0,
    radius: node.r,
    image: data.images,
    name: data.name,
    total: data.quotes.total,
    value: data.value,
    data: data
        }
    })
    vm.simulation.nodes(nodes).on('tick', ticked);
    vm.node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('g')
    .attr('class', 'node')
    .call(d3.drag()
        .on('start', (d) => {
            if (!d3.event.active) vm.simulation.alphaTarget(0.2).restart();
            d.fx = d.x;
            d.fy = d.y;
        })
        .on('drag', (d) => {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        })
        .on('end', (d) => {
            if (!d3.event.active) vm.simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }));
        vm.node.append('circle')
			.attr('id', d => d.id)
			.attr('r', 0)
            .attr("fill", function (d) {
                        return "url(#" + d.name.toLowerCase().replace(/ /g, "-") + ")"})
            .attr('stroke','#D1D1D1')
            .attr('stroke-width', 1)    
            .transition().duration(1000).ease(d3.easeElasticOut)
            .tween('circleIn', (d) => {
                    let i = d3.interpolateNumber(0, d.radius);
                    return (t) => {
                        d.r = i(t);
                        vm.simulation.force('collide', forceCollide);
                    }
            })

        function ticked() {
         vm.node
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .select('circle')
        .attr('r', d => d.r);
		}       
},
    appendPicture(){
        let vm = this
         vm.node.append("pattern")
             .attr("id", function (d) {
                return d.name.toLowerCase().replace(/ /g, "-")
            })
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr("viewBox", "0 0 60 55")
            .attr("preserveAspectRatio", "xMidYMin slice")
            .attr("xlink:href", function (d) {
                return d.image
            })
    },
    appendtooltip(){
        let vm = this
        let tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .attr("id", "main-tool")
            .style("opacity", 0)

        vm.node.on("mouseover", function (d) {
                tooltip.html(
                    '<p>' +  "Keyword:  " + " " + d.name + "</p>" + 
                    "<p>" + "Used  " + "<b>" + d.total + "</b>" + " times" + "</p>")	     
                .style("top", d3.event.pageY + -30 + "px")
                .style("left", d3.event.pageX + 50 + "px")
                .style("opacity", 1);
            })
        vm.node.on("mouseout", function(d){
                   tooltip 
            .style("opacity", 0);

            })
    },
    clickToEnlarge(){
        let vm = this
        let focusedNode
         vm.node.on('click', (currentNode) => {
			d3.event.stopPropagation();
			let currentTarget = d3.event.currentTarget; 
			if (currentNode === focusedNode) {
				return;
			}
			let lastNode = focusedNode;
			focusedNode = currentNode;
			vm.simulation.alphaTarget(0.2).restart();
		
			if (lastNode) {
				lastNode.fx = null;
				lastNode.fy = null;
				vm.node.filter((d, i) => i === lastNode.index)
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
			d3.transition().duration(2000).ease(d3.easePolyOut)
				.tween('moveIn', () => {
					let ix = d3.interpolateNumber(currentNode.x, 200);
					let iy = d3.interpolateNumber(currentNode.y, 200);
					let ir = d3.interpolateNumber(currentNode.r, 200 * 0.4);
					return function (t) {
						//tNode.fx = ix(t);
						currentNode.fy = iy(t);
						currentNode.r = ir(t);
						vm.simulation.force('collide', d3.forceCollide(d => d.r + .5));
					};
				})
				.on('end', () => {
					vm.simulation.alphaTarget(0);
					let $currentGroup = d3.select(currentTarget);
					$currentGroup.select('.circle-overlay')
						.classed('hidden', false);
					$currentGroup.select('.node-icon')
						.classed('node-icon--faded', true);
				})
				.on('interrupt', () => {
									currentNode.fx = null;
					currentNode.fy = null;
					vm.simulation.alphaTarget(0);
        });
        
        })
        	d3.select(document).on('click', () => {
			let target = d3.event.target;
			if (!target.closest('#circle-overlay') && focusedNode) {
				focusedNode.fx = null;
				focusedNode.fy = null;
				vm.simulation.alphaTarget(0.2).restart();
				d3.transition().duration(2000).ease(d3.easePolyOut)
					.tween('moveOut', function () {
									let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
						return function (t) {
							focusedNode.r = ir(t);
							vm.simulation.force('collide',  d3.forceCollide(d => d.r + .5));
						};
					})
					.on('end', () => {
						focusedNode = null;
						vm.simulation.alphaTarget(0);
					})
					.on('interrupt', () => {
						vm.simulation.alphaTarget(0);
					});	
			}
    })
    }, 
     sendData(){
        let vm = this
        this.node.on('dblclick', function(d){
            console.log(d)
        })
    }
},
mounted(){
this.plotbubble()
this.appendPicture()
this.appendtooltip()
this.clickToEnlarge()
this.sendData()
}
}
</script>

<style>
.tooltip{
background-color:white;
border:.5px solid rgba(184, 115, 115, 0.15);
padding:8px 20px;
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor: pointer;
}
.tooltip p{
    margin:0;
    padding: 0;
    font-size: 12px;
    color:#868686;
}
</style>
