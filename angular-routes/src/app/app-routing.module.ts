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
  //Default Routes
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'menu', component: DashboardComponent },
  //COL 1
  { path: 'fruit', component: IndividualFruitComponent }, //COL 1 || Passing and fetching Single data as path (Static)
  { path: 'fruit/:fruitName', component: IndividualFruitComponent }, //COL 1 || Passing and fetching Single data as path (Static)
  //COL 2
  { path: 'product/:category/:productName', component: IndividualProductComponent }, //COL 2 || Passing and fetching Multiple data as path (Static)
  //COL 3
  { path: 'reactive/:category/:productName', component: ReactiveProductComponent }, //COL 3 || Passing and fetching Multiple data as path (Reactive)
  //COL 4
  { path: 'fruit-qs', component: InidvidualFruitQueryStringComponent }, //COL 4 || Passing and fetching data as QueryString + Landing on Fragment / specific content
  //COL 5
  {
    path: 'vehicle', component: AllVehiclesComponent, pathMatch: 'prefix',  //COL 5 || Child Components and Routes
    children: [
      { path: '404', component: InvalidVehicleComponent },
      { path: ':vehicleId', component: IndividualVehicleComponent },
    ]
  },
  //COL 6
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) //COL 6 || Lazy Loading
  },
  //COL 7
  { path: '**', redirectTo: '404' },//COL 6 || 404 - No route found || THIS MUST BE AT LAST
  { path: '404', component: InvalidUrlComponent },//COL 6 || 404 - No route found || THIS MUST BE AT LAST

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
