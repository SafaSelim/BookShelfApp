import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './pages/book-shelf/book-shelf.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const routes: Routes = [
  { path: 'new-book', component: BookFormComponent, data: { title: 'Add New Book' } },
  { path: 'books', component: BookShelfComponent,  data: { title: 'Books' } },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
