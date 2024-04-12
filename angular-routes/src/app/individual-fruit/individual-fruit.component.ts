import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-fruit',
  templateUrl: './individual-fruit.component.html',
  styleUrls: ['./individual-fruit.component.scss']
})
export class IndividualFruitComponent implements OnInit {

  selectedFruit: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot);
    this.selectedFruit = this.route.snapshot.params['fruitName'] as string;
    if (this.selectedFruit) this.selectedFruit = "You have clicked on " + this.selectedFruit;
    else this.selectedFruit = "Opps! No fruit selected";
  }
}
