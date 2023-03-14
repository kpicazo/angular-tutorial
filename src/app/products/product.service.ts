import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    // This can be a URL to any web server
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    // Move data access from Product component to this service
    // to take data management responsibility away from the individual component.
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
            // with pipe(), can specify a set of operators on the returned Observable
            .pipe(
                tap(data => console.log('All', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}