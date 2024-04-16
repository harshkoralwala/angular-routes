import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-vehicle',
  templateUrl: './individual-vehicle.component.html',
  styleUrls: ['./individual-vehicle.component.css']
})
export class IndividualVehicleComponent implements OnInit {

  selectedVehicle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedVehicle = this.route.snapshot.params['vehicleId'] as string;
    if (this.selectedVehicle) this.selectedVehicle = "You have clicked on " + this.selectedVehicle;
    else this.selectedVehicle = "Opps! No Vehicle selected";
  }

}
