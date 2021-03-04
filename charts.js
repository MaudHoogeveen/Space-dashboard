//chart over de afstand in tijd 

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['50', '150', '250', '350', '450', '550'],
        datasets: [{
            label: 'afstand in km x 1000',
            borderColor: 'rgb(234, 164, 86)',
            data: [20.000, 35.000, 40.000, 50.000, 55.000, 60.000]

        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: '#fff',
                zeroLineColor: 'rgba(0, 0, 0, 0.25)',
                
            }

        
           

        },
        scales: {
            xAxes: [{
              gridLines: {
                color: "#242A3D"
            },
            ticks: {
                fontFamily: "'Avenir', sans-serif",
                fontSize: 14,
                fontStyle: "medium",
                fontColor: "white"
            }
        }],
        yAxes: [{
          gridLines: {
            color: "#242A3D",
            zeroLineWidth: 3,
        },
        ticks: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            fontStyle: "medium",
            fontColor: "withe"
        }
    }]
}
}
});

//chart over de voorraad van het eten 
var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Appels', 'Peren', 'Maïs', 'Soep', 'Brood', 'Havermout', 'Chocolade'],
        datasets: [{
            label: 'aantal stuks',
            backgroundColor: 'rgb(156, 131, 245)', 
            //borderColor: 'rgb(255, 99, 132)',
            data: [40, 23, 34, 15, 52, 28, 8]
            
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: '#fff',
                zeroLineColor: 'rgba(0, 0, 0, 0.25)',
            }

        },
        scales: {
            xAxes: [{
              gridLines: {
                color: "#242A3D"
            },
            ticks: {
                fontFamily: "'Avenir', sans-serif",
                fontSize: 14,
                fontStyle: "medium",
                fontColor: "white"
            }
        }],
        yAxes: [{
          gridLines: {
            color: "#242A3D",
            zeroLineWidth: 3,
        },
        ticks: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            fontStyle: "medium",
            fontColor: "withe"
        }
    }]
}
}
});



var ctx = document.getElementById('myChart2').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {
       labels: ['Minderjarig', 'Tussen 18-25 jaar', 'Tussen 26-50 jaar', '50plus'],
        datasets: [{
            label: 'leeftijd van de passagiers',
            backgroundColor: ['#F49062', '#F556A2', '#F4B22D', '#9C83F5'], 
            borderColor: '#393D51',
            data: [10, 35, 50, 8]
        }]
    },

   

    // Configuration options go here
    options: {
      legend: {
          display: true,
          labels: {
            fontColor: '#fff',


          }
      },
      
      ticks:{
          backgroundColor: "'#fff, #F556A2, #90C3F6, #EAA456 ", 
      }
    }
});

