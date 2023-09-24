import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './pages/book-shelf/book-shelf.component';

const routes: Routes = [
  { path: 'books', component: BookShelfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
