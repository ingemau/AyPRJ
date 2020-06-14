import { NgModule } from '@angular/core';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ProgresComponent } from './progres/progres.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProgresComponent
    ],
    exports: [
        PagesComponent,
        HomeComponent,
        ProgresComponent
    ],

    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }