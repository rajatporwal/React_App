import $ from 'jquery';
import Highcharts from 'highcharts';

$(document).ready(function(){
    
    var charts = [],
    $containers = $('#trellis td'),
    datasets = [{
        name: 'Erik',
        data: [3, 6, 1, 2, 6]},
    {
        name: 'Gert',
        data: [5, 6, 4, 2, 1]},
    {
        name: 'Helge',
        data: [2, 6, 5, 2, 3]},
    {
        name: 'Torstein',
        data: [5, 2, 7, 4, 2]}];

    $.each(datasets, function(i, dataset) {
        charts.push(new Highcharts.Chart({
    
            chart: {
                renderTo: $containers[i],
                type: 'bar',
                marginLeft: i === 0 ? 100 : 10
            },
    
            title: {
                text: dataset.name,
                align: 'left',
                x: i === 0 ? 90 : 0
            },
    
            credits: {
                enabled: false
            },
    
            xAxis: {
                categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Carrots'],
                labels: {
                    enabled: i === 0
                }
            },
    
            yAxis: {
                allowDecimals: false,
                title: {
                    text: null
                },
                min: 0,
                max: 10
            },
    
    
            legend: {
                enabled: false
            },
    
            series: [dataset]
    
        }));
    });
});   
