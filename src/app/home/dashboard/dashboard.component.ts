import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: '呼啸而来',
                text:
                    '信息的浪潮，呼啸而来.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: '绚烂缤纷',
                text: '外面的世界很精彩.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: '守得云开',
                text:
                    '天空中虽然飘着云.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Hi, 这里是璟鹰建材后台V1.0((⊙o⊙)…，还算不上1.0)。
                除了复制与粘贴，还有诗与远方！~ 加油哈。`
            }
            // },
            // {
            //     id: 2,
            //     type: 'warning',
            //     message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            //     Voluptates est animi quibusdam praesentium quam, et perspiciatis,
            //     consectetur velit culpa molestias dignissimos
            //     voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            // }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
