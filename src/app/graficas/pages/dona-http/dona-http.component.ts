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
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Pelotas', 'Sonajas', 'Disfraces' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor:['#2534B8','#334984','#97E5EA'] 
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    this.graficaService.getDataUserSocial().subscribe(data =>console.log(data))
  }

}
