import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            { path: '', redirectTo: 'spu' },
            { path: 'spu', loadChildren: './spu/spu.module#SpuModule' }
            //{ path: 'sku', loadChildren: './sku/sku.module#SkuModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
