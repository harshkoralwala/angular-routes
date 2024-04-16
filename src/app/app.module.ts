import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualFruitComponent } from './individual-fruit/individual-fruit.component';
import { HeaderComponent } from './header/header.component';
import { IndividualProductComponent } from './individual-product/individual-product.component';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { InidvidualFruitQueryStringComponent } from './inidvidual-fruit-query-string/inidvidual-fruit-query-string.component';
import { IndividualVehicleComponent } from './individual-vehicle/individual-vehicle.component';
import { InvalidVehicleComponent } from './invalid-vehicle/invalid-vehicle.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndividualFruitComponent,
    HeaderComponent,
    IndividualProductComponent,
    ReactiveProductComponent,
    InidvidualFruitQueryStringComponent,
    IndividualVehicleComponent,
    InvalidVehicleComponent,
    InvalidUrlComponent,
    AllVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
