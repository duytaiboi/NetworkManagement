import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TemplateComponent } from "./template.component";
import { TemplateHomeComponent } from "./template-home/template-home.component";
const routes: Routes = [
    {
        path: 'template',
        component: TemplateComponent,
        children: [
            {
                path: 'home',
                component: TemplateHomeComponent,
            },
        ]

    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        TemplateComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class TemplateRoutingModule { }