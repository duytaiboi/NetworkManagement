import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReportHomeComponent } from "./report-home.component";
const routes: Routes = [
    {
        path: 'home',
        component: ReportHomeComponent,  
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        ReportHomeComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class ReportHomeRoutingModule { }