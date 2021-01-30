import { Component } from '@angular/core';
import { AccordionItem } from './models/accordion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressValue = 15;
  accordianItems: AccordionItem [] = [
    {
      title: 'Example 1',
      content: 'Example 1 Content',
      isExpanded: false
    },
    {
      title: 'Example 2',
      content: 'Example 2 Content',
      isExpanded: false
    }
  ];
}
