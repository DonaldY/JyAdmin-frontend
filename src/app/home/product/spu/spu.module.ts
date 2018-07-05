import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpuRoutingModule } from './spu-routing.module';
import { SpuComponent } from './spu.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [CommonModule, SpuRoutingModule, PageHeaderModule],
  declarations: [SpuComponent]
})
export class SpuModule {}
