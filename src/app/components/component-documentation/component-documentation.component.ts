import { Component } from '@angular/core';
import { AccordionItem } from 'src/app/models/accordion.model';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {
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
  toggleValue = false;
}
