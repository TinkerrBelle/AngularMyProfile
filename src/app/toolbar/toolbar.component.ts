import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  currentPage: string;

  constructor() {
    this.currentPage = 'about';

    
  }
  changePage(page: string): void {
    this.currentPage = page;
  }



}
