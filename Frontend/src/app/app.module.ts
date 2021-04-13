import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableChartComponent } from './table-chart/table-chart.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'line-chart', component: LineChartComponent},
  {path: 'table-chart', component: TableChartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    TableChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

