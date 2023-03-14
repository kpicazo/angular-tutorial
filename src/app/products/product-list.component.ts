import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';

    // we need to store subscription in a variable so we can unsubscribe 
    sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

    // By convention, class methods are created after its properties are defined.
    // We don't need the "function" keyword here.

    // Shorthand constructor syntax for initializing a class property.
    // We use dependency injection here to inject the product service when component is instantiated.
    constructor(private productService: ProductService) { }

    performFilter(filterBy: string) : IProduct[] {
        // we need a case insensitive comparison
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().includes(filterBy)
        );
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // Fetch data here
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // This fires when star rating is clicked on
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }
 }
