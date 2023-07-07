import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news-categories/news-categories.module').then( m => m.NewsCategoriesPageModule)
            },
            {
              path: ':category',
              loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
            },
                {
                  path: ':category/details',
                  loadChildren: () => import('../news-details/news-details.module').then(m => m.NewsDetailsPageModule)
                }
          ]
        },
        {
          path: 'weather',
          children: [
            {
              path: '',
              loadChildren: () => import('../weather/weather.module').then( m => m.WeatherPageModule)
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/news',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}