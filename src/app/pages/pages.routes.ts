import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgresComponent } from './progres/progres.component';

const pagesRoutes: Routes = [
    {path: '', component: PagesComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'progres', component: ProgresComponent},
        {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);