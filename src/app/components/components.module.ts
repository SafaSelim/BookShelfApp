import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [BookCardComponent, FilterSectionComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [BookCardComponent, FilterSectionComponent, HeaderComponent]
})
export class ComponentsModule { }
