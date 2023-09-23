import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookShelfComponent } from './book-shelf.component';
import { BookShelfRoutingModule } from './book-shelf-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [BookShelfComponent],
  imports: [
    CommonModule,
    BookShelfRoutingModule,
    ComponentsModule,
  ],
  exports: [BookShelfComponent]
})
export class BookShelfModule { }
