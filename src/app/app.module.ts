import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';

import { HighlightedDirective } from './directives/highlighted.directive';
import { provideHttpClient } from '@angular/common/http';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    BrowserAnimationsModule,
    HighlightedDirective,
    FilterByCategoryPipe
  ],
  providers: [
    provideHttpClient()
  ],
  // bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
