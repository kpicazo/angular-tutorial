import { Component, EventEmitter, Input, Output, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    cropWidth: number = 75;

    // Child component can get data from parent component with @Input.
    @Input() rating: number = 0;

    // Child component can pass data back to its parent component with @Output properties.
    // Output() properties must be events.
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        // This message will be emitted to the parent component.
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}