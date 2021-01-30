import { Component, Input } from '@angular/core';
import { AccordionItem } from 'src/app/models/accordion.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    console.log(item.isExpanded);

    item.isExpanded = !item.isExpanded;
  }
}
