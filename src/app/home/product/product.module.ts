import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [
        CommonModule, 
        ProductRoutingModule,
        HttpClientModule
    ],
    declarations: [ProductComponent]
})
export class ProductModule {}
