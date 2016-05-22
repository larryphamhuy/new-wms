///<reference path="../typings/browser.d.ts"/>
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {DND_PROVIDERS} from "ng2-dnd/ng2-dnd";
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt/angular2-jwt';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, FORM_PROVIDERS,DND_PROVIDERS, HTTP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(AuthHttp, {
        useFactory: (http) => {
            return new AuthHttp(new AuthConfig({
                tokenName: 'jwt'
            }), http);
        },
        deps: [Http]
    })
])
    .catch(err => console.error(err));