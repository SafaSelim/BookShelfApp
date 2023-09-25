import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'books/book-details/:bookId', loadChildren: () => import('../book-details//book-details.module').then(m => m.BookDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookShelfRoutingModule {}
