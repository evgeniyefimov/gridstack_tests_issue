import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GridstackModule } from 'gridstack/dist/angular';
import { GridStackOptions } from 'gridstack';

@Component({
  standalone: true,
  imports: [GridstackModule, RouterModule],
  selector: 'test-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public gridOptions: GridStackOptions = {
    margin: 5,
    children: [
      // or call load()/addWidget() with same data
      { x: 0, y: 0, minW: 2, content: 'Item 1' },
      { x: 1, y: 0, content: 'Item 2' },
      { x: 0, y: 1, content: 'Item 3' },
    ],
  };
}
