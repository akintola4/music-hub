        const ctx = document.getElementById('myChart-1');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: 'This month',
                    data: [100000, 150000, 100000, 150000, 100000, 120000, 220342, 100000, 150000, 100000, 150000, 100000],
                   // borderWidth: 2,
                    //borderColor: '#fff',
                   backgroundColor:'#000',
                    color:'#fff',
                    tension: 0.3,
                }]
            },
            options: {
                responsive: true,
                scaleFontColor: "#FFFFFF",
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            borderColor: "#fff",
                            lineWidth: 0
                        }

                    },
                    x: {
                        beginAtZero: true,
                        grid: {
                            borderColor: "#fff",
                            lineWidth: 0,
                        }

                    }
                }
            }
        });