import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives.routes';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceClickDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES),
    SharedComponentsModule,
  ]
})
export class DirectivesModule { }
