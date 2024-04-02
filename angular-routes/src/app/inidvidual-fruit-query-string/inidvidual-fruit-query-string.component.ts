import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inidvidual-fruit-query-string',
  templateUrl: './inidvidual-fruit-query-string.component.html',
  styleUrls: ['./inidvidual-fruit-query-string.component.css']
})
export class InidvidualFruitQueryStringComponent implements OnInit {

  selectedFruit: string = '';
  isTasty: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.selectedFruit = this.activatedRoute.snapshot.queryParams['name'];
    this.isTasty = this.activatedRoute.snapshot.queryParams['isTasty'];

    if (this.selectedFruit) this.selectedFruit = "You have clicked on " + this.selectedFruit;
    else this.selectedFruit = "Opps! No fruit selected";


    //#region REACTIVE WAY
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      console.log("queryParam", queryParam)
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log("fragment", fragment)
    });
    //#endregion


  }

}
