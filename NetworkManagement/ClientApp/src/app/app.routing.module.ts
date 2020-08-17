import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    {
        path: 'report',
        loadChildren: './report/report.module#ReportModule'
    },
    {
        path: 'template',
        loadChildren: './template/template.module#TemplateModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
