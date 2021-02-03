import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './components.routes';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
    SharedComponentsModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
