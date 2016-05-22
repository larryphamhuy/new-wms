import {Component} from '@angular/core';
import {DragDropComponent} from "./drag-drop/drag-drop.component";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/components/login.component";


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container">            
            <nav class="navbar navbar-pill">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a [routerLink]="['Home']">Home</a></li>
                    <li class="nav-item"><a [routerLink]="['Drag Drop']">Drag-and-Drop</a></li>
                    <li class="nav-item"><a [routerLink]="['Login']">Login</a></li>
                </ul>
            </nav>
        </div>
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    `,
})
@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/drag-drop', name: 'Drag Drop', component: DragDropComponent },
    {path: '/login', name: 'Login', component: LoginComponent }
])
export class AppComponent {

}