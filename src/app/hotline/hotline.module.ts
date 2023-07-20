import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotlinePageRoutingModule } from './hotline-routing.module';

import { HotlinePage } from './hotline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotlinePageRoutingModule
  ],
  declarations: [HotlinePage]
})
export class HotlinePageModule {}
