function myChart1() {
    if (myChart instanceof Chart) {
        myChart.destroy();
    }
    myChart = new Chart(
        document.getElementById('myChart'), {
            type: 'line',
            data: {
                labels: arrayMeses,
                datasets: [{
                    label: 'Media salarial anual',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: arraySalarios,
                }]
            },
            options: {}
        }
    );

}