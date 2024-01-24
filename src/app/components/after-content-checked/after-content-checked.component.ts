import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-checked',
  standalone: true,
  imports: [],
  templateUrl: './after-content-checked.component.html',
  styleUrl: './after-content-checked.component.css'
})
export class AfterContentCheckedComponent implements AfterContentInit, AfterContentChecked{
ngAfterContentInit(): void {
  console.log("ngAfterContentInit Called...")
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked Called...")
}
}
