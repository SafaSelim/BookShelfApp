import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './pages/book-shelf/book-shelf.component';

const routes: Routes = [
  { path: 'books', loadChildren: () => import('./pages/book-shelf/book-shelf.module').then(m => m.BookShelfModule) },
  // { path: 'books', component: BookShelfComponent},
  // { path: 'books', loadChildren: () => import('./pages/book-shelf/book-shelf.module').then(m => m.BookShelfModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
