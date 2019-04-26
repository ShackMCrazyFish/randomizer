"use strict";

document.addEventListener("DOMContentLoaded", function() {
    
    let getRandom = (min, max) => Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) ) + parseInt(min);

    let genBtn = document.getElementById("genBtn");
    genBtn.addEventListener("click", randoming);

    function randoming() {
        let x1 = document.getElementById("x1").value,
            y1 = document.getElementById("y1").value,
            x2 = document.getElementById("x2").value,
            y2 = document.getElementById("y2").value,
            x3 = document.getElementById("x3").value,
            y3 = document.getElementById("y3").value,
            x4 = document.getElementById("x4").value,
            y4 = document.getElementById("y4").value;
        
        let first = getRandom(x1, y1);
        let second = first + getRandom(x2, y2);
        let third = second + getRandom(x3, y3);
        let fourth = third + getRandom(x4, y4);
        
        result.innerHTML = first + " " + second + " " + third + " " + fourth;
        drawChart(first, second, third, fourth);
    }

    google.charts.load('current', {
        'packages': ['corechart']
    });
    
    function drawChart(first, second, third, fourth) {
        var data = google.visualization.arrayToDataTable([
            ['Index', 'Value'],
            ['1', first],
            ['2', second],
            ['3', third],
            ['4', fourth]
        ]);
    
        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: {
                position: 'bottom'
            }
        };
    
        var chart = new google.visualization.LineChart(document.getElementById('chart'));
    
        chart.draw(data, options);
    }

})


