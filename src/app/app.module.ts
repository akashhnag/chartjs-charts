import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { PolarareachartComponent } from './polarareachart/polarareachart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { CombochartComponent } from './combochart/combochart.component';
import { HorizontalbarComponent } from './horizontalbar/horizontalbar.component';
import { StackedbarComponent } from './stackedbar/stackedbar.component';
import { SteppedLineComponent } from './stepped-line/stepped-line.component';
import { LineStylesComponent } from './line-styles/line-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    LinechartComponent,
    RadarchartComponent,
    PiechartComponent,
    DonutchartComponent,
    PolarareachartComponent,
    BubblechartComponent,
    ScatterplotComponent,
    CombochartComponent,
    HorizontalbarComponent,
    StackedbarComponent,
    SteppedLineComponent,
    LineStylesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
