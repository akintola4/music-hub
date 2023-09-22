const ctx2 = document.getElementById('myChart-2');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Spotify", "Apple Music", "Youtube", "Deezer", "SoundCloud"],
        datasets: [{
            label: 'This month',
            data: [10000000, 15000000, 10000000, 15000000, 1000000],
           // borderWidth: 2,
            //borderColor: '#fff',
           backgroundColor:[
            'green','#fff',
            'red','orange','black'
           ], hoverOffset: 10,
            color:'#fff',
            tension: 0.3,
        }]
    },
});