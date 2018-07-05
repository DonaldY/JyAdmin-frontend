import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    adminForm: FormGroup;
    
    constructor(public router: Router) {
       let fb = new FormBuilder();
       this.adminForm = fb.group({
           adminName: ['', Validators.minLength(3)],
           password: ['', Validators.minLength(3)]
       });
    }

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    
    
}
