import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.scss'],
  providers: [TitleCasePipe]
})
export class IndividualProductComponent implements OnInit {

  selectedCategory: string = '';
  selectedItem: string = '';
  displayMessage: string = '';
  titleCasePipe = new TitleCasePipe()
  count = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log("IndividualProductComponent constructor", new Date().toLocaleString());
  }

  ngOnInit() {
    console.log("IndividualProductComponent ngOnInit", new Date().toLocaleString());

    this.selectedCategory = this.activatedRoute.snapshot.params['category'] as string;
    this.selectedItem = this.activatedRoute.snapshot.params['productName'] as string;

    if (this.selectedCategory && this.selectedItem)
      this.displayMessage = "You have selected " + this.titleCasePipe.transform(this.selectedItem) + " from " + this.titleCasePipe.transform(this.selectedCategory) + " category";
    else this.displayMessage = "Please select a product";
  }

  changeAddress() {
    this.router.navigate(['/product', 'fruit', 'apple' + this.count++]);
  }

}
