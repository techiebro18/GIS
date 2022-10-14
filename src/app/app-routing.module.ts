import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArcgisComponent } from './arcgis/arcgis.component';


const routes: Routes = [
  {path : '', component : AppComponent},
  {path: 'arcgis', component: ArcgisComponent}
];

  

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }