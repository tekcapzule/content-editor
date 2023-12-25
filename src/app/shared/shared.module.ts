import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleComponent } from './components/custom-header/title.component';
import { DivSectionComponent } from './components/div-section/div-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableDirective } from './directive/content-editable.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TitleComponent,
    DivSectionComponent,
    ContenteditableDirective
  ],
  exports: [
    TitleComponent,
    DivSectionComponent
  ],
  providers: [
    ContenteditableDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
