import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit {
  selectedCategory: string = '';
  selectedItem: string = '';
  displayMessage: string = '';
  titleCasePipe = new TitleCasePipe()
  count = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log("ReactiveProductComponent constructor", new Date().toLocaleString());
  }

  ngOnInit() {
    console.log("ReactiveProductComponent ngOnInit", new Date().toLocaleString());
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("ReactiveProductComponent params Change Detected", new Date().toLocaleString());
      console.log(params);
      this.selectedCategory = params['category'] as string;
      this.selectedItem = params['productName'] as string;
      if (this.selectedCategory && this.selectedItem)
        this.displayMessage = "You have selected " + this.titleCasePipe.transform(this.selectedItem) + " from " + this.titleCasePipe.transform(this.selectedCategory) + " category";
      else this.displayMessage = "Please select a product";
    })
  }

  changeAddress() {
    this.router.navigate(['/reactive', 'fruit', 'apple' + this.count++]);
  }

}
