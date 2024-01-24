import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  standalone: true,
  imports: [],
  templateUrl: './on-changes.component.html',
  styleUrl: './on-changes.component.css'
})
export class OnChangesComponent implements OnChanges{
@Input() message: any;
constructor(){
  console.log("Message value in Constructor: ", this.message)
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges called...")
  console.log("Value of Message: ", this.message)
  console.log("Changes: ", changes)
}
}
