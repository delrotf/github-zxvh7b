import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('tabset') tabset: ElementRef;
    constructor() {
    }

  onTabChange() {
    window.scrollTo(0, this.tabset.nativeElement.offsetTop + 1);
  }
}
