import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualFruitComponent } from './individual-fruit/individual-fruit.component';
import { IndividualProductComponent } from './individual-product/individual-product.component';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { InidvidualFruitQueryStringComponent } from './inidvidual-fruit-query-string/inidvidual-fruit-query-string.component';
import { IndividualVehicleComponent } from './individual-vehicle/individual-vehicle.component';
import { InvalidVehicleComponent } from './invalid-vehicle/invalid-vehicle.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'menu', component: DashboardComponent },
  { path: 'fruit', component: IndividualFruitComponent },
  { path: 'fruit/:fruitName', component: IndividualFruitComponent },
  { path: 'product/:category/:productName', component: IndividualProductComponent },
  { path: 'reactive/:category/:productName', component: ReactiveProductComponent },
  { path: 'fruit-qs', component: InidvidualFruitQueryStringComponent },
  {
    path: 'vehicle', component: AllVehiclesComponent,
    children: [
      { path: '404', component: InvalidVehicleComponent },
      { path: ':vehicleId', component: IndividualVehicleComponent },
    ]
  },
  { path: '**', redirectTo: '404' },//THIS MUST BE AT LAST
  { path: '404', component: InvalidUrlComponent },//THIS MUST BE AT LAST

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
