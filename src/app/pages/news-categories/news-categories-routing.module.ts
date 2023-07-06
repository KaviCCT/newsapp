import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsCategoriesPage } from './news-categories.page';

const routes: Routes = [
  {
    path: '',
    component: NewsCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCategoriesPageRoutingModule {}
