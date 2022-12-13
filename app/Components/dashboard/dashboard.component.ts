import { Component, OnInit } from '@angular/core';
import { BarChart, LineChart, PieChart } from 'chartist';
import { stat } from 'src/app/models/statModel';
import { ContratServiceService } from 'src/app/service/contrat-service.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartRef: any;
  oneToOne = true;
  updateFlag: any






 specialites:any
 nums:any

   options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
   dataDailySalesChart: any = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  optionsDailySalesChart: any = {
    lineSmooth:10,
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
}


  data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  }

  
  constructor(private serviceContrat:ContratServiceService) {
    
   }
   chartOptions: Highcharts.Options = {
    xAxis: {
    type: 'category'
  },
  series: [
    {
      type: 'line'
    }
  ]
};
 
  startAnimationForLineChart(chart:any){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data:any) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: chart.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};
startAnimationForBarChart(chart:any){
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data:any) {
      if(data.type === 'bar'){
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
      }
    });

    seq2 = 0;
};

  ngOnInit(): void {
    
    this.serviceContrat.stat().subscribe((d:any)=>{
      const chartData = [];
      for (let key in d) {
        chartData.push([key, d[key]]);
      }

      this.chartOptions.series = [
        {
          type: 'column',
          data: chartData,
        },
      ];
          this.updateFlag = true;
    
    })
    var dailySalesChart = new LineChart('#dailySalesChart', this.dataDailySalesChart, this.optionsDailySalesChart);
    this.startAnimationForLineChart(dailySalesChart);



    const dataCompletedTasksChart: any = {
      labels: this.specialites,
      series: [
        this.nums
      ]
  };

 const optionsCompletedTasksChart: any = {
      lineSmooth: 10,
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
  }

  var completedTasksChart = new BarChart('#completedTasksChart', dataCompletedTasksChart);

  // start animation for the Completed Tasks Chart - Line Chart
  this.startAnimationForBarChart(completedTasksChart);
  
  }

}
