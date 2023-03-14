import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`

    // imitate an HTTP response by hardcoding product data
    this.product = {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  }

  // Routing with code (vs routing with routerlink directive in a template)
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
