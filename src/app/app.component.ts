import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { OnInitComponent } from './components/on-init/on-init.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { AfterContentInitComponent } from './components/after-content-init/after-content-init.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            OnChangesComponent,
            OnInitComponent,
            DoCheckComponent,
            AfterContentInitComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngLifeCycleHooks';
  msg: string= ''

  onClick(el: HTMLInputElement){
    this.msg = el.value
  }
}
