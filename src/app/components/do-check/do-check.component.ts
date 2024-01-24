import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-do-check',
  standalone: true,
  imports: [],
  templateUrl: './do-check.component.html',
  styleUrl: './do-check.component.css'
})
export class DoCheckComponent implements DoCheck{
@Input() message : string

ngDoCheck(): void {
console.log("DoCheck Component: DoCheck hook Called...")
}
}
