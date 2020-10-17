import axios from 'axios';
import {Chart} from 'chart.js';
import React, { useEffect } from 'react';   




function ChartJS() {
    
        var data = {
            datasets : [
                {
                    data : [],
                    backgroundColor:[
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#36a2eb',
                        '#ffcd56',
                        '#ff6384',
                    ],
                }
           ],
            labels: []
        };
        function createChart()
        {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
        });
        }


        useEffect(() => {
        axios.get("http://localhost:3002/budget").then(function (res) {
            console.log(res.data); 
          for (var i = 0; i < res.data.adityabudget.length; i++) {
            data.datasets[0].data[i] = res.data.adityabudget[i].budget;
            data.labels[i] = res.data.adityabudget[i].title;
          }
          createChart();
        });
        })
        
        return ( 
            <div></div>  
    );
  }
  
  export default ChartJS;

