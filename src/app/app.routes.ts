import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { ProgresComponent } from './pages/progres/progres.component';
import { NopageComponent } from './shared/nopage/nopage.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '**', component: NopageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});