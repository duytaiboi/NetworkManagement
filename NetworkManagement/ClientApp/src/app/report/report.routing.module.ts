import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { ReportHomeComponent } from "./report-home/report-home.component";
const routes: Routes = [
    {
        path: 'report',
        component: ReportComponent,
        children:[
            {
                path:'home',            
                component:ReportHomeComponent,
            },
        ]
        
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        ReportComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class ReportRoutingModule { }