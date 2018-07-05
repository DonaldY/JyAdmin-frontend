import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpuComponent } from './spu.component';

describe('SpuComponent', () => {
    let component: SpuComponent;
    let fixture: ComponentFixture<SpuComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [SpuComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SpuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
