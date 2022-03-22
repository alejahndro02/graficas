import { Component, 
         OnInit          } from '@angular/core';
import { ChartData, 
         ChartType       } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  divGrafica: boolean = false
  // Doughnut
  public doughnutChartLabels: string[] = [  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ ],
        backgroundColor:[] 
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {

    /*this.graficaService.getDataUserSocial().subscribe( data =>{
      // Se crea el objeto data que sera mostrado en elhtml
    this.doughnutChartData={
      labels:Object.keys(data),
      datasets:[
        {
          data:Object.values(data),
          backgroundColor:['#2534B8','#334984','#97E5EA','#ED845F','#82B86C'] 
        }
      ]
    }*/
    this.graficaService.getDataResultUserSocial()
    .subscribe( ({labels, values}) => {
      
      this.doughnutChartData
          .labels = labels  

      this.doughnutChartData
          .datasets[0].data = values

      this.doughnutChartData.datasets[0]
          .backgroundColor = ['#2534B8','#334984','#97E5EA','#ED845F','#82B86C'] 

    })
  }

}
