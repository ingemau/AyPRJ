import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopageComponent } from './nopage/nopage.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopageComponent
    ],

    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopageComponent
    ]
})

export class SharedModule { }