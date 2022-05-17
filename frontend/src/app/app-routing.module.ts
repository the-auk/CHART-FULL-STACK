import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChartViewComponent } from './chart-view/chart-view.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'chart', component: ChartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
