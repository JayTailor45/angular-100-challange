import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './components.routes';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
    SharedComponentsModule,
  ]
})
export class ComponentsModule { }
