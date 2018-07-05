import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpuComponent } from './spu.component';

const routes: Routes = [
    {
        path: '',
        component: SpuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpuRoutingModule {}
