import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';
import {
    ChartComponent,
    IPointEventArgs,
  } from '@syncfusion/ej2-angular-charts';
import { Breadcrumb , BreadcrumbClickEventArgs, } from '@syncfusion/ej2-navigations';
  
/**
 * Sample for  Stacked water fall chart
 */
 Breadcrumb 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

    @ViewChild('chart')
    public chart!: ChartComponent;
    public data: Object[] = [
      { x: '2020', y: 46 },
      { x: '2021', y: 27 },
    ];
    public month: Object[] = [
      { x: 'Jan', y: 46 },
      { x: 'Feb', y: 27 },
      { x: 'Mar', y: 40 },
      { x: 'Apr', y: 20 },
      { x: 'May', y: 36 },
      { x: 'Jun', y: 17 },
      { x: 'Jul', y: 26 },
      { x: 'Aug', y: 37 },
      { x: 'Sep', y: 46 },
      { x: 'Oct', y: 17 },
      { x: 'Nov', y: 16 },
      { x: 'Dec', y: 37 },
    ];
    public week: Object[] = [
      { x: 'Week 1', y: 46 },
      { x: 'Week 2', y: 27 },
      { x: 'Week 3', y: 40 },
      { x: 'Week 4', y: 20 },
      { x: 'Week 5', y: 36 },
      { x: 'Week 6', y: 17 },
    ];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
      valueType: 'Category',
      interval: 1,
      width: 2,
      majorGridLines: { width: 0 },
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
      majorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      lineStyle: { width: 0 },
      labelStyle: { color: 'transparent' },
    };
  
    public title: string = 'Olympic Medal Counts - RIO';
    public tooltip: Object = {
      enable: true,
    };
  
    public pointClick(args: IPointEventArgs): void {
      if (args.point.x === '2020' || args.point.x === '2021') {
        args.series.dataSource = this.month;
      } else {
        args.series.dataSource = this.week;
      }
    };
    // custom code end
    public chartArea: Object = {
      border: {
        width: 0,
      }
    };
    public clickHandler(args: BreadcrumbClickEventArgs): void {
      if (args.item.text == 'Level 1') {
        this.chart.series[0].dataSource = this.data;
      } else if (args.item.text == 'Level 2') {
        this.chart.series[0].dataSource = this.month;
      } else if (args.item.text == 'Level 3') {
        this.chart.series[0].dataSource = this.week;
      }
    }
    public width: string = '40%';
    constructor() {
      //code
    }

}