const ctx = document.getElementById('lineChart').getContext('2d');
let delayed


// Gradient:
let gradient = ctx.createLinearGradient(0,0,-100,500);
gradient.addColorStop(0, 'rgba(9, 92, 120, 1');
gradient.addColorStop(1, 'rgba(40, 180, 194, 0.3');

const labels = [
    '900',
    '1000',
    '1200',
    '1400',
    '1600',
    '1800',
    '2000'
]

const data = {
        labels, 
        datasets: [{
            data: [9.4, 9.1, 9.3 , 8.7, 8.9, 8.1, 8.0, 7.2],
            label: 'pH level in the last 1100 years',
            fill: true,
            backgroundColor: gradient,
            borderColor: '#8f6249',
            pointBackgroundColor: '#8f6249',
            tension: 0,
        },
    ],
}

const config = {
    type: 'line',
    data: data, 
    options: {
        radius: 5,
        hitRadius: 30,
        responsive: true,
    },
}

const myChart = new Chart(ctx, config)
