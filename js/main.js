d3.csv('data/cities_and_population.csv')
.then(data => {
    console.log('Data loading complete. Work with dataset.');
    const filteredCities = data.filter(city => city.eu === "true");
    const count = filteredCities.length;

    d3.select('body')
	.append('p')
	.text(`There are ${count} cities.`);

    filteredCities.forEach(city => {
        city.population = +city.population;
        city.x = +city.x;
        city.y = +city.y;
    });

    console.log(filteredCities);

    const svg = d3.select('body').append('svg')
    .attr('width', 750)
    .attr('height', 550);

    svg.selectAll('circle')
    .data(filteredCities)
    .enter()
    .append('circle')
    .attr('r', d => {
        if (d.population < 1000000){
            return 4;
        } else {
            return 8;
        }
    })
    .attr('fill', 'blue')
    .attr('stroke', 'black')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)

    svg.selectAll('city-label')
    .data(filteredCities)
    .enter()
    .append('text')
    .text(d => d.city)
    .attr('opacity', d => {
        if (d.population < 1000000) {
            return 0;
        } else {
            return 100;
        }
    })
    .attr('x', d => d.x)
    .attr('y', d => d.y)

})
.catch(error => {
    console.error('Error loading the data');
});

console.log('Do something else, without the data');