import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-spu',
    templateUrl: './spu.component.html',
    styleUrls: ['./spu.component.scss'],
    animations: [routerTransition()]
})
export class SpuComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}
