import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from './parks/parks.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '', redirectTo: 'parks', pathMatch: 'full' },
  { path: 'parks', component: ParksComponent },
  { path: 'parks/:_id', component: VehiclesComponent   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoParkRoutingModule { }
