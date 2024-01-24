import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  standalone: true,
  imports: [],
  templateUrl: './after-content-init.component.html',
  styleUrl: './after-content-init.component.css'
})
export class AfterContentInitComponent implements DoCheck,AfterContentInit{

  @ContentChild('projRef') projectedData : ElementRef
  ngDoCheck(): void {
    // console.log("In ngDoCheck: Projected Data: ", this.projectedData)
    // console.log("ngDoCheck called....")

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called....")
    console.log("in ngAfterContentInit: Projected Data: ", this.projectedData.nativeElement.innerHTML)
  }
}
