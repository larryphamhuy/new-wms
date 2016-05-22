import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
    selector: 'signup',
    directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
    templateUrl: './app/signup/signup.component.html'
})
export class SignupComponent {
    constructor(public router: Router, public http: Http) {
    }

    signup(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        this.http.post('http://localhost:3001/users', body, { headers: contentHeaders })
            .subscribe(
                response => {
                    localStorage.setItem('jwt', response.json().id_token);
                    this.router.parent.navigateByUrl('/home');
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }

    login(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/login');
    }

}
