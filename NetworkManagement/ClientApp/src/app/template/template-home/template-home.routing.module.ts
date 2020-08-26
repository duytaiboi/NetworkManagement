import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TemplateHomeComponent } from "./template-home.component";
const routes: Routes = [
    {
        path: 'home',
        component: TemplateHomeComponent,  
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        TemplateHomeComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class TemplateHomeRoutingModule { }