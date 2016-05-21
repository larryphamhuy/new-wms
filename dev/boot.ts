///<reference path="../typings/browser.d.ts"/>
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {DND_PROVIDERS} from "ng2-dnd/ng2-dnd";
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, FORM_PROVIDERS,DND_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
])
    .catch(err => console.error(err));