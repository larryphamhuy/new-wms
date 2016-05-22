import {Component} from '@angular/core';
import {DragDropComponent} from "./drag-drop/drag-drop.component";
//import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {RouteConfig, RouterLink, Router} from '@angular/router-deprecated';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/components/login.component";
import {LoggedInRouterOutlet} from "./LoggedInOutlet";
import {SignupComponent} from "./signup/signup.component";


@Component({
    selector: 'my-app',
    directives: [LoggedInRouterOutlet],
    template: `
        <!--<div class="container">            
            <nav class="navbar navbar-pill">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a [routerLink]="['Home']">Home</a></li>
                    <li class="nav-item"><a [routerLink]="['Drag Drop']">Drag-and-Drop</a></li>
                    <li class="nav-item"><a [routerLink]="['Login']">Login</a></li>
                </ul>
            </nav>
        </div>-->
        
        <router-outlet></router-outlet>
        
    `,
})
/*@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/drag-drop', name: 'Drag Drop', component: DragDropComponent },
    {path: '/login', name: 'Login', component: LoginComponent }
])*/
@RouteConfig([
    { path: '/', redirectTo: ['/Home'] },
    { path: '/home', component: HomeComponent, as: 'Home' },
    { path: '/drag-drop', component: DragDropComponent, as: 'Drag Drop' },
    { path: '/login', component: LoginComponent, as: 'Login' },
    { path: '/signup', component: SignupComponent, as: 'Signup' }
])
export class AppComponent {
    constructor(public router: Router) {}
}