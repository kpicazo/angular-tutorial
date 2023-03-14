import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    // Child component can get data from parent component with @Input.
    // Multiple @Input properties can be added to a component.
    @Input() rating: number = 0;
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}