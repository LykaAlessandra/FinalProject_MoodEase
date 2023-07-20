import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotlinePage } from './hotline.page';

const routes: Routes = [
  {
    path: '',
    component: HotlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotlinePageRoutingModule {}
