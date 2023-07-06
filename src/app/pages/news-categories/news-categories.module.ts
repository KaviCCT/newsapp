import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsCategoriesPageRoutingModule } from './news-categories-routing.module';

import { NewsCategoriesPage } from './news-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsCategoriesPageRoutingModule
  ],
  declarations: [NewsCategoriesPage]
})
export class NewsCategoriesPageModule {}
