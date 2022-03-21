import { Component, 
         Input, 
         OnInit, 
         ViewChild          } from '@angular/core';
import { ChartConfiguration, 
         ChartData, 
         ChartType          } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @Input() horizontal:boolean= false;
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  @Input() public barChartOptions: ChartConfiguration['options'] = {
    responsive: true, 
    indexAxis: 'x'
  };
  public barChartType: ChartType = 'bar';

  @Input() public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#04D4AF',hoverBackgroundColor: '#67D404'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#3406EB',hoverBackgroundColor: '#EBE11E'}
    ]
  };
  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'bar'
    }
  }

}
