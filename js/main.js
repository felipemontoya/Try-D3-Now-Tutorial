var dataset = [],
    i = 0,
    max = 5;
    
for(i=0; i<max; i++){
    dataset.push(Math.round(Math.random()*100));
}        

var sampleSVG = d3.select("#viz")
    .append("svg")
    .attr("width", 80*max)
    .attr("height", 100);
    
sampleSVG.selectAll("circle")
    .data(dataset)
    .enter().append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", function(d, i){return i*80+40})
    .attr("cy", 50)
    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
    .on("mouseout", function(){d3.select(this).style("fill", "white");})
    .on("mousedown", animateFirstStep);

function animateFirstStep(){
    d3.select(this)
      .transition()
        .delay(0)
        .duration(1000)
        .attr("r", 10)
        .each("end", animateSecondStep);
};

function animateSecondStep(){
    d3.select(this)
      .transition()
        .duration(1000)
        .attr("r", 40);
};