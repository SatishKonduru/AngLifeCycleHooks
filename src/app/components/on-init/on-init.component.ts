import { CommonModule } from '@angular/common';
import { CSP_NONCE, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-on-init',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-init.component.html',
  styleUrl: './on-init.component.css'
})
export class OnInitComponent implements OnChanges, OnInit{
  @Input() message: string[];
  @ViewChild('messageRef') messageEl : ElementRef;
  constructor(){
    // console.log("OnInit Component constructor Called...")
    // console.log("message value in Constructor:" ,this.message)
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log("OnInit Component: OnChanges hook called....")
  // console.log("message value in OnChanges: ", this.message)
  // console.log("ONInit Component: OnChages Hook: ", changes)
}

ngOnInit(): void {
  console.log("OnInit Component: OnInit Hook Called...")
  // console.log("message value in OnInit: ", this.message)
  // console.log("Message Element using @ViewChild: ", this.messageEl.nativeElement.innerHTML)
}

}
