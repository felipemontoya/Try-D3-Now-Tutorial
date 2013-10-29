var dataset = [],
    tmpDataset = [],
    i, j,
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


dataset = [];
for (i = 0; i < 5; i++) {
    for (j = 0, tmpDataset = []; j < 3; j++) {
        tmpDataset.push("Row:"+i+",Col:"+j);
    }
    dataset.push(tmpDataset);
}

d3.select("#viz-2")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")
    
    .selectAll("tr")
    .data(dataset)
    .enter().append("tr")
    
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "10px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")}) 
    .on("mouseout", function(){d3.select(this).style("background-color", "white")}) 
    .text(function(d){return d;})
    .style("font-size", "12px");


d3.text("auto_mpg_tmp.csv", function(datasetText) {

var parsedCSV = d3.csv.parseRows(datasetText);

var sampleHTML = d3.select("#viz-3")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")

    .selectAll("tr")
    .data(parsedCSV)
    .enter().append("tr")

    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "5px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
    .on("mouseout", function(){d3.select(this).style("background-color", "white")})
    .text(function(d){return d;})
    .style("font-size", "12px");
});    