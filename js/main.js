d3.select("body").append("p").text("Hello World!");

const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];

const svg = d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500);

svg.selectAll('circle')
    .data(sandwiches)
    .enter()
    .append('circle')
    .attr('r', d => {
        if (d.size === 'small'){
            return 5;
        } else {
            return 10;
        }
    })
    .attr('fill', d => {
        if (d.price < 7) {
            return 'red';
        } else {
            return 'blue';
        }
    })
    .attr('cy', 20)
    .attr('cx', (d, index) => (index * 50) + 10);